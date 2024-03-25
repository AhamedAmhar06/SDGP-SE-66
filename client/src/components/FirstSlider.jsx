import React from "react";
import Slider from "react-slick";
import TimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Rating from "@mui/material/Rating";
import backgroundslider from "../Assets/images/sliderbkgrnd.png";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const Slide = ({ content, rating, handleRatingChange }) => {
  return (
    <div className="relative h-96 w-75 mx-2">
      <img
        src={backgroundslider}
        alt={`Background`}
        className="w-full h-2/3 object-cover rounded-t-2xl"
      />
      <div className="absolute top-0  flex  w-full">
        <div className="flex justify-between items-center p-2 m-2 rounded-2xl bg-white text-sm w-full">
          <PersonIcon fontSize="small" />
          <span>{content.peopleCount}</span>
          <TimeFilledIcon fontSize="small" />
          <span>{content.courseDuration}</span>
          <Rating
            size="small"
            value={rating}
            style={{ color: 'black' }}
            onChange={(event, newValue) => handleRatingChange(newValue)}
          />
        </div>
        
      </div>
      <div className="absolute top-1/3 w-full h-2/3 bg-white p-4 box-border rounded-3xl border-2 border-gray-500">
        <div className="text-black font-bold text-lg mb-2">{content.topic}</div>
        <p className="text-black text-sm mb-2">{content.text}</p>
        <div className="underline text-black cursor-pointer mb-2">
          by {content.tutor}
        </div>
        <div className="flex justify-between items-center mt-2">
          <Link to={'/tutors'}>
          <button className="bg-NavBlue text-white py-2 px-3 rounded-2xl cursor-pointer">
            Request a Session
          </button>
          </Link>
          <div className="text-black text-md">{content.price}</div>
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings} className="my-10 mx-auto max-w-[1000px]">
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