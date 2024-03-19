import React, { useState, useEffect, useContext } from 'react';
import logo from'../Assets/images/white logo 1.png'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UndergradContext } from '../context/undergradContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate();
  const {undergrad} = useContext(UndergradContext);
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState({
    email: '',
  });

  useEffect(() => {
    const authStatus = localStorage.getItem('undergrad');
    if(authStatus === 'true'){
      setAuth(true);
    }
  });

  const handleTutorLogin = async () => {
    try {
      let { email } = data;
     if (undergrad){
       email = undergrad.email;
        // console.log(email);
      const {data} = await axios.post('/tutorLogin', {
         email
       });
      //  console.log(data);

      //If user is not a tutor, redirect to tutor register page
      if(!data){
        navigate('/tutorRegister');
       } else {
         navigate('/tutorDashboard');
     //   Do the local storage thing here
      }
    }
  } catch (error) {
    console.log(error);
  }
  };

  const logoutUser = async () => {
    try {
      await axios.get('/logout');
      toast.success('Logout Successful');
      localStorage.removeItem('undergrad');
      navigate('/login');
      window.location.reload();
    } catch (error) {
      toast.error('An error occurred. Please try again');
    }
  };

  return (
    <div className='max-auto mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8 text-white bg-NavBlue'>
      <div>
        <img src={logo} alt ='logo' className='h-11 w-auto object-contain'/>
        <p className='py-4'>Build connections with your peers 
and fellow graduates across the nation with CampusKuppi and start learning/tutoring.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Quick Links</h6>
        <ul >
            <li className='py-2 text-sm'>
              <Link to='/'>Home</Link>
            </li>
            <li className='py-2 text-sm'>
              <Link to='/about'>AboutUs</Link>
            </li>
            <li className='py-2 text-sm'>
              <Link>Sessions</Link> 
            </li>
            <li className='py-2 text-sm'>
              <Link to='/tutors'>Tutors</Link>
            </li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'></h6>
        <ul>
            <li className='py-2 text-sm'></li>
            <li className='py-2 text-sm'></li>
            <li className='py-2 text-sm'>
              <Link to='/questionBank'>Question Bank</Link> 
            </li>
            <li className='py-2 text-sm'>
                <Link to='/community'> Community Space </Link> 
            </li>
            
            {auth ? (
              <>
              
                <li className='py-2 text-sm'>
                  <Link to='/dashboard'>My account</Link> 
                </li>
                <li>
                  <button onClick={handleTutorLogin} className='py-2 text-sm'>
                    Switch to Tutor
                  </button>
                </li>

                <li>
                  <button
                    onClick={logoutUser}
                    className='py-2 text-sm'
                  >
                    Logout
                  </button>
              </li>
                
              </>
            ) : (
              <>
                <li className='py-2 text-sm'>
                  <Link to='/login'>Join Us</Link> 
                </li>
              </>
            )}
        </ul>
    </div>
  
    <div>
        <h6 className='font-medium text-gray-400'>Contact us </h6>
        <ul>
            <li className='py-2 text-sm'>+94 XXXX XXX</li>
            <li className='py-2 text-sm'>
              <Link to='mailto:undergraduplift@gmail.com'> undergraduplift@gmail.com </Link> 
            </li>
            <li className='py-2 text-sm'>
              23/4, addresslineone,
              addressline02
            </li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;