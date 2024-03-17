import React, { useState, useEffect } from 'react';
import aboutus1 from "../Assets/images/Asset 4.png";
import aboutus3 from "../Assets/images/Asset 6.png";
import skateboard from "../Assets/images/skateboard.png";
import target from "../Assets/images/target.png";
import idea from "../Assets/images/child.png";
import smallicon1 from "../Assets/images/smallicon1.png";
import smallicon2 from "../Assets/images/smallicon2.png";
import smallicon3 from "../Assets/images/smallicon3.png";
import wallet from "../Assets/images/wallet.png";

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
    width: screenWidth >= 768 ? '50%' : '100%',
    height: '70%',
    position: 'absolute',
    left: screenWidth >= 768 ? '25%' : '15%',
    top: '40%',
    transform: screenWidth >= 768 ? 'translate(-50%, -50%)' : 'translate(-40%, -60%) scale(0.5)', // Center horizontally and scale down for smaller screens
    maxWidth: '600px', // Maximum width to maintain responsiveness
  };

  const imageStyleAboutUs3 = {
    width: screenWidth >= 768 ? '85%' : (screenWidth >= 608 ? '90%' : '120%'),
  height: screenWidth >= 768 ? '25%' : (screenWidth >= 608 ? '30%' : '20%'),
    position: 'absolute',
    left: '63%',
    top: screenWidth >= 768 ? '40%' : '35%',
    transform: screenWidth >= 768 ? 'translate(-50%, -50%)' : 'translate(-40%, -55%) scale(0.8)', // Center horizontally and scale down for smaller screens
    maxWidth: screenWidth >= 768 ? '1000px' : 'none',
    };

  const imageStyleSkateboard = {
    width: screenWidth >= 768 ? '60%' : '80%',
    height: '70%',
    position: 'absolute',
    left: screenWidth >= 768 ? '75%' : '50%',
    top: '70%',
    transform: screenWidth >= 768 ? 'translate(-50%, -50%)' : 'translate(-20%, -60%) scale(0.5)', // Center horizontally and scale down for smaller screens
    

    maxWidth: '600px', 
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    zIndex: 1,
  };


  // Define heading style
  const headingStyle = {
    position: 'absolute',
    left: screenWidth >= 768 ? '20.5%'  : (screenWidth >= 608 ? '30%' : '25%'),
    top: screenWidth >= 768 ? '33%' : '29%',
    color: '#00008B',
    fontSize: '3rem',
    fontWeight: 'bold',
    transform: 'translate(-50%, -50%)',

  };

  // Define paragraph style
  const paragraphStyle = {
    position: 'absolute',
    left:screenWidth >= 768 ? '20%' : '19%',
    top: screenWidth >= 768 ? '37%' : '32%',
    textAlign: 'left',
    width: screenWidth >= 768 ? '25%' : '52%',
    marginBottom: '20px',
    transform: 'translate(-25%, -8%)',

  };

  // Define rectangle style
