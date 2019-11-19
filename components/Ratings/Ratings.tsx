import React from 'react';

// SCSS
import './Ratings.scss';

const Ratings = (props: any) => {
    const [errorMessage, setErrorMessage] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState(false);

    const checkForm = (e) => {
        if(document.querySelector('.inputRadio:checked')) {
            alert('ok submit');
        } else {
            setErrorMessage(true);
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
            <p className={ errorMessage ? "errorMessage": "hidden"}>Veuillez sélectionner un champs avant !</p>
            <p className={ errorMessage ? "errorMessage": "hidden"}>Veuillez sélectionner un champs avant !</p>
            <form action="#" method="post" onSubmit={checkForm}>
                {displayRadio}
                <button className="ratings__submit button" aria-label={props.item.submit}>{props.item.submit}</button>
            </form>
        </div>
    )
}

export default Ratings;