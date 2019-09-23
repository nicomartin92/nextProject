import React, { Component } from 'react';

/* SVG */
// import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';

// import './Dashboard.scss';
import "./Dashboard.scss";

/* class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carsDataFromStore: this.props.items,
            labels: {
                status: "Status",
                sell: "A Vendre",
                keep: "A garder",
                sold: "Vendus",
                delete: "Supprimer"
            }
        }
    }

    toSell(car) {
        if (car.available && car.stock > 0) {
            return (
                <div>
                    <img width="120" src={`/static${car.views[0].image1}`} alt={`${car.brand} ${car.model} ${car.version}`} />
                </div>
            )
        }
    }

    sold(car) {
        if (!car.available && car.stock < 1 && car.sold) {
            return (
                <div>
                    <img width="120" src={`/static${car.views[0].image1}`} alt={`${car.brand} ${car.model} ${car.version}`} />
                </div>
            )
        }
    }

    keep(car) {
        if (car.keep) {
            return (
                <div>
                    <img width="120" src={`/static${car.views[0].image1}`} alt={`${car.brand} ${car.model} ${car.version}`} />
                </div>
            )
        }
    }

    deleteCar = (id) => {
        this.props.deleteCar(id);
    }

    render() {
        const carRows = this.state.carsDataFromStore.map(car => {
            return (
                <div className="gridTable__row">
                    <div className="gridTable__cell">
                        {car.brand} {car.model} {car.version}
                    </div>

                    <div className="gridTable__cell">
                        {this.keep(car)}
                    </div>

                    <div className="gridTable__cell">
                        {this.toSell(car)}
                    </div>

                    <div className="gridTable__cell">
                        {this.sold(car)}
                    </div>

                    <div className="gridTable__cell">
                        
                    </div>
                </div>
            )
        });

        return (
            <div>
                <div className="gridTable">
                    <div className="gridTable__row">
                        <div className="gridTable__cell">{this.state.labels.status}:</div>
                        <div className="gridTable__cell">{this.state.labels.keep}</div>
                        <div className="gridTable__cell">{this.state.labels.sell}</div>
                        <div className="gridTable__cell">{this.state.labels.sold}</div>
                        <div className="gridTable__cell">{this.state.labels.delete}</div>
                    </div>
                    {carRows}
                </div>
            </div>
        )
    }
} */

const Dashboard = () => <div className="dashboard">Dashboard</div>;

export default Dashboard;