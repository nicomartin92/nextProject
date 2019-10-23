import React, { Component } from 'react';
import PubSub from 'pubsub-js';

/* SVG */
// import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

import './Header.scss';

const Headers = () => {
    const handleClick = () => {
        PubSub.publish('open:panelNav', true);
    }

    const triggerSearch = () => {
        PubSub.publish('open:search', true);
    }

    return (
        <header>
            <nav
                style={{ color: '#000000' }}>
                <ul className="nav">
                    <li>
                        <button onClick={handleClick}>Cars</button>
                    </li>
                    <li>
                        <a href="/" title="Accueil">Accueil</a>
                    </li>
                    <li>
                        <a href="/category" title="Catégorie">Catégorie</a>
                    </li>
                    <li>
                        <a href="/whishlist" title="Whishlist">Whishlist</a>
                    </li>
                    <li>
                        <a href="/status" title="Status">Status</a>
                    </li>
                    <li onClick={triggerSearch}>
                        <button>
                            {/* <SearchIcon /> */} search
                                </button>
                    </li>
                    {/* <SignInLinks />
                            <SignOutLinks /> */}
                </ul>
            </nav>
        </header>
    )
}

export default Headers;