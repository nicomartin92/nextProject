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
    const [url, setUrl] = React.useState(props.item.url);
    const [brandShop, setBrandShop] = React.useState(props.activeCar[0].brandshop);
    const [brand, setBrand] = React.useState(props.activeCar[0].brand);
    const [model, setModel] = React.useState(props.activeCar[0].model);
    const [image, setImage] = React.useState(props.activeCar[0].views[0].image1);


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
                    {brandShop}
                </div>
                <div className="toast__content">
                    <div className="toast__text">
                        {brand} {model}
                    </div>
                    <div className="toast__image">
                        <img src={`/static${image}`} alt={`${brandShop} - ${brand} ${model}`} />
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

const mapStateToProps = (state: any) => {
    return {
        toast: state.carR.toast,
        activeCar: state.carR.activeCar
    }
};

export default connect(
    mapStateToProps,
    null
)(Toaster);
