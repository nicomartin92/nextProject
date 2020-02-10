import React, { Component } from 'react';
import CSS from 'csstype';

const PageIndicator = (props: any) => {
    const [scrolled, setScrolled] = React.useState('0');
    const [scrollColor, setScrollColor] = React.useState(props.color ? props.color : '#0b299f');

    React.useEffect(() => {
        window.addEventListener("scroll", scrollProgress);

        return () => {
            window.removeEventListener("scroll", scrollProgress);
        }
    }, []);

    const scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const windowHeight = scrollHeight - clientHeight;
        const scrolledWidth = `${scrollPx / windowHeight * 100}%`;

        setScrolled(scrolledWidth);
    }

    const pageIndicatorStyle: CSS.Properties = {
        height: "2px",
        position: "fixed",
        top: "51px",
        left: 0,
        width: "100vw",
        zIndex: 201
    };

    const pageBarStyle: CSS.Properties = {
        height: "5px",
        transform: "skew(-40deg)",
        background: scrollColor,
        width: scrolled
    };

    return (
        <div className="pageIndicator" style={pageIndicatorStyle}>
            <div className="pageIndicator__bar" style={pageBarStyle}></div>
        </div>
    )
}

export default PageIndicator
