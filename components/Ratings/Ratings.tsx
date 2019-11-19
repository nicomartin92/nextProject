import React from 'react';

// SCSS
import './Ratings.scss';

const Ratings = () => {
    return (
        <div className="ratings">
            <h3 className="ratings__label">Quel modèle souhaitez-vous voir reproduit en 1/18</h3>
            <form action="">

                <button className="ratings__submit">Envoyer votre réponse</button>
            </form>
        </div>
    )
}

export default Ratings;