import React, { useState, useEffect } from 'react';
import logo from '../Assets/images/Logo-N.png';
import { RiMenu4Line } from "react-icons/ri";
import MobileNavbar from './MobileNavbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function Navbar()  {
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

  //Logout button logic
  const logoutUser = async () => {
    try{
      await axios.get('/logout');
      toast.success('Logout Successful');
      window.location.reload();
    } catch (error) {
      toast.error('An error occurred. Please try again');
    }
  }

  return (
    <>
     {isMenuOpen && <MobileNavbar setIsMenuOpen={setIsMenuOpen} />}
    <div className='sticky top-0 z-10 bg-background '>
      <nav className='max-w-screen-xl px-6 py-4 mx-auto'>
        <div className='flex items-center justify-between'>
          <Link to='/'>
            <img src={logo} alt ='logo' className='object-contain w-auto h-11'/>
          </Link>
            <ul className='hidden md:flex md:gap-14 '>
                <li>
                  <Link to='/' className='menu-item'> Home </Link>
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
                <li>
                  <Link to={'/dashboard'} className='menu-item'>Dashboard</Link>
                </li>
            </ul>
            <Link to={'/login'}>
              <button className="hidden h-10 px-6 text-sm text-white rounded bg-NavBlue hover:bg-blue-700 hover:text-primary md:block">Join Us</button>
            </Link>
            {/* <Link to={'/login'}> */}
              <button onClick={logoutUser} className="hidden h-10 px-6 text-sm text-white rounded bg-NavBlue hover:bg-blue-700 hover:text-primary md:block">Logout</button>
            {/* </Link> */}

          
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
