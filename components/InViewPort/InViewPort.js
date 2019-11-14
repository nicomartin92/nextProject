import React, { Component } from 'react';
import _ from 'lodash';

const InViewPort = (props) => {
  const [animate, setAnimate] = React.useState(false);
  const tagRef = React.useRef(null);
  const Tag = props.as;
  const classAnimation = props.classAnimation;

  React.useEffect(() => {
    switchAnimation();

    window.addEventListener("scroll", _.throttle(switchAnimation, 400))

    return () => {
      window.removeEventListener("scroll", switchAnimation);
    }
  }, []);

  const inViewPort = (elem) => {
    const scroll = window.scrollY || window.pageYOffset;
    const boundsTop = elem.current.getBoundingClientRect().top + scroll;

    const viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight
    }

    const bounds = {
      top: boundsTop,
      bottom: boundsTop + elem.clientHeight
    }

    return (
      ((bounds.bottom -200) >= viewport.top && (bounds.bottom -200) <= viewport.bottom) ||
      ((bounds.top +200) <= viewport.bottom && (bounds.top +200) >= viewport.top)
    )
  }

  const switchAnimation = () => {
    if (inViewPort(tagRef)) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }

  return (
    <Tag className={ animate ? classAnimation : ''} ref={tagRef}>
      {props.children}
    </Tag>
  )
}

InViewPort.defaultProps = {
  classAnimation: 'animate',
};


export default InViewPort;