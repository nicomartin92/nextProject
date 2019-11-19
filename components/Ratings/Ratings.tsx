import React from 'react';

// SCSS
import './Ratings.scss';

const Ratings = (props: any) => {

    const checkForm = (e) => {
        if(document.querySelector('.inputRadio:checked')) {
            alert('ok submit');
        } else {
            alert('please select an input before');
        }

        e.preventDefault();
    }

    const checkRadio = (e) => {
        document.querySelectorAll('.inputRadio').forEach((elem) => {
            elem.classList.remove('checked');
        })

        e.target.classList.add('checked', 'checked');
    }

    const displayRadio = props.item.questions.map((question) => {
        return (
            <div key={`model-${Math.random()}`}>
                <input type="radio" id={question.id} onChange={checkRadio} className="inputRadio" name="radio-group" />
                <label htmlFor={question.id}>{question.model}</label>
            </div>
        )
    })

    return (
        <div className="ratings">
            <h3 className="ratings__label">{props.item.label}</h3>
            <form action="#" method="post" onSubmit={checkForm}>
                {displayRadio}
                <button className="ratings__submit button" aria-label={props.item.submit}>{props.item.submit}</button>
            </form>
        </div>
    )
}

export default Ratings;