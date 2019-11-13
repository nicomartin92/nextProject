import React from 'react';
import PubSub from 'pubsub-js';

import './RangeSlider.scss'

const RangeSlider = (props: any) => {
    const [value, setValue] = React.useState(1); // from 50 - 220 €
    const Range = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220];

    const handleChange = (e: any) => {
        e.preventDefault();
        setValue(e.target.value);
        const searchValue = Range[e.target.value];

        props.setCarsDataJsonFromState(searchValue)
    }

    const bulletPoints = Range.map((number, index) => {
        return <span className={`bullet rangeSlider__bullet-${index}`} key={index}> <span className="rangeSlider__number">{number} €</span> </span>
    })

    const genSlideStyle = (value: any) => {
        return {
            point: {
                left: `calc(${value * 5.5}% - ${10}px)`,
            },
            range: {
                width: `${value * 5.5}%`,
            },
        };
    };

    const slideStyle = genSlideStyle(value);

    return (
        <div className="rangeSlider">
            {bulletPoints}
            <span className="rangeSlider__value" style={slideStyle.range} />
            <span className="circle" style={slideStyle.point} />
            <input
                className="rangeSlider__slide"
                name="range"
                type="range"
                min="0"
                max="18"
                value={value}
                step="1"
                onChange={handleChange}
            />
        </div>
    )
}

export default RangeSlider;