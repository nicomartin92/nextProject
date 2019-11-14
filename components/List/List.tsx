import React, { Component } from 'react'
import Link from 'next/link'
import CSS from 'csstype'
// import { NavLink } from 'react-router-dom';

/* components */
import InViewPort from '../InViewPort/InViewPort';

/* SVG */
import Favorite from '../../static/assets/favorite';

import { connect } from 'react-redux';

// ACTIONS
import {
    addFavorite
} from '../../store/actions/actions';

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

const List = (props: any) => {
    const unavailableStyles: CSS.Properties = {
        opacity: 0.5,
        pointerEvents: "none"
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

    const carRows = props.items.map(car => {
        return (
            <li className="list__item" key={car.id}>
                
                <InViewPort>
                    <p>I am a boy</p>
                    <p>I am a girl</p>
                </InViewPort>

                <div className="list__itemContainer" style={car.available ? availableStyles : unavailableStyles}>
                    <img src={`/static${car.image}`} loading="lazy" alt={car.model} />
                    <div>{car.title}</div>
                    <div>{car.brandshop} - {car.brand} {car.model} {car.version}</div>
                    <div style={{ display: !car.year && "none" }}>{car.year}</div>
                    <div>Stock:  {car.stock}</div>
                    <div>Prix:  {car.price} €</div>
                    {/* <button className="button" onClick={() => this.props.countStock(car.id)}>
                    Acheter
                    <BuyIcon className="list__icon" />
                </button> */}
                    <button className="button" onClick={() => props.addFavorite(car.id)}>
                        Favoris
                        <Favorite />
                    </button>
                    <Link href={`/cars/${car.reference}`}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        addFavorite: (value) => dispatch(addFavorite(value))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(List);
