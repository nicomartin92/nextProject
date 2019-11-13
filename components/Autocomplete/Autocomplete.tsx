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
    const [position, setPosition] = React.useState(-1);
    const [targetElem, setTargetElem] = React.useState(null);

    React.useEffect(() => {
        PubSub.subscribe('open:search', () => {
            setIsExpanded(true);
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
                // car.price.match(userInput) ||
                car.country.toLowerCase().match(userInput.toLowerCase()) ||
                car.category.toLowerCase().match(userInput.toLowerCase()) ||
                car.segment.toLowerCase().match(userInput.toLowerCase());
        });

        setfilteredOptions(filteredOptions);
        setUserInput(userInput);

        handleTyping(userInput, e);
    }

    const handleKeydown = (e: any) => {
        let target = null;
        let allLinks = document.querySelectorAll('.search__listLink');
        
        if (e.keyCode === 40 && e.target.value.length > 1) {
            target = document.querySelectorAll('.search__listLink')[position+1];
            
            allLinks.forEach(element => {
                element.classList.remove('selected');
            });
            
            if(target) {
                target.classList.add('selected');
                setPosition(position+1);
                setTargetElem(target);
            }
        } else if (e.keyCode === 38 && e.target.value.length > 1) {
            target = document.querySelectorAll('.search__listLink')[position-1];

            allLinks.forEach(element => {
                element.classList.remove('selected');
            });

            if(target) {
                target.classList.add('selected');
                setPosition(position-1);
                setTargetElem(target);
            }
        }

        if(e.keyCode === 13) {
            location.href = targetElem.href;
        }
    }

    const handleTyping = (elem: any, e: any) => {
        if (elem.length > 1) {
            setIsTyping(true);
        } else {
            setIsTyping(false);
        }
    }

    const displaySearch = (isExpanded: boolean) => {
        setIsExpanded(isExpanded);

        if(isExpanded) {
            console.warn(search);
            search.current.focus();
        } 
        search.current.focus();
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
                    onKeyDown={handleKeydown}
                    value={userInput}
                    placeholder="Rechercher"
                    ref={search}
                />

                <div className="search__carResults">
                    Résultats:<span className="bold"> ({carLength})</span> voiture(s)
                        <span className="bold">({stockStore})</span> à Vendre
                    </div>

                <ul className={isTyping ? "search__list -expanded" : "search__list"}>
                    {filteredOptions.map((car, index) => (
                        <li className="search__listItem" key={car.id}>
                            <Link
                                passHref href="/cars/[reference]"
                                as={`/cars/${car.reference}`}>
                                <a className="search__listLink" 
                                   onClick={() => displaySearch(false)}
                                   data-position={index}>
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
