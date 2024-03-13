
import React from 'react';
import aboutus1 from "../Assets/images/Asset 4.png";
import aboutus3 from "../Assets/images/Asset 6.png";
import skateboard from "../Assets/images/skateboard.png";
import target from "../Assets/images/target.png";
import idea from "../Assets/images/child.png";
import smallicon1 from "../Assets/images/smallicon1.png";
import smallicon2 from "../Assets/images/smallicon2.png";
import smallicon3 from "../Assets/images/smallicon3.png";
import wallet from "../Assets/images/wallet.png";
import { useState, useEffect } from 'react';

function AboutUs() {

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

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '350vh',
  };

  const imageStyleabtus1 = {
    width: screenWidth >= 768 ? '40%' : '100%',
    height: '80%',
    marginBottom: screenWidth >= 768 ? '330px' : '0',
    top: screenWidth >= 768 ? '-8%' : '20%', 
    position: 'absolute',
    left: '9%',
  };

  const imageStyleAboutUs3 = {
    width: '65%',
    height: '99%',
    position: 'absolute',
    left: '24%',
    top: '75%',
  };

  const imageStyleSkateboard = {
    width: screenWidth >= 768 ? '40%' : '40%',
    height: '70%',
    position: 'absolute',
    left: screenWidth >= 768 ? '50%' : '52%',
    top: screenWidth >= 768 ? '20%' : '60%', // Adjusted top position
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
    top: '85%',
    color: '#00008B',
    fontSize: '3rem',
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    position: 'absolute',
    left: '12%',
    top: '100%',
    textAlign: 'left',
    width: '25%',
    marginBottom: '20px', 
  };

  const rectangleStyle = {
    position: 'absolute',
    left: '22%',
    top: '190%',
    width: '50%',
    height: '300px', 
    border: '2px solid black',
    backgroundColor: 'white',
    borderRadius: '50px', 
  };

  const contentInsideRectangleStyle = {
    position: 'absolute', 
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    height: '100%', 
  };
  
  const imageInsideRectangleStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '30%', 
  };
  
  const textInsideRectangleStyle = {
    width: '50%',
    left: '50%', 
    top: '40%', 
    transform: 'translateX(90%)', 
  };

  const textHeadingStyle = {
    fontSize: '2.5rem', 
    fontWeight: 'bold',
    marginBottom: '10px',
    marginTop: '40px',
    color: '#00008B', 
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
    width: '56%',
    height: '165%',
    left: '-1%',
    top: '-36%',
    borderRadius: '8px',
    zIndex: 2,
    
  };


  //circles

  //circle 1 

  const circle1ContainerStyle = {
    position: 'absolute',
    left: '20%', 
    top: '290%', 
    transform: 'translate(-50%, -50%)', 
  }
  
  const circle1Style = {
    width: '100px',
    height: '100px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    marginRight: '5px',
    transition: 'box-shadow 0.3s ease',
    bottom: '19%',

  };
  
  const smallIcon1Style = {
    width: '45%',
    height: '45%',
    objectFit: 'cover',
    position: 'absolute',
    borderRadius: '4%',
    clipPath: 'circle(100%)',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    bottom: '25%',
    left: '26%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'scale(1)',
  };

  const circle1TextStyle = {
    position: 'absolute',
    top: '50%', 
    left: '5%', 
    transform: 'translateY(280%)', 
  };


  //circle 2 

  const circle2ContainerStyle = {
    position: 'absolute',
    left: '40%', 
    top: '310%',
    transform: 'translate(-50%, -50%)', 
  };
  
  const circle2Style = {
    width: '100px',
    height: '100px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    marginRight: '5px',
    transition: 'box-shadow 0.3s ease',
    bottom: '19%',

  };
  
  const smallIcon2Style = {
    width: '45%',
    height: '45%',
    objectFit: 'cover',
    position: 'absolute',
    borderRadius: '4%',
    clipPath: 'circle(100%)',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    bottom: '28%',
    left: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'scale(1)',
  };

  const circle2TextStyle = {
    position: 'absolute',
    top: '50%', 
    left: '5%', 
    transform: 'translateY(280%)', 
  };


  //circle 3

  const circle3ContainerStyle = {
    position: 'absolute',
    left: '60%', 
    top: '290%', 
    transform: 'translate(-50%, -50%)', 
  };
  
  const circle3Style = {
    width: '100px',
    height: '100px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    marginRight: '5px',
    transition: 'box-shadow 0.3s ease',
    bottom: '19%',

  };
  
  const smallIcon3Style = {
    width: '45%',
    height: '45%',
    objectFit: 'cover',
    position: 'absolute',
    borderRadius: '4%',
    clipPath: 'circle(100%)',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    bottom: '25%',
    left: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'scale(1)',
  };

  const circle3TextStyle = {
    position: 'absolute',
    top: '50%', 
    left: '5%', 
    transform: 'translateY(280%)', 
  };


   //circle 4

   const circle4ContainerStyle = {
    position: 'absolute',
    left: '80%',
    top: '310%', 
    transform: 'translate(-50%, -50%)', 
  };
  
  const circle4Style = {
    width: '100px',
    height: '100px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    marginRight: '5px',
    transition: 'box-shadow 0.3s ease',
    bottom: '19%',

  };
  
  const smallIcon4Style = {
    width: '45%',
    height: '45%',
    objectFit: 'cover',
    position: 'absolute',
    borderRadius: '4%',
    clipPath: 'circle(100%)',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    bottom: '25%',
    left: '29%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'scale(1)',
  };

  const circle4TextStyle = {
    position: 'absolute',
    top: '50%', 
    left: '5%', 
    transform: 'translateY(280%)', 
  };

  //lines

  // Line 1
