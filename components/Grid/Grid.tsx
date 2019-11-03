import React, { Component } from 'react';
import Link from 'next/link';
import CSS from 'csstype'
// import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

// ACTIONS
import {
    removeFavorite,
    removeAllFavorite
} from '../../store/actions/actions';

import './Grid.scss';

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
        <div>
            <button onClick={props.removeAllFavorite}>Supprimer tous les favoris</button>
            <ul className="grid">
                {props.item.map((car, index) => (
                    <li key={car.id} className="grid__item" style={car.available ? availableStyles : unavailableStyles} >
                        <div className="grid__preference">
                            {car.preference}
                        </div>
                        <button onClick={() => props.removeFavorite(car.id)}>
                            Supprimer des Favoris
                    </button>
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

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFavorite: (value) => dispatch(removeFavorite(value)),
        removeAllFavorite: (value) => dispatch(removeAllFavorite(value))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Grid);