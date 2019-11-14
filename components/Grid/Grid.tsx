import React, { Component } from 'react';
import Link from 'next/link';
import CSS from 'csstype'
// import { NavLink } from 'react-router-dom';

// SVG
import Delete from '../../static/assets/delete';

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

    const deleteAllFavorite = (props: any) => {
        if (props.item.length > 0) {
            return (
                <button
                    className="button grid__deleteAll"
                    onClick={props.removeAllFavorite}>
                    Supprimer tous les favoris
                    <Delete />
                </button>
            )
        }
    }

    return (
        <div>
            {deleteAllFavorite(props)}
            <ul className="grid">
                {props.item.map((car: any) => (
                    <li key={car.id} className="grid__item" style={car.available ? availableStyles : unavailableStyles} >
                        <button className="grid__delete" onClick={() => props.removeFavorite(car.id)}>
                            <Delete />
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
                            <h3>{car.brandshop} - {car.brand} {car.model} {car.version} {car.year}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        removeFavorite: (value: any) => dispatch(removeFavorite(value)),
        removeAllFavorite: (value: any) => dispatch(removeAllFavorite(value))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Grid);