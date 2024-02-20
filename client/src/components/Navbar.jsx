import React, { useState, useEffect } from 'react';
import logo from '../Assets/images/Logo-N.png';
import { RiMenu4Line } from "react-icons/ri";
import MobileNavbar from './MobileNavbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
      if (window.innerWidth <= 768) { // You can adjust the threshold according to your requirements
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for window size
    handleResize();

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
     {isMenuOpen && <MobileNavbar setIsMenuOpen={setIsMenuOpen} />}
    <div className='sticky top-0 z-10 bg-background '>
      <nav className='max-w-screen-xl px-6 py-4 mx-auto'>
        <div className='flex items-center justify-between'>
            <img src={logo} alt ='logo' className='object-contain w-auto h-11'/>
            <ul className='hidden md:flex md:gap-14 '>
                <li>
                  <Link to='/home' className='menu-item'> Home </Link>
                </li>
                <li>
                    <Link to='/about' className='menu-item'> About Us </Link>
                </li>
                <li>
                    <a className="menu-item">Tutors</a>
                </li>
                <li>
                    <a className ="menu-item">Join the community</a>
                </li>
                <li>
                    <a className ="menu-item">Question Bank</a>
                </li>
            </ul>
            <Link to={'/login'}>
              <button className="hidden h-10 px-6 text-sm text-white rounded bg-NavBlue hover:bg-blue-700 hover:text-primary md:block">Join Us</button>
            </Link>

          
            {showButton && !isMenuOpen && // Render the button only when showButton is true and isMenuOpen is false
              <button onClick={() => { setIsMenuOpen(true) }} className="z-50 flex items-center justify-center text-2xl text-white w-11 h-11 bg-NavBlue rounded-md:hidden">
                <RiMenu4Line />
              </button>
            }
           

        </div>
      </nav>
    </div>
    </>
  );
};


export default Navbar;
