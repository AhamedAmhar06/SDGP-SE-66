
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

  const BlueSquare = ({ children, top, left, imageSrc, altText }) => {
    const renderImage = () => {
      const imageStyle = {
        width: '40%',
        height: '40%',
        objectFit: 'cover',
        borderRadius: '8px',
        position: 'absolute',
        top: '50%',  
        left: '50%', 
        transform: 'translate(-50%, -50%)',
      };
  
      return (
        <img
          src={imageSrc}
          alt={altText}
          style={imageStyle}
        />
      );
    }
    return (
      <div className='w-[200px] h-[200px] rounded-2xl relative overflow-hidden' style={{ backgroundColor: '#00005B', top, left:'-10px' }}>
        {renderImage()}
        {children}
      </div>
    );
  }


  return (
    <div className="overflow-x-hidden relative min-h-screen bg-gray-100">
      {/* Contact image */}
      <div className="relative left-20 w-full pb-4 sm:left-5 md:left-0  md:left-21 md:mb-20 xl:left-5  xl:w-[800px] xl:h-auto xl:left-[-100px] xl:bottom-16  xl:mt-0 lg:w-[650px] lg:left-50  lg:w-[400px] lg:left-80 lg:bottom-0 lg:mb-0 lg:mt-0 md:w-[550px] md:left-50 md:w-auto  md:left-[200px] md:bottom-0 md:mb-0 md:mt-0">
        <img
          className="w-full h-full object-cover"
          src={contactimg}
          alt="Contact Image"
        />
      </div>

     
    
      {/* Text paragraph */}
      <div className="text-center xl:absolute xl:top-1/3 xl:left-1/2 xl:transform xl:-translate-x-1/2 mb:['10px'] xl:-translate-y-1/2 xl:top-[350px]">
  <p className="text-blue-900 text-2xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold mb-4">
    First collaborative hub <br />
    For university students in <br /> Sri Lanka
  </p>
        <button className="bg-black text-white py-3 px-6 rounded-full">About Us</button>
      </div>
 {/* Header image */}
<div className="relative hidden sm:hidden md:hidden lg:hidden xl:block w-full pb-4 xl:left-[650px] xl:w-[860px] xl:h-auto xl:left-[620px] xl:bottom-[-60px] xl:mb-0 xl:mt-[-710px]">
  <img
    className="w-full h-auto object-cover"
    src={headerImg}
    alt="Header Image"
  />


</div>
  <div className='mt-'></div>

  {/* Main Features part */}
<div className='max-w-[900px] m-auto px-4 py-4 text-center'>
  <p className='text-sm mb-10 font-bold'>
    Build connections with your peers and fellow graduates <br />
    across the nation with CampusKuppi and start learning/tutoring.
  </p>

  <div className='flex flex-col sm:flex-row justify-center items-center'>
    {/* Blue Square 1 */}
    <BlueSquare sm:top='-20px' left='70px' imageSrc={tutormf} altText='Tutoring Session Image' >
      <div className="absolute bottom-4 text-white text-center left-16">
        <p style={{ fontSize: '12px' }}>Become a</p>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>TUTOR</p>
      </div>
    </BlueSquare>

    {/* Blue Square 2 */}
    <BlueSquare top='10px' left='-10px' imageSrc={sessionmf} altText='Online Learning Image' style={{ marginBottom: '20px', marginLeft: '30px' }}>
      <div className="absolute bottom-4 text-white text-center left-14">
        <p style={{ fontSize: '12px' }}>Book your</p>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>SESSIONS</p>
      </div>
    </BlueSquare>

    {/* Blue Square 3 */}
    <BlueSquare top='20px' left='-100px' imageSrc={communitymf} altText='Communities Image' style={{ marginBottom: '20px', marginLeft: '30px' }}>
      <div className="absolute bottom-4 text-white text-center left-14">
        <p style={{ fontSize: '12px' }}>Join The </p>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Community</p>
      </div>
    </BlueSquare>
  </div>
</div>

<div className='mt-20'></div>


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

      {window.innerWidth > 1280 && (

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-20 w-1 bg-black" style={{ top: '35%', transform: 'translate(-50%, -50%)', left: '197px' }}></div>
)}
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

{/* Line 2 */}
{window.innerWidth > 1280 && (
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-20 w-1 bg-black" style={{ top: '70%', transform: 'translate(-50%, -50%)', left: '197px' }}></div>
)}


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

      <div className='hidden lg:block absolute top-[-180px] right-16 w-1/2 h-[600px] w-[700px]'>
        <img
          src={sitting}
          alt='Why Image'
          className='object-full w-100 h-full'
        />
      </div>
    </div>


    



</div>
<div style={{ marginTop: '-150px' }} />

<div style={{ paddingBottom: '300px' }} />
<div className='xl:w-[900px] xl:h-[200px] lg:w-[600px] lg:h-[250px] md:w-[600px] md:h-[230px] sm:w-[600px] sm:h-[250px] bg-[#00008B] rounded-[40px] relative overflow-visible transition-transform transform hover:scale-110 mb-40' style={{ left: '50%', transform: 'translateX(-50%)', paddingTop: '60px' }}>
  {/* Whyperson Image */}
  <img
    src={whyperson}
    alt='Whyperson Image'
    className='hidden xl:block absolute xl:top-[-80px] xl:ml-[-100px] w-[500px] h-[500px] xl:w-[400px] xl:h-[400px]'
  />
  {/* Book Image */}
  <img
    src={book}
    alt='Book Image'
    className='hidden xl:block absolute xl:top-[-40px] xl:right-[-70px] xl:mt-[-50px] w-[400px] h-[400px] xl:w-[300px] xl:h-[300px]'
  />
  <div className='text-center text-white xl:-mt-10'>
    <p className='text-2xl font-bold'>
      Join <span className="font-normal">undergrad uplift</span> today
    </p>
    <p className='text-2xl mb-5'>
      and experience personalized tutoring that
    </p>
    <p className='text-2xl'>
      empowers your success
    </p>
    <button className='bg-white text-blue-950 px-6 py-2 rounded-full mt-2'>
      Join us today
    </button>
   
  </div>
</div>


</div>
</div>
);


};

export default Home;