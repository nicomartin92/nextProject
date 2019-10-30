import React, { Component } from 'react';
import Link from 'next/link';
import CSS from 'csstype'
// import { NavLink } from 'react-router-dom';

import './Grid.scss';

/* class Grid extends Component {
    render() {
        const unavailableStyles = {
            opacity: "0.5"
        }

        const availableStyles = {
            opacity: "1"
        }

        if (this.props.isLoading) {
            return (
                <li className="list__item">
                    <div className="spinner">
                        <span className="spinner-inner-1"></span>
                        <span className="spinner-inner-2"></span>
                        <span className="spinner-inner-3"></span>
                    </div>
                    <h2>Loading card ...</h2>
                </li>
            )
        }

        return (
            <li key={this.props.item.id} className="grid__item" style={this.props.item.available ? availableStyles : unavailableStyles} >
                <div className="grid__preference">
                    {this.props.item.preference}
                </div>
                <div className="grid__info">
                    <h3>{this.props.item.brandshop} - {this.props.item.brand} {this.props.item.model} {this.props.item.version}</h3>
                    <h4>{this.props.item.year}</h4>
                    <p>{this.props.item.description}</p>
                </div>
            </li>
        )
    }
} */

const Grid = (props: any) => {
    const unavailableStyles: CSS.Properties = {
        opacity: 0.5
    }

    const availableStyles: CSS.Properties = {
        opacity: 1
    }

    if (props.isLoading) {
        return (
            <li className="list__item">
                <div className="spinner">
                    <span className="spinner-inner-1"></span>
                    <span className="spinner-inner-2"></span>
                    <span className="spinner-inner-3"></span>
                </div>
                <h2>Loading card ...</h2>
            </li>
        )
    }

    return (
        <ul>
            {props.item.map((car, index) => (
                <li key={car.id} className="grid__item" style={car.available ? availableStyles : unavailableStyles} >
                    <div className="grid__preference">
                        {car.preference}
                    </div>
                    <Link
                        passHref href="/cars/[reference]"
                        as={`/cars/${car.reference}`}>
                        <a>
                            <img className="grid__image"
                                src={`/static${car.views[0].image1}`}
                                alt={`${car.brand} ${car.model} ${car.version}`} />
                        </a>
                    </Link>
                    <div className="grid__info">
                        <h3>{car.brandshop} - {car.brand} {car.model} {car.version}</h3>
                        <h4>{car.year}</h4>
                        <p>{car.description}</p>
                    </div>
                </li>
            ))}

        </ul>
    )
}

export default Grid;