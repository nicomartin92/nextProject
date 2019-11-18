import React, { Component } from 'react';
import PubSub from 'pubsub-js';

// SVG
import Automotive from '../../static/assets/automotive'

import './Header.scss';

const Headers = () => {
    const [mobileMenu, setMobileMenu] = React.useState(false);

    const handleClick = () => {
        PubSub.publish('open:panelNav', true);
    }

    const triggerSearch = () => {
        PubSub.publish('open:search', true);
    }

    const toggleMenu = () => {
        if(mobileMenu) {
            setMobileMenu(false);
        } else {
            setMobileMenu(true);
        }
    }

    return (
        <header>
            <nav
                style={{ color: '#000000' }}>
                <button className="burgerMenu" onClick={toggleMenu}>menu</button>
                <ul className={ mobileMenu ? "nav -open" : "nav"}>
                    <li>
                        <button onClick={handleClick} className="automotiveIcon">
                            <Automotive />
                        </button>
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