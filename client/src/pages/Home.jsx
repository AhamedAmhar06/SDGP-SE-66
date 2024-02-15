
import React from 'react';
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

const Home = () => {
  const imageStyle = {
    width: '60%',  // Set the desired width for the images
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
  const smalliconStyle = {
    width: '40px',
    height: '45px',
    objectFit: 'cover',
    borderRadius: '50%',
    ransition: 'box-shadow 0.3s ease, transform 0.3s ease',
    display: 'flex',  
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'scale(1)',
  }

  const imageZoomStyle = {
    width: '96%',  
    height: '90%',
    marginBottom: '10px',
    borderRadius: '40px',
    transition: 'transform 0.3s ease'
  }

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
  
  <button className='bg-black text-white mt-4 mb-4'>About Us</button>
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

      <div style={{ paddingBottom: '40px' }}></div>

      {/* Main Features part */}
  <div className='max-w-[900px] m-auto px-4 py-4 text-center'>
    <p className='text-sm mb-10 font-bold'>
      Build connections with your peers and fellow graduates <br />
      across the nation with CampusKuppi and start learning/tutoring.
    </p>

    <div className='flex flex-wrap justify-between'>
      <div>
        <img
          src={becomeatutor}
          alt='Become a Tutor'
          style={{ ...imageZoomStyle }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
        
      </div>
      <div>
        <img
          src={booksessions}
          alt='Book Sessions'
          style={{ ...imageZoomStyle }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
        
      </div>
      <div>
        <img
          src={community}
          alt='Community'
          style={{ ...imageZoomStyle }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
       
      </div>
    </div>
  </div>


      <div style={{ paddingBottom: '70px' }}></div>

  {/* Why part */}

  <div className='max-w-[1400px] m-auto py-16 px-4 relative'>
  <h1 className='text-4xl font-bold mb-4 text-left ml-14'>Why</h1>
  <h2 className='text-3xl font-bold mb-0 text-left ml-14'>Undergraduplif?</h2>
  </div>
  <div className='max-w-[1400px] m-auto py-16 px-4'>
        <div className='bg-white-500 p-8 grid lg:grid-cols-2 gap-4 relative'>
          <div className='flex flex-col justify-center items-center text-white w-full'>
            {/* First Circle */}
            <div
              className="flex items-center mb-4 relative"
              style={{ marginLeft: '-100px' }}
              onMouseEnter={() => {
                document.getElementById('circle1').style.transform = 'scale(1.1)';
              }}
              onMouseLeave={() => {
                document.getElementById('circle1').style.transform = 'scale(1)';
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
                  style={smalliconStyle}
                />
              </div>
              <p className="font-bold text-black" style={{ marginLeft: '10px' }}>Gain access to 100+ tutors</p>
            </div>

            {/* Second Circle */}
            <div
              className="flex items-center mb-4 relative"
              style={{ marginLeft: '-175px' }}
              onMouseEnter={() => {
                document.getElementById('circle2').style.transform = 'scale(1.1)';
              }}
              onMouseLeave={() => {
                document.getElementById('circle2').style.transform = 'scale(1)';
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
                  style={smalliconStyle}
                />
              </div>
              <p className="font-bold text-black" style={{ marginLeft: '10px' }}>1000+ members</p>
            </div>

            {/* Third Circle */}
            <div
              className="flex items-center relative"
              style={{ marginLeft: '-50px' }}
              onMouseEnter={() => {
                document.getElementById('circle3').style.transform = 'scale(1.1)';
              }}
              onMouseLeave={() => {
                document.getElementById('circle3').style.transform = 'scale(1)';
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
                  style={smalliconStyle}
                />
              </div>
              <p className="font-bold text-black" style={{ marginLeft: '10px' }}>Connect with like-minded people</p>
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

      <div style={{ paddingBottom: '70px' }}></div>
      {/* More Info part */}
      <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
          <h3 className='text-2xl font-bold'>More Info</h3>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2 ml-[-250px]'>
          <img
            className='object-cover w-[150px]h-[150px] rounded-md'
            src={tut}
            alt='Tutoring Session Image'
          />
          <img
            className='row-span-2 object-cover w-full h-[300px] rounded-md'
            src={qbank}
            alt='QBank Image'
          />
          <img
            className='object-cover w-[200px] h-[200px] rounded-md'
            src={greet}
            alt='Greet Image'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;