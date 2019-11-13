import React from 'react';

import './RangeSlider.scss'

const RangeSlider = (props: any) => {
    const [value, setValue] = React.useState(1); // from 50 - 220 €
    const Range = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220];

    const handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    const bulletPoints = Range.map((number, index) => {
        return <span className={`rangeSlider__bullet-${index}`} key={index}> <span className="rangeSlider__number">{number}</span> </span>
    })

    const genSlideStyle = (value: any) => {
        return {
            point: {
                left: `calc(${value * 20}% - ${5 + 3 * value}px)`,
            },
            range: {
                width: `${value * 20}%`,
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