const rectangleStyle = {
  position: 'absolute',
  left: screenWidth >= 768 ? '25%' : '18%',
  top: screenWidth >= 768 ? '55%' : 'calc(35% + 400px)', // Adjusted top position to prevent overlapping
  width: screenWidth >= 768 ? '40%' : '70%',
  height: screenWidth >= 768 ? '300px' : '200px',
  border: '2px solid black',
  backgroundColor: 'white',
  borderRadius: '50px',
};


  // Define content inside rectangle style
  const contentInsideRectangleStyle = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    height: '100%',
  };

  // Define image inside rectangle style
  const imageInsideRectangleStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '30%',
  };

  // Define text inside rectangle style
  const textInsideRectangleStyle = {
    width: screenWidth >= 768 ? '60%' : '80%',
    left: screenWidth >= 768 ? '45%' : '90%',
    top: screenWidth >= 768 ? '40%' : '40%',
    transform: screenWidth >= 768 ?'translate(60%, -8%)':'translate(40%, -40%) scale(0.6)',  };

  // Define text heading style
  const textHeadingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    marginTop: '40px',
    color: '#00008B',
  };

  // Define target image style
  const targetImageStyle = {
    ...imageInsideRectangleStyle,
    width: '25%',
    height: '60%',
    left: '5%',
    top: '20%',
    borderRadius: '8px',
    zIndex: 2,
  };

  // Define child image style
  const childImageStyle = {
    ...imageInsideRectangleStyle,
    width:  screenWidth >= 768 ? '56%' : '72%',
    height: screenWidth >= 768 ? '156%' : '158%',
    left: '-1%',
    top: '-36%',
    borderRadius: '8px',
    zIndex: 2,
  };

  // Define circle container styles
  const circleContainerStyle = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
  };

  const circle1Style = {
    width: screenWidth >= 768 ? '15%' : '30%',
    height: 'auto',
    position: 'absolute',
    left: '20%',
    top: screenWidth >= 768 ? '80%' : '70%',
    transform: screenWidth >= 768 ? 'translate(-50%, -50%)' : 'translate(-40%, -60%) scale(0.5)', // Center horizontally and scale down for smaller screens
    maxWidth: '200px', // Maximum width to maintain responsiveness
  };

  const circle2Style = {
    width: screenWidth >= 768 ? '25%' : '30%',
    height: 'auto',
    position: 'absolute',
    left: '40%',
    top: screenWidth >= 768 ? '85%' : '70%',
    transform: screenWidth >= 768 ? 'translate(-50%, -50%)' : 'translate(-40%, -60%) scale(0.5)', // Center horizontally and scale down for smaller screens
    maxWidth: '200px', // Maximum width to maintain responsiveness
  };

  const circle3Style = {
    width: screenWidth >= 768 ? '25%' : '30%',
    height: 'auto',
    position: 'absolute',
    left: '60%',
    top: screenWidth >= 768 ? '80%' : '70%',
    transform: screenWidth >= 768 ? 'translate(-50%, -50%)' : 'translate(-40%, -60%) scale(0.5)', // Center horizontally and scale down for smaller screens
    maxWidth: '200px', // Maximum width to maintain responsiveness
  };

  const circle4Style = {
    width: screenWidth >= 768 ? '25%' : '30%',
    height: 'auto',
    position: 'absolute',
    left: '79.5%',
    top: screenWidth >= 768 ? '85%' : '70%',
    transform: screenWidth >= 768 ? 'translate(-50%, -50%)' : 'translate(-40%, -60%) scale(0.5)', // Center horizontally and scale down for smaller screens
    maxWidth: '200px', // Maximum width to maintain responsiveness
  };
  

  // Define circle styles
  const circleStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    marginRight: '5px',
    transition: 'box-shadow 0.3s ease',
    bottom: '19%',
  };

  // Define small icon styles
  const smallIconStyle = {
    width: '45%',
    height: '45%',
    objectFit: 'cover',
    position: 'absolute',
    borderRadius: '4%',
    clipPath: 'circle(100%)',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'scale(1)',
  };

  // Define circle text styles
  const circleTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '5%',
    transform: 'translateY(280%)',
  };

  // Define line styles
const lineStyle = {
  position: 'absolute',
  height: '2px',
  backgroundColor: 'black',
  display: screenWidth >= 1079 ? 'block' : 'none',
  marginTop: screenWidth >= 768 ? '-61vh' : (screenWidth >= 608 ? '90vh' : '-20vh'),
};


  // Styles for "Why" heading
const whyHeadingStyle = {
  fontSize: '3rem',
  color: '#00008B',
  fontWeight: 'bold',
  marginBottom: '10px',
};

