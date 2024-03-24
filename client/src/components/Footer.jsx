import React, { useState, useEffect, useContext } from 'react';
import logo from'../Assets/images/white logo 1.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
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
     
    <div className='grid gap-2 px-4 py-10 mx-auto text-white max-auto lg:grid-cols-4 bg-NavBlue'>
      <div>
       <img src={logo} alt='logo' className='object-contain h-24 w-60' />

          <p className='text-sm '>Build connections with your peers <br />and fellow graduates across the nation <br /> with CampusKuppi and start learning/tutoring. </p>
          <div className='flex justify-between md:w-[35%] my-6 ml-7 '>
              <FaSquareFacebook size={20}  />
              <FaInstagram  size={20}  />
              <FaWhatsapp size={20}  />
              
              
          </div>
        </div>
      
<div className='flex footer-columns'>
  
    <div className="mr-8">
      <h6 className='text-xl font-bold text-white-400 '>Quick Links</h6>
        <ul>
            <li className='py-2 mt-5 text-sm'>
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
    <div className="mr-10">
        <ul>
            <li className='py-2 text-sm mt-11'>
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


    

     
</div>


<div className='flex footer-columns'>
  
    <div className="mr-10">
      <h6 className='text-xl font-bold text-white-400 '>Contact Us</h6>
        <ul>
            <li className='py-2 mt-5 text-md'>
    <span className="inline-block mr-2"><FaPhoneVolume /></span>
    <a href="tel:0777901155">0777901155</a>
</li>
            <li className='py-5 text-md'>
    <span className="inline-block mr-2"><IoMdMail /></span>
    <a href="mailto:undergraduplift@gmail.com">undergraduplift@gmail.com</a>
</li>
           <li className='py-5 text-md'>
    <span className="inline-block mr-2"><ImLocation /></span>
    <a href="https://maps.app.goo.gl/HVKgPZxhgtJZVEfj9" target="_blank" rel="noopener noreferrer">
        Informatics Institute of Technology (IIT) 
    </a>
</li>
           
        </ul>
    </div>
   


        
</div>

<div className='flex footer-columns'>
  
    <div className="mr-10">
      


  {auth ? (

              <>
                
        <button
              onClick={logoutUser}
              className='py-3 mt-20 font-bold text-black duration-300 bg-white border px-7 rounded-3xl hover:scale-110'
            >
              Logout
            </button>
              </>
              
            ) : (
              <>
                <h6 className='text-xl font-bold text-white-400'>JOIN US TODAY</h6>
        <Link to='/register'>
            <button className="py-3 mt-4 font-bold text-black duration-300 bg-white border px-7 rounded-3xl hover:scale-110">Sign Up</button>
        </Link>
        <hr className="my-4 mt-8 border-gray-400" />
       <div className='flex items-center justify-between'>
    <h3 className='mt-4 text-xl text-gray-400 '>Signed up already?</h3>
    <Link to='/login'>
    <button className="w-full px-5 py-2 mt-3 ml-4 font-bold text-white duration-300 bg-transparent border border-white rounded-3xl hover:scale-110">Log in</button>
</Link>
</div>
              </>
            )} 







</div>       
</div>










    </div>
  );
};

export default Footer;