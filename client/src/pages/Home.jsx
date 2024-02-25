

import React, { useState } from 'react';
import headerImg from "../Assets/images/header-img.png";
import contactimg from "../Assets/images/grad-img.png";
import becomeatutor from "../Assets/images/become a tutor.png";
import community from "../Assets/images/community.png";
import booksessions from "../Assets/images/booksessions.png";
import tut from "../Assets/images/tutoringsession.png";
import qbank from "../Assets/images/qbank.png";
import greet from "../Assets/images/greet.png";
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
import number1 from "../Assets/images/1.png";
import number2 from "../Assets/images/2.png";
import number3 from "../Assets/images/3.png";
import number4 from "../Assets/images/4.png";

const Home = () => {
  const imageStyle = {
    width: '60%',  
    height: '50%',
    marginBottom: '10px',
  };

  const circleStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    marginRight: '5px',
    transition: 'box-shadow 0.3s ease',
  };

  /* <img
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
    }} */
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

  const imageZoomStyle = {
    width: '96%',  
    height: '90%',
    marginBottom: '10px',
    borderRadius: '40px',
    transition: 'transform 0.3s ease'
  }

 
  // State for FAQ sections
  const [isMinimized1, setIsMinimized1] = useState(false);
  const [isMinimized2, setIsMinimized2] = useState(false);
  const [isMinimized3, setIsMinimized3] = useState(false);
  const [isMinimized4, setIsMinimized4] = useState(false); // Added state for isMinimized4

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
  
  

  

  return (
    <div>
      {/* Banner Part */}
      <div className='relative w-full h-screen flex items-center bg-white-ash'>
        {/* Left part with contact image */}
        <img
          className='top-0 left-0 w-[40%] h-screen object-cover'
          src={contactimg}
          alt='Contact Image'
          style={imageStyle}
        />

        {/* Middle part with text and button */}
        <div className='w-[50%] h-screen flex flex-col justify-center text-white'>
        <div className='max-w-[600px] m-auto p-4 text-center'>
  <p className='text-blue-900'>Guiding undergrads to success in their academic journey</p>
  <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
    <span className='text-blue-900'>
      First collaborative hub
    </span>
  </h1>
  <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
    <span className='text-blue-900'>
      for university students in Sri Lanka
    </span>
  </h1>
  
  <button className='bg-black text-white rounded-full mt-4 mb-2 px-6 py-3 w-8px'>About Us</button>

 
</div>
        </div>

        {/* Right part with header image */}
        <img
          className='top-0 right-[60%] w-[20%] h-screen object-cover'
          src={headerImg}
          alt='Header Image'
          style={imageStyle}
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
<div className='w-[200px] h-[200px] bg-blue-900 rounded-2xl relative overflow-hidden transition-transform transform hover:scale-110'>
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
<div className='w-[200px] h-[200px] bg-blue-900 rounded-2xl relative overflow-hidden transition-transform transform hover:scale-110'>
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
<div className='w-[200px] h-[200px] bg-blue-900 rounded-2xl relative overflow-hidden transition-transform transform hover:scale-110'>
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
                className="font-bold text-black"
                style={{ marginLeft: '10px' }}
              >
                Gain access to 100+ tutors
              </p>
            </div>

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
                className="font-bold text-black"
                style={{ marginLeft: '10px' }}
              >
                1000+ members
              </p>
            </div>

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
                className="font-bold text-black"
                style={{ marginLeft: '10px' }}
              >
                Connect with like-minded people
              </p>
            </div>

            {/* Lines connecting circles */}
            <div className="absolute top-0 left-0 w-1 h-1/3 bg-black"></div>
            <div className="absolute top-1/3 left-0 w-1 h-1/3 bg-black"></div>
            <div className="absolute top-2/3 left-0 w-1 h-1/3 bg-black"></div>

            <div className='hidden lg:block absolute top-[-170px] right-16 w-1/2'>
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
<div className='w-[900px] h-[250px] bg-blue-900 rounded-md relative overflow-visible transition-transform transform hover:scale-110' style={{ left: '50%', transform: 'translateX(-50%)', paddingTop: '60px' }}>
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
    <button className='bg-white text-blue-900 px-6 py-2 rounded-full mt-5'>
      Join us today
    </button>
  </div>
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
              <img src={number1} alt="Image 1" className="w-8 h-8 object-contain rounded-contain" />
            </div>
            <p className="text-gray-700 text-center">Register</p>
          </div>

          {/* Circle 2 */}
          <div className="relative flex flex-col items-center">
            <div className="w-14 h-14 bg-white-900 rounded-full flex items-center justify-center border-2 border-black mb-2 hover:scale-110 transition-transform">
              <img src={number2} alt="Image 2" className="w-8 h-8 object-contain rounded-contain" />
            </div>
            <p className="text-gray-700 text-center">Choose A Tutor</p>
          </div>

          {/* Circle 3 */}
          <div className="relative flex flex-col items-center">
            <div className="w-14 h-14 bg-white-900 rounded-full flex items-center justify-center border-2 border-black mb-2 hover:scale-110 transition-transform">
              <img src={number3} alt="Image 3" className="w-8 h-8 object-contain rounded-contain" />
            </div>
            <p className="text-gray-700 text-center">Book A Session</p>
          </div>

          {/* Circle 4 */}
          <div className="relative flex flex-col items-center">
            <div className="w-14 h-14 bg-white-900 rounded-full flex items-center justify-center border-2 border-black mb-2 hover:scale-110 transition-transform">
              <img src={number4} alt="Image 4" className="w-8 h-8 object-contain rounded-contain" />
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
    </div>
  );
};

export default Home;