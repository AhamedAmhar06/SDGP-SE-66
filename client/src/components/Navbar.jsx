import React, { useState, useEffect, useContext } from 'react';
import logo from '../Assets/images/Logo-N.png';
import { RiMenu4Line } from "react-icons/ri";
import MobileNavbar from './MobileNavbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UndergradContext } from '../context/undergradContext';

function Navbar()  {
  
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [auth, setAuth] = useState(false);
  const {undergrad} = useContext(UndergradContext);
  const [data, setData] = useState({
    email: '',
  });

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

  useEffect(() => {
    const authStatus = localStorage.getItem('undergrad');
    if(authStatus === 'true'){
      setAuth(true);
    }
  });

  //Logout button logic
  const logoutUser = async () => {
    try{
      await axios.get('/logout');
      toast.success('Logout Successful');
      localStorage.removeItem('undergrad');
      navigate('/login');
      window.location.reload();

    } catch (error) {
      toast.error('An error occurred. Please try again');
    }
  }

  //Check if user is a tutor
  const handleTutorLogin = async () => {
    try {
       let { email } = data;
      if (undergrad){
        email = undergrad.email;
        // console.log(email);
        const {data} = await axios.post('/tutorLogin', {
          email
        });
        // console.log(data);

        //If user is not a tutor, redirect to tutor register page
        if(!data){
          navigate('/tutorRegister');
        } else {
          navigate('/tutorDashboard');
          //Do the local storage thing here
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            

            {auth ? (
              <>
              <li>
                  <Link to={'/dashboard'} className='menu-item'>Dashboard</Link>
              </li>
              <li>
                  <button onClick={handleTutorLogin} className='menu-item'>Switch to Tutor</button>
              </li>
              <li>
                  <button onClick={logoutUser} className="hidden h-10 px-6 text-sm text-white rounded bg-NavBlue hover:bg-blue-700 hover:text-primary md:block">Logout</button>
              </li>
              </>
              
            ) : (
              <>
                <Link to={'/login'}>
                  <button className="hidden h-10 px-6 text-sm text-white rounded bg-NavBlue hover:bg-blue-700 hover:text-primary md:block">Join Us</button>
                 </Link>
              </>
            )}
            </ul>
            
           

          
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
