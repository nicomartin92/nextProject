import React from 'react';

// SCSS
import './Ratings.scss';

const Ratings = (props: any) => {

    const checkbox = props.item.questions.map((question) => {
        return (
            <div key={`model-${Math.random()}`}>
                <label htmlFor="">{question.model}</label>
                <input type="checkbox" />
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