import { ResizeSensor } from 'css-element-queries';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import './CompareImage.scss'

const CompareImage = (props) => {

  const {
    aspectRatio,
    handle,
    hover,
    leftImage,
    leftImageLabel,
    onSliderPositionChange,
    rightImage,
    rightImageLabel,
    skeleton,
    sliderPositionPercentage,
  } = props;

  // 0 to 1
  const [sliderPosition, setSliderPosition] = useState(
    sliderPositionPercentage,
  );
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [leftImgLoaded, setLeftImgLoaded] = useState(false);
  const [rightImgLoaded, setRightImgLoaded] = useState(false);
  const [isSliding, setIsSliding] = useState(false);

  const containerRef = useRef();
  const rightImageRef = useRef();
  const leftImageRef = useRef();

  // keep track container's width in local state
  // to make the component responsive.
  useEffect(() => {
    const updateContainerWidth = () => {
      const currentContainerWidth = containerRef.current.getBoundingClientRect().width;
      setContainerWidth(currentContainerWidth);
    };

    // initial execution must be done manually
    updateContainerWidth();

    // update local state if container size is changed
    const containerElement = containerRef.current;
    const resizeSensor = new ResizeSensor(containerElement, () => {
      updateContainerWidth();
    });

    return () => {
      resizeSensor.detach(containerElement);
    };
  }, []);

  useEffect(() => {
    // consider the case where loading image is completed immediately due to the cache etc.
    const alreadyDoneLeft = leftImageRef.current.complete;
    alreadyDoneLeft && setLeftImgLoaded(true);

    const alreadyDoneRight = rightImageRef.current.complete;
    alreadyDoneRight && setRightImgLoaded(true);

    return () => {
      // when the left/right image source is changed
      setLeftImgLoaded(false);
      setRightImgLoaded(false);
    };
  }, [leftImage, rightImage]);

  const allImagesLoaded = rightImgLoaded && leftImgLoaded;

  useEffect(() => {
    const handleSliding = event => {
      const e = event || window.event;

      // Calc cursor position from the:
      // - left edge of the viewport (for horizontal)
      const cursorXfromViewport = e.touches ? e.touches[0].pageX : e.pageX;

      // Calc Cursor Position from the:
      // - left edge of the window (for horizontal)
      const cursorXfromWindow = cursorXfromViewport - window.pageXOffset;

      // Calc Cursor Position from the:
      // - left edge of the image(for horizontal)
      const imagePosition = rightImageRef.current.getBoundingClientRect();
      let pos = cursorXfromWindow - imagePosition.left;

      // Set minimum and maximum values to prevent the slider from overflowing
      const minPos = 0 + 2 / 2;
      const maxPos = containerWidth - 2 / 2

      if (pos < minPos) pos = minPos;
      if (pos > maxPos) pos = maxPos;

      setSliderPosition(pos / containerWidth);

      // If there's a callback function, invoke it everytime the slider changes
      if (onSliderPositionChange) {
        onSliderPositionChange(pos / containerWidth);
      }
    };

    const startSliding = e => {
      setIsSliding(true);

      // Prevent default behavior other than mobile scrolling
      if (!('touches' in e)) {
        e.preventDefault();
      }

      // Slide the image even if you just click or tap (not drag)
      handleSliding(e);

      window.addEventListener('mousemove', handleSliding); // 07
      window.addEventListener('touchmove', handleSliding); // 08
    };

    const finishSliding = () => {
      setIsSliding(false);
      window.removeEventListener('mousemove', handleSliding);
      window.removeEventListener('touchmove', handleSliding);
    };

    const containerElement = containerRef.current;


    if (allImagesLoaded) {
      // it's necessary to reset event handlers each time the canvasWidth changes

      // for mobile
      containerElement.addEventListener('touchstart', startSliding); // 01
      window.addEventListener('touchend', finishSliding); // 02

      // for desktop
      if (hover) {
        containerElement.addEventListener('mousemove', handleSliding); // 03
        containerElement.addEventListener('mouseleave', finishSliding); // 04
      } else {
        containerElement.addEventListener('mousedown', startSliding); // 05
        window.addEventListener('mouseup', finishSliding); // 06
      }

      containerElement.addEventListener('click', () => {
        console.warn('click')
        finishSliding();
        return false
      });

      // calc and set the container's size
      const leftImageWidthHeightRatio =
        leftImageRef.current.naturalHeight / leftImageRef.current.naturalWidth;
      const rightImageWidthHeightRatio =
        rightImageRef.current.naturalHeight /
        rightImageRef.current.naturalWidth;

      const idealWidthHeightRatio =
        aspectRatio === 'taller'
          ? Math.max(leftImageWidthHeightRatio, rightImageWidthHeightRatio)
          : Math.min(leftImageWidthHeightRatio, rightImageWidthHeightRatio);

      const idealContainerHeight = containerWidth * idealWidthHeightRatio;

      setContainerHeight(idealContainerHeight);
    }

    return () => {
      // cleanup all event resteners
      containerElement.removeEventListener('touchstart', startSliding); // 01
      window.removeEventListener('touchend', finishSliding); // 02

      containerElement.removeEventListener('mousemove', handleSliding); // 03
      containerElement.removeEventListener('mouseleave', finishSliding); // 04
      containerElement.removeEventListener('mousedown', startSliding); // 05

      window.removeEventListener('mouseup', finishSliding); // 06
      window.removeEventListener('mousemove', handleSliding); // 07
      window.removeEventListener('touchmove', handleSliding); // 08
    };
    // eslint-disable-next-line
  }, [
    allImagesLoaded,
    aspectRatio,
    containerHeight,
    containerWidth,
    hover,
  ]);

  const styles = {
    container: {
      height: `${containerHeight}px`,
      maxHeight: '360px',
    },
    rightImage: {
      clip: `rect(auto, auto, auto, ${containerWidth * sliderPosition}px)`
    },
    leftImage: {
      clip: `rect(auto, ${containerWidth * sliderPosition}px, auto, auto)`
    },
    slider: {
      left: `${containerWidth * sliderPosition - 40 / 2}px`,
    },
    leftLabel: {
      opacity: isSliding ? 0 : 1,
    },
    rightLabel: {
      opacity: isSliding ? 0 : 1,
    },
    leftLabelContainer: {
      clip: `rect(auto, ${containerWidth * sliderPosition}px, auto, auto)`
    },
    rightLabelContainer: {
      clip: `rect(auto, auto, auto, ${containerWidth * sliderPosition}px)`
    },
  };

  return (
    <>
      {skeleton && !allImagesLoaded && (
        <div style={{ ...styles.container }} className="container">
          {skeleton}
        </div>
      )}

      <div
        style={{
          ...styles.container,
          display: allImagesLoaded ? 'block' : 'none',
        }}
        ref={containerRef}
        data-testid="container"
        className="compareImage"
      >

        <div style={styles.rightImage} className="rightImage">
          <img
            onLoad={() => setRightImgLoaded(true)}
            data-testid="right-image"
            ref={rightImageRef}
            src={rightImage}
          />
        </div>

        <div style={styles.leftImage} className="leftImage">
          <img
            onLoad={() => setLeftImgLoaded(true)}
            data-testid="left-image"
            ref={leftImageRef}
            src={leftImage}
          />
        </div>


        <div style={styles.slider} className="slider">
          <div className="line" />
          {handle ? (
            <div style={styles.handleCustom} className="handleCustom">{handle}</div>
          ) : (
              <div className="handleDefault">
                <div className="leftArrow" />
                <div className="rightArrow" />
              </div>
            )}
          <div className="line" />
        </div>

        {/* labels */}
        {leftImageLabel && (
          <div style={styles.leftLabelContainer} className="leftLabelContainer">
            <div style={styles.leftLabel} className="leftLabel">
              {leftImageLabel}
            </div>
          </div>
        )}

        {rightImageLabel && (
          <div style={styles.rightLabelContainer} className="rightLabelContainer">
            <div style={styles.rightLabel} className="rightLabel">
              {rightImageLabel}
            </div>
          </div>
        )}

      </div>
    </>
  );
}

CompareImage.propTypes = {
  aspectRatio: PropTypes.oneOf(['taller', 'wider']),
  handle: PropTypes.node,
  hover: PropTypes.bool,
  leftImage: PropTypes.string.isRequired,
  leftImageLabel: PropTypes.string,
  onSliderPositionChange: PropTypes.func,
  rightImage: PropTypes.string.isRequired,
  rightImageLabel: PropTypes.string,
  skeleton: PropTypes.element,
  sliderPositionPercentage: PropTypes.number,
};

CompareImage.defaultProps = {
  aspectRatio: 'taller',
  handle: null,
  hover: false,
  leftImageLabel: null,
  onSliderPositionChange: () => { },
  rightImageLabel: null,
  skeleton: null,
  sliderPositionPercentage: 0.5,
};

export default CompareImage;