// Styles for "Undergrad Uplift" paragraph
const undergradUpliftParagraphStyle = {
  fontSize: '2.0rem',
  color: '#00008B',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const containerDivStyle = {
  position: 'absolute',
  top: screenWidth >= 768 ? '68%' : '60%',
  left: '45%',
  transform: 'translateX(-50%)',
  textAlign: 'center',
  marginTop: '90px',
};


  return (
    <div style={containerStyle}>
      {/* Top Part */}
      <div className='relative w-full h-screen flex flex-col md:flex-row items-center bg-white-ash'>
        <img
          className='object-cover'
          src={aboutus1}
          alt='Contact Image'
          style={imageStyleabtus1}
        />

        <div style={textStyle}>
          <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl'>
            <span className='text-blue-900'>
              Build Connections{' '}
            </span>
          </h1>
          <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-2xl'>
            <span className='text-blue-900'>
              With Your Peers
            </span>
          </h1>
          <div style={{ marginTop: '10px' }}>
            <p className="text-black">
              {"and fellow graduates across the nation with undergrad "}
            </p>
          </div>
          <div style={{ marginTop: '10px' }}>
            <p className="text-black">
              Uplift and start learning/tutoring.
            </p>
          </div>
        </div>

        <img
          className='object-cover'
          src={skateboard}
          alt='Skateboard Image'
          style={imageStyleSkateboard}
        />
      </div>
      {/* About Us Section */}
      <div style={headingStyle}>
        <h1>About Us</h1>
      </div>

      <div style={paragraphStyle}>
        <p style={{ marginBottom: '20px' }}>
          At Campus Kuppi, we embrace collaborative learning through our unique tutoring approach.
          We pair students with similar academic levels to work together, fostering a supportive environment.
        </p>
        <p style={{ marginBottom: '20px' }}>
          Our tutors provide explanations, feedback, and academic assistance, benefiting both parties.
          Tutors reinforce their knowledge and skills, while students gain a deeper understanding of the subject matter.
        </p>
        <p style={{ marginBottom: '20px' }}>
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

      <div style={containerDivStyle}>
          <h2 style={whyHeadingStyle}>Why</h2>
  <p style={undergradUpliftParagraphStyle}>Undergrad Uplift?</p>
</div>

      {/* Four Circles */}
      {/* Circle 1*/}
<div style={{ ...circleContainerStyle, ...circle1Style }}>
  <div className="flex items-center relative" style={{ marginRight: '20px' }}>
    <div style={{ ...circleStyle, boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)', transform: 'scale(1)' }}>
      <img src={smallicon1} alt='Image 1' className='w-15 h-25 object-cover rounded-full' style={{ ...smallIconStyle, bottom: '25%', left: '26%' }} />
    </div>
    <p className="text-black" style={{ ...circleTextStyle, top: '-30px' }}>Gain access to 100+ tutors</p>
  </div>
</div>


      {/* Circle 2*/}
<div style={{ ...circleContainerStyle, ...circle2Style }}>
  <div className="flex items-center relative" style={{ marginRight: '20px' }}>
    <div style={{ ...circleStyle, boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)', transform: 'scale(1)' }}>
      <img src={smallicon2} alt='Image 2' className='w-15 h-25 object-cover rounded-full' style={{ ...smallIconStyle, bottom: '28%', left: '25%' }} />
    </div>
    <p className="text-black" style={{ ...circleTextStyle, top: '35px' }}>1000 + Members</p>
  </div>
</div>


      {/* Circle 3*/}
<div style={{ ...circleContainerStyle, ...circle3Style }}>
  <div className="flex items-center relative" style={{ marginRight: '20px' }}>
    <div style={{ ...circleStyle, boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)', transform: 'scale(1)' }}>
      <img src={smallicon3} alt='Image 2' className='w-15 h-25 object-cover rounded-full' style={{ ...smallIconStyle, bottom: '25%', left: '25%' }} />
    </div>
    <p className="text-black" style={{ ...circleTextStyle, top: '-30px' }}>Gain access to 100+ tutors</p>
  </div>
</div>

{/* Circle 4*/}
<div style={{ ...circleContainerStyle, ...circle4Style }}>
  <div className="flex items-center relative" style={{ marginRight: '20px' }}>
    <div style={{ ...circleStyle, boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)', transform: 'scale(1)' }}>
      <img src={wallet} alt='Image 2' className='w-15 h-25 object-cover rounded-full' style={{ ...smallIconStyle, bottom: '25%', left: '29%' }} />
    </div>
    <p className="text-black" style={{ ...circleTextStyle, top: '-30px' }}>Gain access to 100+ tutors</p>
  </div>
</div>


      <div className="absolute bottom-0 w-full">
        {/* Line 1 */}
        <div style={{ ...lineStyle, width: '14.5%', transform: 'rotate(-157deg)', left: '19.5%' }}></div>
        {/* Line 2 */}
        <div style={{ ...lineStyle, width: '14.5%', transform: 'rotate(-26deg)', left: '39.5%' }}></div>
        {/* Line 3 */}
        <div style={{ ...lineStyle, width: '14.5%', transform: 'rotate(-157deg)', left: '59.3%' }}></div>
      </div>
    </div>
  );
}

export default AboutUs;
