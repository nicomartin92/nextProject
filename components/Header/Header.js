import React, { Component } from 'react';
import Link from 'next/link'
import PubSub from 'pubsub-js';

/* SVG */
// import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

import './Header.scss';

class Headers extends Component {

    handleClick() {
        PubSub.publish('open:panelNav', true);
    }

    triggerSearch() {
        PubSub.publish('open:search', true);
    }

    render() {
        return (
            <header>
                <nav
                    style={{ color: '#000000' }}>
                    <ul className="nav">
                        <li>
                            <button onClick={this.handleClick}>Cars</button>
                        </li>
                        <li>
                            <a href="/" title="Accueil">Accueil</a>
                        </li>
                        <li>
                            <a href="/list" title="Catégorie">Catégorie</a>
                        </li>
                        <li>
                            <a href="/whishlist" title="Whishlist">Whishlist</a>
                        </li>
                        <li>
                            <a href="/status" title="Status">Status</a>
                        </li>
                        <li onClick={this.triggerSearch}>
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
}

export default Headers;