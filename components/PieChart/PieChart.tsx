import React from 'react';
import { VictoryBar, VictoryPie } from 'victory';

// SCSS
// import './Survey.scss';

const PieChart = (props: any) => {
    const [surveyCollection] = React.useState(props.item);

    const peugeotLength = surveyCollection.filter(car => car.brand === 'Peugeot').length;
    const renaultLength = surveyCollection.filter(car => car.brand === 'Renault').length;
    const bmwLength = surveyCollection.filter(car => car.brand === 'Bmw').length;
    const volkswagenLength = surveyCollection.filter(car => car.brand === 'Volkswagen').length;

    const brandArray = [
        { x: 'Peugeot', y: peugeotLength },
        { x: 'Renault', y: renaultLength },
        { x: 'BMW', y: bmwLength },
        { x: 'Volkswagen', y: volkswagenLength }
    ]

    console.warn(peugeotLength, renaultLength, bmwLength, volkswagenLength)
    return (
        <div className="pieChart">
            <VictoryPie
                height={200}
                innerRadius={100}
                style={{ labels: { fill: "white", fontSize: 10, fontWeight: "normal" } }}
                colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                data={brandArray}
            />
        </div>
    )
}

export default PieChart;