import React, { useState, useEffect, useContext, useRef } from 'react';
import logo from '../Assets/images/Logo-N.png';
import { RiMenu4Line } from "react-icons/ri";
import MobileNavbar from './MobileNavbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UndergradContext } from '../context/undergradContext';
import { FaUser } from "react-icons/fa";
import Dropdown from './Dropdown';

function Navbar()  {
  
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [auth, setAuth] = useState(false);
  const {undergrad} = useContext(UndergradContext);
  const [data, setData] = useState({
    email: '',
  });
  const[openProfile,setOpenProfile]=useState(false);
 
 

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

  // Check if user is a tutor
  const handleQuestionBank = async () => {
    try {
       let { email } = data;
      if (undergrad){
        email = undergrad.email;
        console.log(email);
        const {data} = await axios.post('/tutorLogin', {
          email
        });
        console.log(data);

        // If user is not a tutor, redirect to tutor register page
        if(data){
          navigate('/optionSelector');
        } else {
          navigate('/questionBank');
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
                  <Link to='/' className='font-semibold text-NavBlue'> Home </Link>
                </li>
                <li>
                    <Link to='/about' className='font-semibold text-NavBlue'> About Us </Link>
                </li>
                <li>
                    <Link to='/tutors' className='font-semibold text-NavBlue'> Tutors </Link>
                </li>
                <li>

                    <Link to='/forum' className='menu-item'> Community Space </Link>
                </li>                  
             

             {auth ? (

              <>

              <li>
                    <button className='menu-item' onClick={handleQuestionBank}> Question Bank </button>
                </li>
              <li>
                    <a className ="text-2xl font-semibold cursor-pointer text-NavBlue "  onClick={()=> setOpenProfile((prev)=>!prev)}><FaUser /></a>
                </li>
              {
                  openProfile &&  <Dropdown/>
              }
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