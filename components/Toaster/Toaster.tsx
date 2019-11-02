import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import Link from 'next/link';

/* SVG */
// import { ReactComponent as CrossIcon } from '../../assets/cross-icon.svg';

/* styles */
import './Toaster.scss';

const Toaster = (props: any) => {

    const [showToaster, setShowToaster] = React.useState(false);
    const [timer, setTimer] = React.useState(3000);
    const [url, setUrl] = React.useState(props.item.url);
    const [success, setSuccess] = React.useState(props.item.succes);
    const [text, setText] = React.useState(props.item.text);
    const [image, setImage] = React.useState(props.item.image);

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
                    {success}
                </div>
                <div className="toast__content">
                    <div className="toast__text">{text}</div>
                    <div className="toast__image">
                        <img src={image} alt={text} />
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
