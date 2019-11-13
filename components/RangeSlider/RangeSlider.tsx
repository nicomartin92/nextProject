import React from 'react';

import './RangeSlider.scss'

const RangeSlider = (props: any) => {
    const [value, setValue] = React.useState(3); // from 50 - 220 €
    const Range = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220];

    const handleChange = (e: any) => {
        e.preventDefault();
        const indexValue = e.target.value;

        setValue(indexValue);
        const searchValue = Range[indexValue];

        console.warn(indexValue, searchValue);

        props.setCarsDataJsonFromState(searchValue)
    }

    const bulletPoints = Range.map((number, index) => {
        return <span className={`bullet rangeSlider__bullet-${index}`} key={index}> <span className="rangeSlider__number">{number} €</span> </span>
    })

    const genSlideStyle = (value: any) => {
        return {
            point: {
                left: `calc(${value * 5.58}% - ${15}px)`,
            },
            range: {
                width: `${value * 5.58}%`,
            },
        };
    };

    const slideStyle = genSlideStyle(value);

    return (
        <div>
            <h2 className="center">Filtrer par prix:</h2>
            <div className="rangeSlider">
                {bulletPoints}
                <span className="rangeSlider__value" style={slideStyle.range} />
                <span className="circle" style={slideStyle.point} />
                <input
                    className="rangeSlider__slide"
                    name="range"
                    type="range"
                    min="0"
                    max="17"
                    value={value}
                    step="1"
                    onChange={handleChange}
                />
            </div>
        </div>

    )
}

export default RangeSlider;