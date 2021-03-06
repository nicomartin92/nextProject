import React, { Component } from 'react';

import List from '../List/List';
import RangeSlider from '../RangeSlider/RangeSlider';
import SearchInput from './SearchInput';

import './Search.scss';

const Search = (props: any) => {
    const [carsDataJsonFromState, setCarsDataJsonFromState] = React.useState(props.items);
    const [searchString, setSearchString] = React.useState('');
    const [expandPanel, setExpandPanel] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const countStock = (id: number) => {
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

    const filterByPriceLimit = (arg: any) => {
        console.warn(props.items, arg)
        let _cars = props.items.filter(car => car.price <= arg);
        setCarsDataJsonFromState(_cars);
    }

    const filterByYearLimit = (arg: any) => {
        let _cars = props.items.filter(car => car.year <= arg);
        setCarsDataJsonFromState(_cars);
    }

    const handleChange = (e: any) => {
        setSearchString(e.target.value);
    }

    const year = (year: string) => {
        let _cars1 = props.items;
        setLoading(true);
        _cars1 = _cars1.slice().sort((a: any, b: any) => {
            if (year === 'asc') {
                return a.year - b.year
            } else {
                return b.year - a.year
            }
        });
        setCarsDataJsonFromState(_cars1);

        setTimeout(() => {
            setLoading(false);
        }, 300);
    }

    const countryBrand = (country: string) => {
        let _countryBrand = props.items;
        setLoading(true);
        _countryBrand = _countryBrand.filter(function (car: any) {
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
        setCarsDataJsonFromState(_countryBrand);

        setTimeout(() => {
            setLoading(false);
        }, 300);
    }

    const clearAll = () => {
        // Please keep it
        // let _clearAll = this.state.originCarsDataJsonFromState;
        let _clearAll = props.items;
        setCarsDataJsonFromState(_clearAll);
    }

    const ExpandFilter = (e: any) => {
        setExpandPanel(!expandPanel);
    }

    return (
        <div className="list">
            <div className={expandPanel ? 'open sticky' : 'close sticky'}>
                <button onClick={ExpandFilter}>Ouvrir</button>

                <SearchInput
                    labelExpand={'Ouvrir'}
                    searchString={searchString}
                    handleChange={handleChange}
                    clearAll={clearAll}
                    labelClearAll={'Nettoyer les filtres'}>
                </SearchInput>

                <RangeSlider
                    label={'price'}
                    items={props.items}
                    range={[50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220]}
                    setCarsDataJsonFromState={filterByPriceLimit} />

                {/* <RangeSlider
                    label={'year'}
                    items={carsDataJsonFromState}
                    range={[1970, 1980, 1990, 2000, 2005, 2008, 2010, 2013, 2015, 2017, 2019]}
                setCarsDataJsonFromState={filterByYearLimit} /> */}

                <div className="list__filter">
                    <button className="button" onClick={() => year('asc')} >Année asc</button>
                    <button className="button" onClick={() => year('des')}>Année des</button>
                    <button className="button" onClick={() => countryBrand('fr')}>France</button>
                    <button className="button" onClick={() => countryBrand('de')}>Allemagne</button>
                    <button className="button" onClick={() => countryBrand('it')}>italie</button>
                    <button className="button" onClick={() => countryBrand('1/18')}>1/18</button>
                    <button className="button" onClick={() => countryBrand('1/12')}>1/12</button>
                    <button className="button" onClick={() => countryBrand('available')}>A Vendre</button>
                    <button className="button" onClick={() => countryBrand('not available')}>Vendus</button>
                </div>
            </div>

            <List items={carsDataJsonFromState}
                isLoading={loading}
                countStock={13} />
        </div>
    )
}

export default Search;