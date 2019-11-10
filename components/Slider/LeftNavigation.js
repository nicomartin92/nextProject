import React from 'react';

/* SVG */
import Arrow from '../../static/assets/arrow';

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <Arrow className="arrow left" />
    </div>
  );
}

export default LeftArrow;