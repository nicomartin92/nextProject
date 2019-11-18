import React, { Component } from 'react';
import Link from 'next/link';
import PubSub from 'pubsub-js';

import './PanelNav.scss';

const PanelNav = (props: any) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [carsDataJsonFromState, setCarsDataJsonFromState] = React.useState([]);

    React.useEffect(() => {
        PubSub.subscribe('open:panelNav', () => {
            setIsOpen(true)
        });

        return () => {
            PubSub.unsubscribe();
        };

        /* fetching API from Json */
        /* fetch('http://localhost:3003/cars')
            .then(res => res.json())
            .then((data) => {
                setCarsDataJsonFromState(data)
                // console.warn(this.state.carsDataJsonFromState)
            })
            .catch(console.log) */
    }, []);

    const panelSwitcher = (value: boolean) => {
        if (value) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }

    const mapcars = props.items.carItems.map((car: any) => (
        <li key={car.id}>
            <Link passHref href="/cars/[reference]" as={`/cars/${car.reference}`}>
                <a className="panelNav__item">
                    <div className="panelNav__label">
                        {car.brand} {car.model} {car.version}
                    </div>
                    <div className="panelNav__image">
                        <img src={`/static${car.views[0].image1}`} loading="lazy" alt={car.model} />
                    </div>
                </a>
            </Link>
        </li>
    ))

    return (
        <div className={isOpen ? "panelNav expanded" : "panelNav"}>
            <div className={isOpen ? "overlay expanded" : "overlay"}
                onClick={() => panelSwitcher(false)}>
            </div>
            <button className="buttonClose outer" onClick={() => panelSwitcher(false)}>
                <div className="inner">
                    <label aria-label="fermer">Fermer</label>
                </div>
            </button>
            <h3>cars</h3>
            <ul>
                {mapcars}
            </ul>
        </div>
    )
}

export default PanelNav;