import React, { Component } from 'react';
import Link from 'next/link';
import PubSub from 'pubsub-js';

import './Autocomplete.scss'

const Autocomplete = (props: any) => {
    const search = React.useRef(null);
    const [filteredOptions, setfilteredOptions] = React.useState([]);
    const [userInput, setUserInput] = React.useState('');
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [isTyping, setIsTyping] = React.useState(false);


    React.useEffect(() => {

        PubSub.subscribe('open:search', () => {
            setIsExpanded(true);
            search.current.focus();
        });

        return () => {
            PubSub.unsubscribe();
        };

        /* fetching API from Json */
        /* fetch('http://localhost:3003/cars')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    originCarsDataJsonFromState: data
                })
                // console.warn(this.state.filteredOptions)
            })
            .catch(console.log); */
    }, []);

    const handleChange = (e: any) => {
        const userInput = e.target.value;

        // const filteredOptions = this.state.originCarsDataJsonFromState.filter(function (car) {
        const filteredOptions = props.items.carItems.filter(function (car: any) {
            return car.model.toLowerCase().match(userInput.toLowerCase()) ||
                car.brand.toLowerCase().match(userInput.toLowerCase()) ||
                car.version.toLowerCase().match(userInput.toLowerCase()) ||
                car.year.toLowerCase().match(userInput.toLowerCase()) ||
                car.brandshop.toLowerCase().match(userInput.toLowerCase()) ||
                car.price.toLowerCase().match(userInput.toLowerCase()) ||
                car.country.toLowerCase().match(userInput.toLowerCase());
        });

        setfilteredOptions(filteredOptions);
        setUserInput(userInput);

        handleTyping(userInput);
    };

    const handleTyping = (elem: any) => {
        if (elem.length > 1) {
            setIsTyping(true);
        } else {
            setIsTyping(false);
        }
    }

    const displaySearch = (isExpanded: boolean) => {
        setIsExpanded(isExpanded);
    }

    const carLength = filteredOptions.length;
    const stockStore = props.items.stock;

    return (
        <div className={isExpanded ? "search -expanded" : "search"}>
            <div className="search__wrapper">
                <button className="buttonClose outer"
                    onClick={() => displaySearch(false)}>
                    <div className="inner">
                        <label>Fermer</label>
                    </div>
                </button>

                <input
                    type="text"
                    className="search__box inputSearch"
                    onChange={handleChange}
                    value={userInput}
                    placeholder="Rechercher"
                    ref={search}
                />

                <div className="search__carResults">
                    Résultats:<span className="bold"> ({carLength})</span> voiture(s)
                        <span className="bold">({stockStore})</span> à Vendre
                    </div>

                <ul className={isTyping ? "search__list -expanded" : "search__list"}>
                    {filteredOptions.map((car) => (
                        <li className="search__listItem" key={car.id}>
                            <Link
                                passHref href="/cars/[reference]"
                                as={`/cars/${car.reference}`}>
                                <a className="search__listLink" onClick={() => displaySearch(false)}>
                                    <img className="search__listImage"
                                        src={`/static${car.views[0].image1}`}
                                        alt={`${car.brand} ${car.model} ${car.version}`} />
                                    <div>
                                        <span className="bold">{car.brand} {car.model} {car.version}</span> - <span className="skew">{car.brandshop}</span>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Autocomplete;
