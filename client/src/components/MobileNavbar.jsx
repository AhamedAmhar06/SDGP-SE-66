import React, { useState, useEffect, useContext } from 'react';
import logo from '../Assets/images/Logo-N.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { IoClose } from "react-icons/io5";
import { UndergradContext } from '../context/undergradContext';

function MobileNavbar({ setIsMenuOpen }) {
    const [auth, setAuth] = useState(false);
    const {undergrad} = useContext(UndergradContext);
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
    });

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

    useEffect(() => {
        const authStatus = localStorage.getItem('undergrad');
        if (authStatus === 'true') {
            setAuth(true);
        }
    });

    return (
        <div className='fixed top-0 right-0 z-20 w-1/2 h-screen'>
            <div className="flex flex-col w-full h-screen p-8 bg-background ">
                <button onClick={() => setIsMenuOpen(false)} className="absolute text-4xl text-NavBlue top-4 right-4">
                   <IoClose />
                </button>

                <ul>
                    <li className='menu-item mb-5'>
                        <Link to='/'> Home </Link>
                    </li>
                    <li className='menu-item mb-5'>
                        <Link to='/about'> About Us </Link>
                    </li>
                    <li className='menu-item mb-5'>
                        <Link to='/tutors'> Tutors </Link>
                    </li>
                    <li className='menu-item mb-5'>
                        <Link to='/community'> Community Space </Link>
                    </li>


                    <li className='menu-item mb-5'>
                        <Link to='/questionBank'> Question Bank </Link>
                    </li>

                    {auth ? (
                        <>
                            <li className="mb-5 menu-item">
                                <Link to={'/dashboard'} >Dashboard</Link>
                            </li>
                            <li className="mb-5 menu-item">
                            <button onClick={handleTutorLogin}>
                                Switch to Tutor
                            </button>
                            </li>

                            <li className='mb-5 menu-item'>
                                <Link to='/notifications'>Notifications</Link>
                            </li>

                            <li>
                                <button onClick={logoutUser} className="h-10 px-6 mt-5 text-sm text-white rounded bg-NavBlue hover:bg-blue-700 hover:text-primary">Logout</button>
                            </li>
                            
                        </>
                    ) : (
                        <>
                            <Link to={'/login'}>
                                <button className="h-10 px-6 mt-5 text-sm text-white rounded bg-NavBlue hover:bg-blue-700 hover:text-primary">Join Us</button>
                            </Link>
                        </>
                    )}
                </ul>

                
                
            </div>
            <div onClick={() => setIsMenuOpen(false)} className="fixed top-0 w-screen h-screen bg-overlay -z-10" />
        </div>
    );
};

export default MobileNavbar;