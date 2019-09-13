import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import Link from 'next/link'
import PubSub from 'pubsub-js';
// import SignInLinks from './SignInLinks';
// import SignOutLinks from './SignOutLinks';

/* SVG */
// import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

// import './Header.scss';

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
                                <Link passHref href="/">
                                    <a title="Accueil">Accueil</a>
                                </Link>
                            </li>
                            <li>
                                <Link passHref href="/list">
                                    <a title="Catégorie">Catégorie</a>
                                </Link>
                            </li>
                            <li>
                                <Link passHref href="/whishlist">
                                    <a title="Whishlist">Whishlist</a>
                                </Link>
                            </li>
                            <li>
                                <Link passHref href="/status">
                                    <a title="Status">Status</a>
                                </Link>
                            </li>
                            <li onClick={this.triggerSearch}>
                                <button>
                                    {/* <SearchIcon /> */}
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