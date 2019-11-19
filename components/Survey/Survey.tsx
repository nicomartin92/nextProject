import React from 'react';

// SCSS
import './Survey.scss';

// Get Firestore
import firebase from '../../lib/db';

const Survey = (props: any) => {
    const [errorMessage, setErrorMessage] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState(false);
    const [choice, setChoice] = React.useState("");

    const checkForm = (e:any) => {
        if (document.querySelector('.inputRadio:checked')) {
            const db = firebase.firestore();
            db.collection("survey").add({
                choice: choice
            });

            setSuccessMessage(true);
        } else {
            setErrorMessage(true);
        }

        e.preventDefault();
    }

    const checkRadio = (e:any) => {
        document.querySelectorAll('.inputRadio').forEach((elem) => {
            elem.classList.remove('checked');
        })

        e.target.classList.add('checked', 'checked');
        setChoice(e.target.value);
    }

    const displayRadio = props.item.questions.map((question:any) => {
        return (
            <div key={`model-${Math.random()}`}>
                <input type="radio"
                    id={question.id} 
                    onChange={checkRadio} 
                    className="inputRadio" 
                    name="radio-group"
                    value={`model-${question.id}`} />
                <label htmlFor={question.id}>{question.model}</label>
            </div>
        )
    })

    return (
        <div className="survey">
            <h3 className="survey__label">{props.item.label}</h3>

            <div className="progress">

            </div>
            
            <p className={errorMessage ? "errorMessage" : "hidden"}>Veuillez sélectionner un champs avant !</p>
            <p className={successMessage ? "successMessage" : "hidden"}>Votre réponse a bien été envoyée !</p>
            <form action="#" method="post" onSubmit={checkForm}>
                {displayRadio}
                <button className="survey__submit button" aria-label={props.item.submit}>{props.item.submit}</button>
            </form>
        </div>
    )
}

export default Survey;