import React from 'react';

// SCSS
import './Survey.scss';

// Get Firestore
import firebase from '../../lib/db';

const Survey = (props: any) => {
    const [errorMessage, setErrorMessage] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState(false);
    const [choice, setChoice] = React.useState("");

    const checkForm = (e: any) => {
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

    const checkRadio = (e: any) => {
        document.querySelectorAll('.inputRadio').forEach((elem) => {
            elem.classList.remove('checked');
        })

        e.target.classList.add('checked', 'checked');
        setChoice(e.target.value);
    }

    const displayRadio = props.item.questions.map((question: any) => {
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

    const getData = () => {
        const [brand, setBrand] = React.useState([]);

        React.useEffect(() => {
            firebase
                .firestore()
                .collection('survey')
                .onSnapshot((snapshot) => {
                    const newDatas = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }));

                    setBrand(newDatas);
                })
        }, []);

        return brand;
    }
    const surveyDatas = getData();
    
    const percentages = () => {
        const ratioPercentage = 100/surveyDatas.length;
        const model1Length = surveyDatas.filter(val => val.choice === 'model-1').length
        const model1 = model1Length * ratioPercentage;
        const model2 = 100 - model1;
        const newArr = [];
        newArr.push(model1)
        newArr.push(model2);
        return newArr;
    }

    const percentageValues = percentages();

    return (
        <div className="survey">
            <h3 className="survey__label">{props.item.label}</h3>
            {percentageValues.map((survey) =>
                <div className="list" key={survey.id}>
                    {survey} %
                </div>
            )}
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