
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";

import headerImg from "../Assets/images/header-img.png";
import contactimg from "../Assets/images/grad-img.png";



import sitting from "../Assets/images/sitting.png";
import smallicon1 from "../Assets/images/smallicon1.png";
import smallicon2 from "../Assets/images/smallicon2.png";
import smallicon3 from "../Assets/images/smallicon3.png";
import tutormf from "../Assets/images/tutormf.png";
import sessionmf from "../Assets/images/online-learningmf.png";
import communitymf from "../Assets/images/communitiesmf.png";
import whyperson from "../Assets/images/Whyperson.png"
import book from "../Assets/images/Book.png"
import questionbank from "../Assets/images/questionbank.png";


import FirstSlider from '../components/FirstSlider'; 


const Home = () => {
  const [value, setValue] = useState(0);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  const contactImageStyle = {
    width:  screenWidth >= 768 ? '50%' : '190%',
    height: screenWidth >= 768 ? '80%' : '145%',
    objectFit: 'cover',
    position: 'absolute',
    top: screenWidth >= 768 ? '40%' : '55%',
    left: screenWidth >= 768 ? '17%' : '0%',
    transform: screenWidth >= 768 ? 'translate(-50%, -50%)' : 'translate(-40%, -60%) scale(0.2)',
    maxWidth: '900px',
  };
  
  const headerImageStyle = {
    width: screenWidth >= 768 ? '50%' : '50%',
    height: screenWidth >= 768 ? '100%' : '35%',
    objectFit: 'cover',
    position: 'relative',
    left: screenWidth >= 768 ? '0%' : '0%',
    top: screenWidth >= 768 ? '-8%' : '-4%',
    maxWidth: '1900px',
    
  };

  

  const middlePartStyle = {
    width: '50%',
    height: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'white',
    
  };

  const textStyle = {
    position: 'absolute',
    top: '45%',
    left: '48%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    zIndex: 1,
  };
  
  const aboutButtonStyle = {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '999px',
    padding: '10px 30px', 
    marginTop: '15rem', // Changed from 400px to a relative value
    cursor: 'pointer',
    marginLeft:'86%',
    whiteSpace: 'nowrap',
  };
  
  

  const circleStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    marginRight: '5px',
    transition: 'box-shadow 0.3s ease',
  };

  const smallIconStyle = {
    width: '50%',
    height: '50%',
    objectFit: 'cover',
    position: 'absolute',
    borderRadius: '4%',
    clipPath: 'circle(100%)',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    bottom: '19%',
    left: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'scale(1)',
  };

 
  

  const sliderContent = [
    {
      topic: '3.Risini Bolgoda',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
      color: '#3498db',
    },
    {
      topic: '2.Risini Bolgoda',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
      color: '#3498db',
    },
    {
      topic: '1.Risini Bolgoda',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
      color: '#3498db',
    },
  ];

  

  const [ratings, setRatings] = useState(Array(sliderContent.length).fill(0));

  const handleRatingChange = (index, newValue) => {
    setRatings((prevRatings) => {
      const newRatings = [...prevRatings];
      newRatings[index] = newValue;
      return newRatings;
    });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  

  // State for FAQ sections
  const [isMinimized1, setIsMinimized1] = useState(false);
  const [isMinimized2, setIsMinimized2] = useState(false);
  const [isMinimized3, setIsMinimized3] = useState(false);
  const [isMinimized4, setIsMinimized4] = useState(false);

  // Function to toggle FAQ section minimize/maximize
  const toggleMinimize = (section) => {
    switch (section) {
      case 1:
        setIsMinimized1(!isMinimized1);
        break;
      case 2:
        setIsMinimized2(!isMinimized2);
        break;
      case 3:
        setIsMinimized3(!isMinimized3);
        break;
      case 4:
        setIsMinimized4(!isMinimized4);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Close the FAQ sections when the component mounts
    setIsMinimized1(true);
    setIsMinimized2(true);
    setIsMinimized3(true);
    setIsMinimized4(true);
  }, []);

  

  

  return (
    
      <div style={{ overflowX: 'hidden' }}>
      {/* Banner Part */}
      <div className='relative w-full min-h-screen flex items-center bg-white-ash'>
1

        {/* Left part with contact image */}
<img
  className='top-0 left-0 w-[40%] h-screen object-cover'
  src={contactimg}
  alt='Contact Image'
  style={contactImageStyle}
/>

        {/* Middle part with text and button */}
<div className='w-[50%] h-screen flex flex-col justify-center text-white' style={middlePartStyle}>

<div style={textStyle}>
<h1 className='text-black mt-20px' style={{ marginTop: '-160px' }}>
  {"Guiding undergrads to success in their academic journey"}
</h1>

</div>

  <div style = {textStyle}>
  <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl drop-shadow-2xl'>
  <span className='text-blue-900'>
    First Collaborative Hub{''}
    </span>
  </h1>

  <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl drop-shadow-2xl'>
  <span className='text-blue-900'>
    For University Students In 
    </span>
    </h1>


    <h1 className ='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl drop-shadow-2xl'>
  <span className='text-blue-900'>
    Sri Lanka 
    </span>
    </h1>
  </div>
  <div>
<button className='aboutButton' style={aboutButtonStyle}>About Us</button>

</div>

</div>





        {/* Right part with header image */}
<img
  className='top-0 right-[60%] w-[20%] h-screen object-cover'
  src={headerImg}
  alt='Header Image'
  style={headerImageStyle}
/>
</div>


     

   {/* Main Features part */}
<div className='max-w-[900px] m-auto px-4 py-4 text-center'>
  <p className='text-sm mb-10 font-bold'>
    Build connections with your peers and fellow graduates <br />
    across the nation with CampusKuppi and start learning/tutoring.
  </p>

  <div className='flex flex-wrap justify-between'>


{/* Blue Square 1 */}
<div className='w-[200px] h-[200px] bg-blue-950 rounded-2xl relative overflow-hidden transition-transform transform hover:scale-110'>
  <img
    src={tutormf}
    alt='Tutoring Session Image'
    style={{
      width: '40%',
      height: '40%',
      objectFit: 'cover',
      borderRadius: '8px',
      position: 'absolute',
      top: '30%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)',
    }}
  />
  <div className="absolute bottom-4 text-white text-center left-16">
    <p style={{ fontSize: '12px' }}>Become a</p>
    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>TUTOR</p>
  </div>
</div>

{/* Blue Square 2 */}
<div className='w-[200px] h-[200px] bg-blue-950 rounded-2xl relative overflow-hidden transition-transform transform hover:scale-110'>
  <img
    src={sessionmf}
    alt='Online Learning Image'
    style={{
      width: '40%',
      height: '40%',
      objectFit: 'cover',
      borderRadius: '8px',
      position: 'absolute',
      top: '35%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
    }}
  />
  <div className="absolute bottom-4 text-white text-center left-14">
    <p style={{ fontSize: '12px' }}>Book your</p>
    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>SESSIONS</p>
  </div>
</div>

{/* Blue Square 3 */}
<div className='w-[200px] h-[200px] bg-blue-950 rounded-2xl relative overflow-hidden transition-transform transform hover:scale-110'>
  <img
    src={communitymf}
    alt='Communities Image'
    style={{
      width: '40%',
      height: '40%',
      objectFit: 'cover',
      borderRadius: '8px',
      position: 'absolute',
      top: '35%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
    }}
  />
  <div className="absolute bottom-4 text-white text-center left-10">
    <p style={{ fontSize: '12px' }}>Join the</p>
    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>COMMUNITY</p>
  </div>
</div>
</div>
</div>
{/* Why part */}
<div className='max-w-[1400px] m-auto py-16 px-4 relative'>
  <h1 className='text-4xl font-bold mb-4 text-left ml-14'>Why</h1>
  <h2 className='text-3xl font-bold mb-0 text-left ml-14'>Undergraduplift?</h2>

  <div className='bg-white-500 p-8 grid lg:grid-cols-2 gap-4 relative'>
    <div className='flex flex-col justify-center items-center text-white w-full'>
      {/* First Circle */}
      <div
        className="flex items-center mb-4 relative"
        style={{ marginLeft: '-100px' }}
        onMouseEnter={() => {
          document.getElementById('circle1').style.transform = 'scale(1.1)';
          document.getElementById('text1').style.transform = 'scale(1.1)';
        }}
        onMouseLeave={() => {
          document.getElementById('circle1').style.transform = 'scale(1)';
          document.getElementById('text1').style.transform = 'scale(1)';
        }}
      >
        <div
          id="circle1"
          style={{
            ...circleStyle,
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
            transform: 'scale(1)',
          }}
        >
          <img
            src={smallicon1}
            alt='Image 1'
            className='w-15 h-25 object-cover rounded-full'
            style={smallIconStyle}
          />
        </div>
        <p
          id="text1"
          className=" text-black"
          style={{ marginLeft: '23px' }}
        >
          Gain access to 100+ tutors
        </p>
      </div>

      <div style={{ paddingBottom: '60px' }} />




      {/*Line 1 connecting Circle 1 and Circle 2 */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-20 w-1 bg-black" style={{ top: '35%', transform: 'translate(-50%, -50%)', left: '197px' }}></div>

      {/* Second Circle */}
      <div
        className="flex items-center mb-4 relative"
        style={{ marginLeft: '-175px' }}
        onMouseEnter={() => {
          document.getElementById('circle2').style.transform = 'scale(1.1)';
          document.getElementById('text2').style.transform = 'scale(1.1)';
        }}
        onMouseLeave={() => {
          document.getElementById('circle2').style.transform = 'scale(1)';
          document.getElementById('text2').style.transform = 'scale(1)';
        }}
      >
        <div
          id="circle2"
          style={{
            ...circleStyle,
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
            transform: 'scale(1)',
          }}
        >
          <img
            src={smallicon2}
            alt='Image 2'
            className='w-8 h-8 object-cover rounded-full'
            style={smallIconStyle}
          />
        </div>
        <p
          id="text2"
          className="text-black"
          style={{ marginLeft: '20px' }}
        >
          1000+ members
        </p>
      </div>

      <div style={{ paddingBottom: '50px' }} />


{/* Line 2*/}
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-20 w-1 bg-black" style={{ top: '70%', transform: 'translate(-50%, -50%)', left: '197px' }}></div>


      {/* Third Circle */}
      <div
        className="flex items-center relative"
        style={{ marginLeft: '-50px' }}
        onMouseEnter={() => {
          document.getElementById('circle3').style.transform = 'scale(1.1)';
          document.getElementById('text3').style.transform = 'scale(1.1)';
        }}
        onMouseLeave={() => {
          document.getElementById('circle3').style.transform = 'scale(1)';
          document.getElementById('text3').style.transform = 'scale(1)';
        }}
      >
        <div
          id="circle3"
          style={{
            ...circleStyle,
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
            transform: 'scale(1)',
          }}
        >
          <img
            src={smallicon3}
            alt='Image 3'
            className='w-15 h-15 object-cover rounded-full'
            style={smallIconStyle}
          />
        </div>
        <p
          id="text3"
          className="text-black"
          style={{ marginLeft: '23px' }}
        >
          Connect with like-minded people
        </p>
      </div>

      <div className='hidden lg:block absolute top-[-20%] left-[87%] w-1/2 transform -translate-x-1/2'>
  <img
    src={sitting}
    alt='Why Image'
    className='object-cover w-90 h-90'
  />
</div>

    </div>
  </div>
</div>

<div style={{ paddingBottom: '300px' }} />

{/* Join us today part */}
<div className='w-[900px] h-[250px] bg-blue-950 rounded-md relative overflow-visible transition-transform transform hover:scale-110 mb-40' style={{ left: '50%', transform: 'translateX(-50%)', paddingTop: '60px' }}>
  <img
    src={whyperson}
    alt='Whyperson Image'
    className='absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px]'
  />
  <img
    src={book}
    alt='Book Image'
    className='absolute top-[-150px] right-[-100px] w-[400px] h-[400px]'
  />
   <div className='text-center text-white'>
    <p className='text-2xl font-bold'>
      Join <span className="font-normal">undergrad uplift</span> today
    </p>
    <p className='text-2xl mb-5'>
      and experience personalized tutoring that
    </p>
    <p className='text-2xl'>
      empowers your success
    </p>
    <button className='bg-white text-blue-950 px-6 py-2 rounded-full mt-5'>
      Join us today
    </button>
  </div>
</div>


{/* Tutor Sessions */}

<div className="text-center text-blue-950 text-2xl font-bold mb-10">

  TUTOR SESSIONS
</div>


<div>
        {/* Render the FirstSlider component */}
        <FirstSlider
          sliderContent={sliderContent}
          ratings={ratings}
          handleRatingChange={handleRatingChange}
        />
      </div>









{/* Question Bank part */}
<div className='max-w-[1400px] m-auto my-20 px-4 grid lg:grid-cols-2 gap-4'>
  <div className='relative flex justify-end items-center'>
    <img
      className='object-cover w-[600px] h-[600px] rounded-md'
      src={questionbank}
      alt='Question Bank Image'
      style={{ marginRight: '-460px' }}
    />
    <div className='absolute top-50 left-36 p-6 text-left'>
      <p className='text-sm text-black'>TRY QUIZZES WITH OUR</p>
      <p className='text-4xl text-blue-900 mb-2'>QUESTION</p>
      <p className='text-4xl text-blue-900 mb-2'>BANK FEATURE</p>
      <p className='text-sm text-blue-900'>And Check Your Answers Real Time</p>
      <button className='bg-blue-900 text-white px-6 py-2 rounded-full mt-4'>
        Sign up today
      </button>
    </div>
  </div>
</div>

  {/* FAQ part */}
<div className='text-center mx-auto'>
  <h1 className='text-4xl font-bold mb-20 text-blue-900'>
    Frequently Asked Questions <span className="text-black font-bold">(FAQ)</span>
  </h1>
</div>

{/* How does undergrad uplift Work? */}
<div className='bg-gray-100 flex flex-col items-center shadow-lg p-8 rounded-md mx-auto' style={{ border: '2px solid black', borderRadius: '12px', width: '900px', height: 'auto', marginBottom: '40px' }}>
  <div className='mb-4 flex justify-between items-center w-full'>
    <h2 className='text-2xl font-bold text-left'>How does undergrad uplift Work?</h2>
    <button onClick={() => toggleMinimize(1)} className='text-blue-900 focus:outline-none'>
      {isMinimized1 ? '▼' : '▲'}
    </button>
  </div>
  <div className='w-full'>
    {!isMinimized1 && (
      <p className='text-gray-700'>
        We are a form of collaborative learning where students of similar academic levels are paired to work together. The tutor helps the peer by providing explanations, feedback, and academic assistance. Both parties benefit as the tutor reinforces their knowledge and skills while the student gains a better understanding of the subject matter. Kuppi tutoring is a beneficial learning strategy, especially in small groups for students who require a unique preference for the subject.
      </p>
    )}
  </div>
</div>

      {/* How to Book A Session part */}
<div className='bg-gray-100 flex flex-col items-center shadow-lg p-8 rounded-md mx-auto' style={{ border: '2px solid black', borderRadius: '12px', width: '900px', height: 'auto', marginBottom: '40px' }}>
  <div className='w-full'>
    <div className="flex justify-between items-center mb-4">
      <h2 className='text-2xl font-bold'>How to Book A Session</h2>
      <button onClick={() => toggleMinimize(2)} className='text-blue-900 focus:outline-none'>
        {isMinimized2 ? '▼' : '▲'}
      </button>
    </div>
    {!isMinimized2 && (
      <div>
        {/* Circles and Texts */}
        <div className="flex justify-between mb-4">
          {/* Circle 1 */}
          <div className="relative flex flex-col items-center">
            <div className="w-14 h-14 bg-white-900 rounded-full flex items-center justify-center border-2 border-black mb-2 hover:scale-110 transition-transform">
              <RiNumber1 size={24} color="#000" />
            </div>
            <p className="text-gray-700 text-center">Register</p>
          </div>

          {/* Line 1 */}
          <div className="w-20 border-t border-black mt-[30px]"></div>

          {/* Circle 2 */}
          <div className="relative flex flex-col items-center">
            <div className="w-14 h-14 bg-white-900 rounded-full flex items-center justify-center border-2 border-black mb-2 hover:scale-110 transition-transform">
              <RiNumber2 size={24} color="#000" />
            </div>
            <p className="text-gray-700 text-center">Choose A Tutor</p>
          </div>

          {/* Line 2 */}
          <div className="w-20 border-t border-black mt-[30px]"></div>

          {/* Circle 3 */}
          <div className="relative flex flex-col items-center">
            <div className="w-14 h-14 bg-white-900 rounded-full flex items-center justify-center border-2 border-black mb-2 hover:scale-110 transition-transform">
              <RiNumber3 size={24} color="#000" />
            </div>
            <p className="text-gray-700 text-center">Book A Session</p>
          </div>

          {/* Line 3 */}
          <div className="w-20 border-t border-black mt-[30px]"></div>

          {/* Circle 4 */}
          <div className="relative flex flex-col items-center">
            <div className="w-14 h-14 bg-white-900 rounded-full flex items-center justify-center border-2 border-black mb-2 hover:scale-110 transition-transform">
              <RiNumber4 size={24} color="#000" />
            </div>
            <p className="text-gray-700 text-center">Make The Payment</p>
          </div>
        </div>

        {/* Additional Texts */}
        <p className='text-gray-700'>
          {/* ... (content here) ... */}
        </p>
      </div>
    )}
  </div>
</div>


    {/* How to Become a Tutor part */}
<div className='bg-gray-100 flex flex-col items-center shadow-lg p-8 rounded-md mx-auto' style={{ border: '2px solid black', borderRadius: '12px', width: '900px', height: 'auto', marginBottom: '40px' }}>
  <div className='w-full'>
    <div className="flex justify-between items-center mb-4">
      <h2 className='text-2xl font-bold'>How to Become a Tutor?</h2>
      <button onClick={() => toggleMinimize(3)} className='text-blue-900 focus:outline-none'>
        {isMinimized3 ? '▼' : '▲'}
      </button>
    </div>
    {!isMinimized3 && (
      <div>
        {/* Content for "How to Become a Tutor?" */}
        {/* ... (content here) ... */}
      </div>
    )}
  </div>
</div>

{/* How Does the Post Bank Work? part */}
<div className='bg-gray-100 flex flex-col items-center shadow-lg p-8 rounded-md mx-auto' style={{ border: '2px solid black', borderRadius: '12px', width: '900px', height: 'auto', marginBottom: '40px' }}>
  <div className='w-full'>
    <div className="flex justify-between items-center mb-4">
      <h2 className='text-2xl font-bold'>How Does the Post Bank Work?</h2>
      <button onClick={() => toggleMinimize(4)} className='text-blue-900 focus:outline-none'>
        {isMinimized4 ? '▼' : '▲'}
      </button>
    </div>
    {!isMinimized4 && (
      <div>
        {/* Content for "How Does the Post Bank Work?" */}
        {/* ... (content here) ... */}
      </div>
    )}
  </div>
</div>

{/* Text Slider */}

<div className="text-center mb-8">
          <h1 className="text-3xl font-thin text-blue-900">Testimonials</h1>
       </div>


<Slider {...sliderSettings} className='my-10'>
        {sliderContent.map((item, index) => (
          <div key={index} className="text-center relative" style={{ marginRight: '10px' }}>
            <div style={{ backgroundColor: '#19216C', width: '400px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto', borderRadius: '16px' }}>
              {/* Topic and Stars */}
              <div className="flex justify-between items-start w-full px-4 mb-4">
                <p className="text-xl font-bold text-white">{item.topic}</p>
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
              <p className="text-white">{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
</div>
  );
};

export default Home;