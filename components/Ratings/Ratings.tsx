import React from 'react';

// SCSS
import './Ratings.scss';

const Ratings = (props: any) => {
    const [radioButton, setRadioButton] = React.useState(false);

    const checkRadio = (e) => {
        this.querySelectorAll('.ratings input[type=checkbox]').setAttribute('checked', false);
        console.warn(e);
        // setRadioButton(true)
    }

    const checkbox = props.item.questions.map((question) => {
        return (
            <div key={`model-${Math.random()}`}>
                <input type="radio" id={question.id} checked={radioButton} onChange={checkRadio} />
                <label htmlFor={question.id}>{question.model}</label>
            </div>
        )
    })

    return (
        <div className="ratings">
            <h3 className="ratings__label">{props.item.label}</h3>
            <form action="">
                {checkbox}
                <button className="ratings__submit button" aria-label={props.item.submit}>{props.item.submit}</button>
            </form>
        </div>
    )
}

export default Ratings;