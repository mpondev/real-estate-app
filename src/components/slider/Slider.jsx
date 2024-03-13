import PropTypes from 'prop-types';
import { useState } from 'react';

import './slider.scss';

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = direction => {
    if (direction === 'left') {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide('left')}>
            <img src="/arrow.png" alt="arrow icon" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="House image" />
          </div>
          <div className="arrow" onClick={() => changeSlide('right')}>
            <img src="/arrow.png" alt="arrow icon" className="right" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img
          src={images[0]}
          alt="House image"
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt="House image"
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  images: PropTypes.array,
};

export default Slider;