const line1Style = {
  position: 'absolute',
  width: '15.5%', 
  height: '2px', 
  backgroundColor: 'black', 
  transform: 'rotate(-155deg)', 
  marginTop: screenWidth >= 768 ? '200vh' : (screenWidth >= 608 ? '90vh' : '200vh'), 
  left: '21.5%',
};
// Line 2
const line2Style = {
  position: 'absolute',
  width: '15.5%', 
  height: '2px', 
  backgroundColor: 'black', 
  transform: 'rotate(-28deg)', 
  marginTop: screenWidth >= 768 ? '200vh' : (screenWidth >= 608 ? '90vh' : '200vh'),    
  left: '41.5%',
  
};

// Line 3
const line3Style = {

  
  position: 'absolute',
  width: '15.5%', 
  height: '2px', 
  backgroundColor: 'black', 
  transform: 'rotate(-155deg)', 
  marginTop: screenWidth >= 768 ? '200vh' : (screenWidth >= 608 ? '90vh' : '200vh'),    
  left: '61.3%',
};

const paragraphItemStyle = {
  marginBottom: '20px',
}


  


  return (
    <div style={containerStyle}>
      {/* Top Part */}
      <div className='relative w-full h-screen flex items-center bg-white-ash'>
     
       {screenWidth >= 768 && ( 
          <img
            className='left-0 object-cover'
            src={aboutus1}
            alt='Contact Image'
            style={imageStyleabtus1}
          />
        )}

    
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
            <div style={{ position: 'relative',marginTop: '10px' }}>
      <p className="text-black">
        {"and fellow graduates across the nation with undergrad "}
      </p>
    </div>
    <div style={{ position: 'relative', marginTop: '10px' }}>
      <p className="text-black">
        Uplift and start learning/tutoring.
      </p>
    </div>
  </div>
</div>
        {/* Skateboard image */}
        {screenWidth >= 768 && ( // Render only for larger screens
          <img
            className='right-0'
            src={skateboard}
            alt='Skateboard Image'
            style={imageStyleSkateboard}
          />
        )}
        {/* About Us Section */}
        <div style={headingStyle}>
          <h1>About Us</h1>
        </div>

        <div style={paragraphStyle}>
  <p style={paragraphItemStyle}>
    At Campus Kuppi, we embrace collaborative learning through our unique tutoring approach.
    We pair students with similar academic levels to work together, fostering a supportive environment.
    At Campus Kuppi, we embrace collaborative learning through our unique tutoring approach.
    We pair students with similar academic levels to work together, fostering a supportive environment.
  </p>
  <p style={paragraphItemStyle}>
    Our tutors provide explanations, feedback, and academic assistance, benefiting both parties.
    Tutors reinforce their knowledge and skills, while students gain a deeper understanding of the subject matter.
  </p>
  <p style={paragraphItemStyle}>
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

<div style={{ position: 'absolute', top: '240%', left: '45%', transform: 'translateX(-50%)', textAlign: 'center' , marginTop: '90px'}}>
  <h2 style={{ fontSize: '3rem', color: '#00008B',  fontWeight: 'bold', marginBottom: '5px' }}>Why</h2>
  <p style={{ fontSize: '2.0rem', color: '#00008B', fontWeight: 'bold', marginBottom: '20px' }}>Undergrad Uplift?</p>
</div>

  {/* Four Circles */}

{/* Circle 1*/}
<div style={circle1ContainerStyle}>
  <div
    className="flex items-center relative"
    style={{ marginRight: '20px' }} 
  >
    <div
      style={{
        ...circle1Style,
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
        transform: 'scale(1)',
      }}
    >
      <img
        src={smallicon1}
        alt='Image 1'
        className='w-15 h-25 object-cover rounded-full'
        style={smallIcon1Style}
      />
    </div>
    <p
      className="text-black"
      style={{ ...circle1TextStyle, top: '-30px' }} 
    >
      Gain access to 100+ tutors
    </p>
  </div>
</div>

{/* Circle 2*/}
<div style={circle2ContainerStyle}>
  <div
    className="flex items-center relative"
    style={{ marginRight: '20px' }} 
  >
    <div
      style={{
        ...circle2Style,
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
        transform: 'scale(1)',
      }}
    >
      <img
        src={smallicon2}
        alt='Image 2'
        className='w-15 h-25 object-cover rounded-full'
        style={smallIcon2Style}
      />
    </div>
    <p
      className="text-black"
      style={{ ...circle2TextStyle, top: '-30px' }} 
    >
      1000 + Members
    </p>
  </div>
</div>
{/* Circle 3*/}
<div style={circle3ContainerStyle}>
  <div
    className="flex items-center relative"
    style={{ marginRight: '20px' }}
  >
    <div
      style={{
        ...circle3Style,
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
        transform: 'scale(1)',
      }}
    >
      <img
        src={smallicon3}
        alt='Image 2'
        className='w-15 h-25 object-cover rounded-full'
        style={smallIcon3Style}
      />
    </div>
    <p
      className="text-black"
      style={{ ...circle3TextStyle, top: '-30px' }} 
    >
      Gain access to 100+ tutors
    </p>
  </div>
</div>

{/* Circle 4*/}
<div style={circle4ContainerStyle}>
  <div
    className="flex items-center relative"
    style={{ marginRight: '20px' }} 
  >
    <div
      style={{
        ...circle4Style,
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
        transform: 'scale(1)',
      }}
    >
      <img
        src={wallet}
        alt='Image 2'
        className='w-15 h-25 object-cover rounded-full'
        style={smallIcon4Style}
      />
    </div>
    <p
      className="text-black"
      style={{ ...circle4TextStyle, top: '-30px' }} 
    >
      Gain access to 100+ tutors
    </p>
  </div>
</div>

<div className="absolute bottom-0 w-full">
  {/* Line 1 */}
  <div style={line1Style}></div>
  {/* Line 2 */}
  <div style={line2Style}></div>
  {/* Line 3 */}
  <div style={line3Style}></div>
</div>

      </div>
    </div>
  );
}

export default AboutUs;




