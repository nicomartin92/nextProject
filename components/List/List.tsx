import React, { Component } from 'react'
import Link from 'next/link'
import CSS from 'csstype'
import LazyLoad from 'react-lazy-load';
// import { NavLink } from 'react-router-dom';

/* components */
import InViewPort from '../InViewPort/InViewPort';
import ReactCountryFlag from "react-country-flag";

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
                <div className="list__itemContainer" style={car.available ? availableStyles : availableStyles}>
                    <Link href={`/cars/${car.reference}`}>
                        <a title={`${car.brand} ${car.model} ${car.version}`}>
                            <LazyLoad offsetVertical={300}>
                                <img src={`/static${car.image}`} loading="lazy" alt={car.model} />
                            </LazyLoad>

                            <InViewPort as="span" distanceAnimation={150}>
                                <div className="list__title left">{car.title}</div>
                                <div className="list__model left">
                                    <strong>{car.brandshop}</strong> - {car.brand} {car.model} {car.version}
                                    <span className="list__year left" style={{ display: !car.year && "none" }}> ({car.year})</span>
                                    <span> <ReactCountryFlag countryCode={car.country} svg /></span>
                                </div>
                                <div className="hidden">Stock:  {car.stock}</div>
                                <div className="list__price left">Prix:  {car.price} €</div>
                            </InViewPort>
                        </a>
                    </Link>

                    {/* <button className="button" onClick={() => this.props.countStock(car.id)}>
                    Acheter
                    <BuyIcon className="list__icon" />
                </button> */}
                    {/* <button
                        aria-label={`${car.brand} ${car.model} ${car.version}`}
                        className="button"
                        onClick={() => props.addFavorite(car.id)}>
                        Favoris
                        <Favorite />
                    </button>
                    <Link href={`/cars/${car.reference}`}>
                        <a className="button" title={`${car.brand} ${car.model} ${car.version}`}>Voir modèle {car.model}</a>
                    </Link> */}
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
