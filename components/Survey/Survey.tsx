import React from 'react';

// SCSS
import './Survey.scss';

// Get Firestore
import firebase from '../../lib/db';

const Survey = (props: any) => {
    const [errorMessage, setErrorMessage] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState(false);
    const [surveyCollection] = React.useState(props.survey);

    const checkForm = (e: any) => {
        if (document.querySelector('.inputRadio:checked')) {
            const choiceValue = document.querySelector('.inputRadio:checked').getAttribute('value');
            const db = firebase.firestore();
            db.collection(surveyCollection).add({
                choice: choiceValue,
            });

            setErrorMessage(false);
            setSuccessMessage(true);
        } else {
            setErrorMessage(true);
            setSuccessMessage(false);
        }

        e.preventDefault();
    };

    const checkRadio = (e: any) => {
        document.querySelectorAll('.inputRadio').forEach((elem) => {
            elem.classList.remove('checked');
        });

        e.target.classList.add('checked', 'checked');
        setErrorMessage(false);
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
    });

    const getData = () => {
        const [brand, setBrand] = React.useState([]);

        React.useEffect(() => {
            firebase
                .firestore()
                .collection(surveyCollection)
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
        const ratioPercentage = 100 / surveyDatas.length;
        const model1Length = surveyDatas.filter(val => val.choice === 'model-1').length
        const model1 = model1Length * ratioPercentage;
        const model2 = 100 - model1;

        const newArr = [];
        newArr.push({ model: props.item.questions[0].model, percentage: model1, line: ((100 - model1) / 100 * Math.PI * (90 * 2)) })
        newArr.push({ model: props.item.questions[1].model, percentage: model2, line: ((100 - model2) / 100 * Math.PI * (90 * 2)) });
        return newArr;
    }
    const percentageValues = percentages();

    return (
        <div className="survey">
            <h3 className="survey__label">
                {props.item.label}
                <span className="survey__rates">({surveyDatas.length} votes)</span>
            </h3>

            <p className={errorMessage ? "errorMessage" : "hidden"}>Veuillez sélectionner un champs avant !</p>
            <p className={successMessage ? "successMessage" : "hidden"}>Votre réponse a bien été envoyée !</p>

            <div className="circles">
                {percentageValues.map((survey) =>
                    <div className="circle" key={`circle-${Math.random()}`}>
                        <div>{survey.model}</div>
                        <span>{Math.round(survey.percentage)} %</span>

                        <div className="circle__round" data-pct={Math.round(parseInt(survey.percentage))}>
                            <svg className="circle__svg" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <circle r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
                                <circle className="circle__bar" r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0" style={{ strokeDashoffset: parseInt(survey.line) }}></circle>
                            </svg>
                        </div>
                    </div>
                )}
            </div>

            <form action="#" method="post" onSubmit={checkForm}>
                {displayRadio}
                <button className="survey__submit button" aria-label={props.item.submit}>{props.item.submit}</button>
            </form>
        </div>
    )
}

export default Survey;