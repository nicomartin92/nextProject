import React, { Component } from 'react';

/* SVG */
// import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';

import './Search.scss';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carsDataJsonFromState: this.props.items
        }
    }

    countStock = (id) => {
        this.setState(prevState => {
            // const updatedStock = prevState.carsDataJsonFromState.map(item => {
            const updatedStock = this.props.cars.map(item => {
                if (item.id === id) {
                    item.stock = (item.stock - 1)

                    // send notification
                    this.props.toast.text = `${item.brand} ${item.model} ${item.version}`;
                    this.props.toast.image = item.image;
                    this.props.toast.url = item.reference;
                    this.sendToastEvent.current.toastDisplay(true);

                    if (item.stock <= 0 || item.stock === isNaN) {
                        item.stock = 0
                        item.available = !item.available
                    }
                }
                return item
            })
            return {
                carsDataJsonFromState: updatedStock
            }
        })

        this.props.deleteStock(this.props.stock - 1);
    }

    handleChange = () => {
        this.setState({
            searchString: this.refs.search.value
        });
    }

    year = (year) => {
        // Please keep it
        // let _cars1 = this.state.carsDataJsonFromState;
        let _cars1 = this.props.cars;
        _cars1 = _cars1.slice().sort((a, b) => {
            if (year === 'asc') {
                return a.year - b.year
            } else {
                return b.year - a.year
            }
        });
        this.setState({
            carsDataJsonFromState: _cars1
        });
    }

    countryBrand = (country) => {
        // Please keep it 
        // let _countryBrand = this.state.originCarsDataJsonFromState;
        let _countryBrand = this.props.cars;
        _countryBrand = _countryBrand.filter(function (car) {
            switch (country) {
                case 'fr':
                    return car.country === 'fr'
                case 'de':
                    return car.country === 'de'
                case 'it':
                    return car.country === 'it'
                case '1/18':
                    return car.size === '1/18'
                case '1/12':
                    return car.size === '1/12'
                case 'available':
                    return car.available === true
                case 'not available':
                    return car.available === false
                default:
                    return car.country === 'fr'
            }
        });
        this.setState({
            carsDataJsonFromState: _countryBrand
        });
    }

    clearAll = () => {
        // Please keep it
        // let _clearAll = this.state.originCarsDataJsonFromState;
        let _clearAll = this.props.cars;
        this.setState({
            carsDataJsonFromState: _clearAll
        });
    }

    render() {

        return (
            <div className="list">
                <div className="sticky">
                    <div className="list__searchBar">
                        <div className="list__search">
                            <h3 className="center">
                               {/* Chercher un modèle particulier: ({searchCount} disponibles) ({carToSell}) à vendre */} 
                            </h3>
                            <div className="list__searchMain">
                                <input
                                    type="text"
                                    value={this.state.searchString}
                                    ref="search"
                                    onChange={this.handleChange}
                                    placeholder="type name here" />

                                <button className="button" onClick={this.clearAll}>Clear all</button>
                            </div>
                        </div>
                    </div>

                    <div className="list__filter">
                        <button className="button" onClick={() => this.year('asc')} >Année asc</button>
                        <button className="button" onClick={() => this.year('des')}>Année des</button>
                        <button className="button" onClick={() => this.countryBrand('fr')}>France</button>
                        <button className="button" onClick={() => this.countryBrand('de')}>Allemagne</button>
                        <button className="button" onClick={() => this.countryBrand('it')}>italie</button>
                        <button className="button" onClick={() => this.countryBrand('1/18')}>1/18</button>
                        <button className="button" onClick={() => this.countryBrand('1/12')}>1/12</button>
                        <button className="button" onClick={() => this.countryBrand('available')}>A Vendre</button>
                        <button className="button" onClick={() => this.countryBrand('not available')}>Vendus</button>
                    </div>
                </div>

                <ul className="list__wrapper">
                    {/* {carsItemsFromJson} */}
                </ul>
            </div>
        )
    }
}

export default Search;