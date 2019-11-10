import React from 'react';

/* SVG */
import Arrow from '../../static/assets/arrow';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <Arrow className="arrow" />
    </div>
  );
}

export default RightArrow;