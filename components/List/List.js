import React, { Component } from 'react'
import Link from 'next/link'
// import { NavLink } from 'react-router-dom';

/* SVG */
// import { ReactComponent as BuyIcon } from '../../assets/buy-icon.svg';

import './List.scss'

/* const Card = (props) => {

    return (
        <div className="card">
            <img src={props.item.image} alt="" />
            <h3>{props.item.title}</h3>
            <p>{props.item.brand} {props.item.model} {props.item.version}</p>
            <p style={{display: !props.item.year && "none"}}>{props.item.year}</p>
        </div>
    )
} */

class List extends Component {
    render() {
        const unavailableStyles = {
            opacity: "0.5",
            pointerEvents: "none"
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

        const carRows = this.props.items.map(car => {
            return (
                <li className="list__item" key={car.id}>
                    <div className="list__itemContainer" style={car.available ? availableStyles : unavailableStyles}>
                        <img src={`/static${car.image}`} loading="lazy" alt={car.model} />
                        <div>{car.title}</div>
                        <div>{car.brandshop} - {car.brand} {car.model} {car.version}</div>
                        <div style={{ display: !car.year && "none" }}>{car.year}</div>
                        <div>Stock:  {car.stock}</div>
                        {/* <button className="button" onClick={() => this.props.countStock(car.id)}>
                        Acheter
                        <BuyIcon className="list__icon" />
                    </button> */}
                        <Link className="button" href={`/cars/${car.reference}`}>
                            <a className="button">Voir modèle {car.model}</a>
                        </Link>
                    </div>
                </li>

            )
        });

        return (
            <ul className="list__wrapper">
                {carRows}
            </ul>
        )
    }
}

export default List;