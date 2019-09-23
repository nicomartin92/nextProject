import React, { Component } from 'react';
import Link from 'next/link';
import PubSub from 'pubsub-js';

import './Autocomplete.scss'

export class Autocomplete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            originCarsDataJsonFromState: [],
            filteredOptions: [],
            userInput: '',
            isExpanded: this.props.isVisible ? true : false,
            isTyping: false
        }
        this.onChange = this.onChange.bind(this);
    }

    /* did mount */
    componentDidMount() {
        PubSub.subscribe('open:search', () => {
            this.setState({
                isExpanded: true
            });
            //this.refs.search.focus();
        });

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

        this.onkeyUp();
    }

    onChange(e) {
        const userInput = this.refs.search.value;

        // const filteredOptions = this.state.originCarsDataJsonFromState.filter(function (car) {
        const filteredOptions = this.props.items.carItems.filter(function (car) {
            return car.model.toLowerCase().match(userInput.toLowerCase()) ||
                car.brand.toLowerCase().match(userInput.toLowerCase()) ||
                car.version.toLowerCase().match(userInput.toLowerCase()) ||
                car.year.toLowerCase().match(userInput.toLowerCase()) ||
                car.brandshop.toLowerCase().match(userInput.toLowerCase()) ||
                car.price.toLowerCase().match(userInput.toLowerCase()) ||
                car.country.toLowerCase().match(userInput.toLowerCase());
        });

        this.setState({
            filteredOptions,
            userInput: userInput
        });
    };

    onkeyUp() {
        this.refs.search.addEventListener('keyup', (event) => {
            if (this.refs.search.value.length > 1) {
                this.setState({
                    isTyping: true
                });
            } else {
                this.setState({
                    isTyping: false
                });
            }
        });
    }

    displaySearch(isExpanded) {
        this.setState({
            isExpanded: isExpanded
        })
    }

    render() {
        const carLength = this.state.filteredOptions.length;
        const stockStore = this.props.items.stock;

        return (
            <div className={this.state.isExpanded ? "search -expanded" : "search"}>
                <div className="search__wrapper">
                    <button className="buttonClose outer"
                        onClick={() => this.displaySearch(false)}>
                        <div className="inner">
                            <label>Fermer</label>
                        </div>
                    </button>

                    <input
                        type="text"
                        className="search__box inputSearch"
                        onChange={() => this.onChange()}
                        value={this.state.userInput}
                        placeholder="Rechercher"
                        ref="search"
                    />

                    <div className="search__carResults">
                        Résultats:<span className="bold"> ({carLength})</span> voiture(s)
                        <span className="bold">({stockStore})</span> à Vendre
                    </div>

                    <ul className={this.state.isTyping ? "search__list -expanded" : "search__list"}>
                        {this.state.filteredOptions.map((car) => (
                            <li className="search__listItem" key={car.id}>
                                <Link
                                    passHref href="/cars/[reference]"
                                    as={`/cars/${car.reference}`}>
                                    <a className="search__listLink" onClick={() => this.displaySearch(false)}>
                                        <img className="search__listImage"
                                            src={`/static${car.views[0].image1}`}
                                            alt={`${this.state.brand} ${this.state.model} ${this.state.version}`} />
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
        );
    }
}

export default Autocomplete;
