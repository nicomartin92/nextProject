import React from 'react';
import { Doughnut } from 'react-chartjs-2';

// SCSS
import './PieChart.scss';

const PieChart = (props: any) => {
    const [surveyCollection] = React.useState(props.item);

    const peugeotLength = surveyCollection.filter(car => car.brand === 'Peugeot').length;
    const renaultLength = surveyCollection.filter(car => car.brand === 'Renault').length;
    const bmwLength = surveyCollection.filter(car => car.brand === 'Bmw').length;
    const volkswagenLength = surveyCollection.filter(car => car.brand === 'Volkswagen').length;

    let uniqueBrands = surveyCollection.map(car => car.brand)
        .filter((value, index, self) => self.indexOf(value) === index)

    let uniqueBrandsLength = uniqueBrands.map((brand) => {
        return surveyCollection.filter(car => car.brand === brand).length;
    })

    console.warn(uniqueBrandsLength);

    // console.warn(' ---------------------', brands);

    const datas = {
        labels: uniqueBrands,
        datasets: [{
            data: uniqueBrandsLength,
            backgroundColor: [
                '#74d2e7',
                '#48a9c5',
                '#0085ad',
                '#8db9ca',
                '#4298b5',
                '#005670',
                '#00205b',
                '#008eaa'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB'
            ]
        }]
    };

    return (
        <div className="pieChart">
            <Doughnut data={datas} height={100} />
        </div>
    )
}

export default PieChart;