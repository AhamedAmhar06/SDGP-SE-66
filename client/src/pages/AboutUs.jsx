// AboutUs.jsx

import React from 'react';
import aboutus1 from "../Assets/images/Asset 4.png";
import aboutus3 from "../Assets/images/Asset 6.png";
import skateboard from "../Assets/images/skateboard.png";
import target from "../Assets/images/target.png";
import idea from "../Assets/images/child.png";

function AboutUs() {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '500vh',
  };

  const imageStyleabtus1 = {
    width: '60%',
    height: '80%',
    marginBottom: '330px',
    top: '-8%',
    position: 'absolute',
    left: '0',
  };

  const imageStyleAboutUs3 = {
    width: '65%',
    height: '99%',
    position: 'absolute',
    left: '24%',
    top: '75%',
  };

  const imageStyleSkateboard = {
    width: '40%',
    height: 'auto',
    position: 'absolute',
    left: '52%',
    top: '10%',
  };

  const textStyle = {
    position: 'absolute',
    right: '0',
    top: '35%',
    transform: 'translateY(-50%)',
  };

  const headingStyle = {
    position: 'absolute',
    left: '12%',
    top: '90%',
    color: '#0047AB',
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    position: 'absolute',
    left: '12%',
    top: '100%',
    textAlign: 'left',
    width: '25%',
  };

  const rectangleStyle = {
    position: 'absolute',
    left: '22%',
    top: '190%',
    width: '50%',
    height: '300px', // Adjust the height as needed
    border: '2px solid black',
    backgroundColor: 'white',
    borderRadius: '50px', // Adjust the border-radius as needed
  };

  const contentInsideRectangleStyle = {
    position: 'absolute', // Change to absolute
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    height: '100%', // Set a specific height for the parent container
  };
  
  const imageInsideRectangleStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '30%', // Adjust the width as needed
  };
  
  const textInsideRectangleStyle = {
    width: '50%',
    left: '50%', // Adjust the left property to move the text to the right
    top: '40%', // Adjust the top property to move the text up/down
    transform: 'translateX(90%)', // Center the text horizontally
  };

  const textHeadingStyle = {
    fontSize: '1.5rem', // Adjust the font size as needed
    fontWeight: 'bold',
    marginBottom: '10px',
    marginTop: '40px', // Add margin top as needed
    color: '#0047AB', // Blue color
  };
    
    

  
  const targetImageStyle = {
    ...imageInsideRectangleStyle,
    width: '25%',
    height: '60%',
    left: '5%',
    top: '20%',
    borderRadius: '8px',
    zIndex: 2,
  };
  
  const childImageStyle = {
    ...imageInsideRectangleStyle,
    width: '55%',
    height: '160%',
    left: '-1%',
    top: '-35%',
    borderRadius: '8px',
    zIndex: 2,
    
  };
  


  return (
    <div style={containerStyle}>
      {/* Banner Part */}
      <div className='relative w-full h-screen flex items-center bg-white-ash'>
        {/* Left part with contact image */}
        <img
          className='left-0 w-[40%] h-screen object-cover'
          src={aboutus1}
          alt='Contact Image'
          style={imageStyleabtus1}
        />

        {/* Middle part with text and button */}
        <div style={textStyle} className='w-full text-white'>
          <div className='max-w-2xl mx-auto p-4 text-center'>
            <h1 className='font-bold text-3xl md:text-4xl drop-shadow-2xl'>
              <span className='text-blue-900'>
                Build Connections{' '}
              </span>
            </h1>
            <h1 className='font-bold text-5xl md:text-6xl drop-shadow-2xl'>
              <span className='text-blue-900'>
                With Your Peers
              </span>
            </h1>
          </div>
        </div>

        {/* Skateboard image */}
        <img
          className='right-0'
          src={skateboard}
          alt='Skateboard Image'
          style={imageStyleSkateboard}
        />

        {/* About Us Section */}
        <div style={headingStyle}>
          <h1>About Us</h1>
        </div>

        <div style={paragraphStyle}>
          <p>
            At Campus Kuppi, we embrace collaborative learning through our unique tutoring approach.
            We pair students with similar academic levels to work together, fostering a supportive environment.
            At Campus Kuppi, we embrace collaborative learning through our unique tutoring approach.
            We pair students with similar academic levels to work together, fostering a supportive environment.
          </p>
          <p>
            Our tutors provide explanations, feedback, and academic assistance, benefiting both parties.
            Tutors reinforce their knowledge and skills, while students gain a deeper understanding of the subject matter.
          </p>
          <p>
            This personalized and effective learning strategy is particularly beneficial in small groups,
            catering to the unique preferences of each student.
          </p>
        </div>

        {/* About Us Image */}
        <img
          src={aboutus3}
          alt='About Us Image'
          style={imageStyleAboutUs3}
        />


<div style={rectangleStyle}>
  <div style={contentInsideRectangleStyle}>
    <img src={target} alt='Target Image' style={{ ...imageInsideRectangleStyle, ...targetImageStyle }} />
    <img src={idea} alt='Child Image' style={{ ...imageInsideRectangleStyle, ...childImageStyle }} />
    <div style={textInsideRectangleStyle}>
      <h2 style={textHeadingStyle}>Our Vision</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default AboutUs;
