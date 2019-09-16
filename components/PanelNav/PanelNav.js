import React, { Component } from 'react';
import Link from 'next/link';
import PubSub from 'pubsub-js';

import './PanelNav.scss';

class PanelNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            carsDataJsonFromState: [],
            data: {}
        }
        this.panelSwitcher = this.panelSwitcher.bind(this);
    }

    componentDidMount() {
        PubSub.subscribe('open:panelNav', () => {
            this.setState({
                isOpen: true
            })
        });

        /* fetching API from Json */
        fetch('http://localhost:3003/cars')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    carsDataJsonFromState: data
                })
                // console.warn(this.state.carsDataJsonFromState)
            })
            .catch(console.log)
    }

    componentWillUnmount() {
        PubSub.unsubscribe();
    }

    panelSwitcher(value) {
        if (value) {
            this.setState({
                isOpen: true
            })
        } else {
            console.warn('close panel');
            this.setState({
                isOpen: false
            })
        }
    }

    render() {
        const mapcars = this.props.items.itemPanel.map((car) => (
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
            <div className={this.state.isOpen ? "panelNav expanded" : "panelNav"}>
                <div className={this.state.isOpen ? "overlay expanded" : "overlay"}
                    onClick={() => this.panelSwitcher(false)}>
                </div>
                <button className="buttonClose outer" onClick={() => this.panelSwitcher(false)}>
                    <div className="inner">
                        <label>Fermer</label>
                    </div>
                </button>
                <h3>cars</h3>
                <ul>
                    {mapcars}
                </ul>
            </div>
        )
    }
}

export default PanelNav;