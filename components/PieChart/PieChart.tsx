import React from 'react';
import { Doughnut } from 'react-chartjs-2';

// SCSS
// import './Survey.scss';

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
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    console.warn(peugeotLength, renaultLength, bmwLength, volkswagenLength)
    return (
        <div className="pieChart">
            <Doughnut data={datas} />
        </div>
    )
}

export default PieChart;