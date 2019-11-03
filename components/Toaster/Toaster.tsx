import React, { memo } from 'react';
// import { NavLink } from 'react-router-dom';
import Link from 'next/link';
import PubSub from 'pubsub-js';

/* SVG */
// import { ReactComponent as CrossIcon } from '../../assets/cross-icon.svg';

import { connect } from 'react-redux';

/* styles */
import './Toaster.scss';

const Toaster = (props: any) => {

    const [showToaster, setShowToaster] = React.useState(false);
    const [timer, setTimer] = React.useState(3000);

    React.useEffect(() => {
        PubSub.subscribe('toaster', () => {
            setShowToaster(true);

            setTimeout(() => {
                setShowToaster(false);
            }, timer);
        });

        return () => {
            PubSub.unsubscribe();
        };
    }, []);

    const toastDisplay = (value: boolean) => {
        setShowToaster(value);

        setTimeout(() => {
            setShowToaster(false);
        }, timer);
    }

    return (
        <div className={showToaster ? "toast -show" : "toast"}>
            <div className="toast__wrapper">
                {/* <Link passHref href="/cars/[pUrl]"
                          as={`/cars/${srl}`}> */}
                <div className="toast__header">
                    {props.item[0].brandshop}
                </div>
                <div className="toast__content">
                    <div className="toast__text">
                        {props.item[0].brand} {props.item[0].model}
                    </div>
                    <div className="toast__image">
                        <img src={`/static${props.item[0].image}`} alt={`${props.item[0].brandShop} - ${props.item[0].brand} ${props.item[0].model}`} />
                    </div>
                </div>
                {/* </Link> */}

                <button className="toast__close" onClick={() => { toastDisplay(false) }}>
                    {/* <CrossIcon /> */}
                </button>
            </div>
        </div>
    )
}

export default Toaster;
