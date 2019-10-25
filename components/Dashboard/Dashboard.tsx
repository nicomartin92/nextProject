import React, { Component } from 'react';

/* SVG */
// import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';

import './Dashboard.scss';

const Dashboard = (props: any) => {

    const [dashState, setDashState] = React.useState({
        labels: {
            status: "Status",
            sell: "A Vendre",
            keep: "A garder",
            sold: "Vendus",
            delete: "Supprimer"
        }
    });

    const toSell = (car: any) => {
        if (car.available && car.stock > 0) {
            return (
                <div>
                    <img width="120" src={`/static${car.views[0].image1}`} alt={`${car.brand} ${car.model} ${car.version}`} />
                </div>
            )
        }
    }

    const sold = (car: any) => {
        if (!car.available && car.stock < 1 && car.sold) {
            return (
                <div>
                    <img width="120" src={`/static${car.views[0].image1}`} alt={`${car.brand} ${car.model} ${car.version}`} />
                </div>
            )
        }
    }

    const keep = (car: any) => {
        if (car.keep) {
            return (
                <div>
                    <img width="120" src={`/static${car.views[0].image1}`} alt={`${car.brand} ${car.model} ${car.version}`} />
                </div>
            )
        }
    }

    const deleteCar = (id: number) => {
        this.props.deleteCar(id);
    }

    const { labels } = dashState;

    const carRows = props.items.map((car: any) => {
        return (
            <div className="gridTable__row" key={car.id}>
                <div className="gridTable__cell">
                    {car.brand} {car.model} {car.version}
                </div>

                <div className="gridTable__cell">
                    {keep(car)}
                </div>

                <div className="gridTable__cell">
                    {toSell(car)}
                </div>

                <div className="gridTable__cell">
                    {sold(car)}
                </div>

                <div className="gridTable__cell">
                    {/* <button onClick={() => this.deleteCar(car.id)}>
                    <DeleteIcon className="dashboard__icon" /> 
                    </button> */}
                </div>
            </div>
        )
    })    

    return (
        <div>
            <div className="gridTable">
                <div className="gridTable__row">
                    <div className="gridTable__cell">{labels.status}:</div>
                    <div className="gridTable__cell">{labels.keep}</div>
                    <div className="gridTable__cell">{labels.sell}</div>
                    <div className="gridTable__cell">{labels.sold}</div>
                    <div className="gridTable__cell">{labels.delete}</div>
                </div>
                {carRows}
            </div>
        </div>
    );
};

export default Dashboard;