import React from 'react';

import './RangeSlider.scss'

const RangeSlider = (props: any) => {
    const Range = props.range;
    const maxRange = props.range.length - 1;
    const spaceDivided = 100 / maxRange;
    const label = props.label === 'price' ? 'prix' : 'année';

    const [value, setValue] = React.useState(maxRange);

    const handleChange = (e: any) => {
        e.preventDefault();
        const indexValue = e.target.value;

        setValue(indexValue);
        const searchValue = Range[indexValue];

        props.setCarsDataJsonFromState(searchValue)
    }

    const bulletPoints = Range.map((number, index) => {
        return (
            <span
                className={ props.label === 'year' ? `year bullet rangeSlider__bullet-${index}` : `bullet rangeSlider__bullet-${index}`}
                key={index}>
                <span className="rangeSlider__number">
                    {number} <span className="device">€</span>
                </span>
            </span>
        )
    })

    const genSlideStyle = (value: any) => {
        return {
            point: {
                left: `calc(${value * spaceDivided}% - ${14}px)`,
            },
            range: {
                width: `${value * spaceDivided}%`,
            },
        };
    };

    const slideStyle = genSlideStyle(value);

    return (
        <div>
            <h3 className="center">Filtrer par {label}:</h3>
            <div className="rangeSlider">
                {bulletPoints}
                <span className="rangeSlider__value" style={slideStyle.range} />
                <span className="circle" style={slideStyle.point} />
                <input
                    className="rangeSlider__slide"
                    name="range"
                    type="range"
                    min="0"
                    max={maxRange}
                    value={value}
                    step="1"
                    onChange={handleChange}
                />
            </div>
        </div>

    )
}

export default RangeSlider;