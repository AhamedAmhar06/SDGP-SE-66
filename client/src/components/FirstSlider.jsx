import React from 'react';
import Slider from 'react-slick';
import TimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Rating from '@mui/material/Rating';
import backgroundslider from '../Assets/images/sliderbkgrnd.png';
import PersonIcon from '@mui/icons-material/Person';

const Slide = ({ content, rating, handleRatingChange }) => {
  const rectangleStyle = {
    width: '90%',
    height: '30px',
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    position: 'absolute',
    top: '10%',
    transform: 'translateY(-50%)',
    marginLeft: '15px',
    border: '2px solid #fff',
  };

  const whiteBoxStyle = {
    position: 'absolute',
    bottom: -80,
    left: 0,
    width: '100%',
    height: '85%',
    backgroundColor: '#fff',
    padding: '14px',
    boxSizing: 'border-box',
    borderRadius: '20px',
    border: '2px solid #3498db',
  };

  return (
    <div className="text-center relative">
      <div style={{ marginRight: '30px', marginBottom: '110px', position: 'relative' }}>
        {/* Image */}
        <img
          src={backgroundslider}
          alt={`Background`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
        />
        {/* White rectangle on top of the image */}
        <div style={rectangleStyle}></div>
        {/* White box */}
        <div style={whiteBoxStyle}>
          {/* Icon and Rating component on top of the white rectangle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', position: 'absolute', top: '-35%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
              <PersonIcon style={{ marginBottom: '20px' }} />
              <TimeFilledIcon style={{ marginLeft: '20px', marginBottom: '20px' }} />
            </div>
            <Rating
              value={rating}
              onChange={(event, newValue) => handleRatingChange(newValue)}
              style={{ marginTop: '-20px' }}
            />
          </div>
          {/* Content inside the white box */}
          <div style={{ color: '#000', fontWeight: 'bold', fontFamily: 'Bol', fontSize: '24px', marginBottom: '15px', marginRight: '100px', marginTop: '-20px' }}>
            {/* Topic */}
            {content.topic}
          </div>
          <p style={{ color: '#000', fontFamily: 'Thin', fontSize: '16px', margin: '-10px 0 10px 0', textAlign: 'left' }}>
            {/* Paragraph */}
            {content.description}
          </p>
          <div style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer', marginTop: '8px', marginRight: '140px' }}>
            {/* Clickable text */}
            by {content.tutor}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px', marginRight: '10px' }}>
            <button style={{ backgroundColor: '#00008B', color: '#fff', padding: '10px', borderRadius: '20px', cursor: 'pointer', marginTop: '60px' }}>
              {/* Request a Session button */}
              Request a Session
            </button>
            <div style={{ color: '#3498db', fontFamily: 'Thin', fontSize: '18px', marginTop: '60px' }}>
              {/* Price */}
              {content.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FirstSlider = ({ sliderContent, ratings, handleRatingChange }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const boxStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
  };

  return (
    <Slider {...sliderSettings} className='my-10' style={boxStyle}>
      {sliderContent.map((item, index) => (
        <Slide
          key={index}
          content={item}
          rating={ratings[index]}
          handleRatingChange={(newValue) => handleRatingChange(index, newValue)}
        />
      ))}
    </Slider>
  );
};

export default FirstSlider;
