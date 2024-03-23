import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Typography, Box } from '@mui/material';
import Rating from '@mui/material/Rating';

const TextSlider = ({ sliderContent, ratings, handleRatingChange, sliderSettings }) => {
  const sliderRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    // Calculate the slide width
    const calculateSlideWidth = () => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.clientWidth;
        const visibleSlides = Math.floor(sliderWidth / 420); // Assuming each slide is 420px wide
        const newSlideWidth = sliderWidth / visibleSlides;
        setSlideWidth(newSlideWidth);
      }
    };

    // Call calculateSlideWidth initially and on window resize
    calculateSlideWidth();
    window.addEventListener('resize', calculateSlideWidth);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', calculateSlideWidth);
    };
  }, []);

  const sliderContainerStyle = {
    margin: '0 200px', // Adjusted margin value to reduce space between slides
  };

  const slideStyle = {
    width: slideWidth,
    marginRight: '200px', 
  };

  const ratingContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft:'200px',
    marginTop: '-50px',
    };

  const topicStyle = {
    marginBottom: '20px', 
    marginLeft:'-180px',
  };

  const textStyle = {
    marginTop: '30px',
    textAlign: 'left', 
    marginLeft : '40px',
     

  };

  return (
    <div style={sliderContainerStyle}>
      <Slider ref={sliderRef} {...sliderSettings} className='my-10'>
        {sliderContent.map((item, index) => (
          <div key={index} className="text-center relative" style={slideStyle}>
            <div style={{ backgroundColor: '#19216C', width: '95%', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>
              {/* Topic */}
              <div style={topicStyle}>
                <p className="text-xl font-bold text-white">{item.topic}</p>
              </div>
              {/* Stars */}
              <div style={ratingContainerStyle}>
                <Box
                  sx={{
                    '& > legend': { mb: 0 },
                  }}
                >
                  <Typography component="legend"></Typography>
                  <Rating
                    name={`rating-${index}`}
                    value={ratings[index]}
                    onChange={(event, newValue) => handleRatingChange(index, newValue)}
                  />
                </Box>
              </div>
              {/* Content Text */}
              <p className="text-white" style={textStyle}>{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TextSlider;
