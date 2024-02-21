import React from 'react'
import logo from'../Assets/images/Logo-N.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function MobileNavbar ({ setIsMenuOpen}) {

    const [auth, setAuth] = useState(false);

    const logoutUser = async () => {
        try{
          await axios.get('/logout');
          toast.success('Logout Successful');
          localStorage.removeItem('undergrad');
          window.location.reload();
        } catch (error) {
          toast.error('An error occurred. Please try again');
        }
      }

      useEffect(() => {
        const authStatus = localStorage.getItem('undergrad');
            if(authStatus === 'true'){
              setAuth(true);
            }
          });

  return (
    <div className='w-screen fixed top-0 z-20'>
      <div className="w-1/2 h-screen flex flex-col p-8 bg-background ">
        <img src ={logo} alt="logo" className="w-16 object-contain mb-8"/>

        <ul>
            <li className="mb-5">
                <Link to='/' className='menu-item'> Home </Link>
            </li>
            <li className="mb-5">
                <a className="menu-item">About Us</a>
            </li>
            <li className="mb-5">
                <a className="menu-item">Tutors</a>
            </li>
            <li className="mb-5">
                <a className="menu-item">Join the community</a>
            </li>
            <li className="mb-5">
                <a className="menu-item">Question Bank</a>
            </li>
            

            {auth ? (
              <>
              <li>
                  <Link to={'/dashboard'} className='menu-item'>Dashboard</Link>
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
    </div>
    <div onClick={()=>{
        setIsMenuOpen(false)
    }} className="w-screen h-screen bg-overlay fixed top-0 -z-10" />
    </div>
  );
};

export default MobileNavbar;
