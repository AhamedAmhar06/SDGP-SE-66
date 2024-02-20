import React from 'react'
import logo from'../Assets/images/Logo-N.png'
import { Link } from 'react-router-dom'

const MobileNavbar = ({ setIsMenuOpen}) => {
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
            <li>
                
            </li>
        </ul>
        <Link to={'/login'}>
              <button className="hidden h-10 px-6 text-sm text-white rounded bg-NavBlue hover:bg-blue-700 hover:text-primary md:block">Logout</button>
        </Link>
        
        <Link to={'/login'}>
            <button  className="h-10 bg-NavBlue text-white text-sm px-2 rounded hover:bg-blue-700 hover:text-white md:block" >Join Us</button>
        </Link>

    </div>
    <div onClick={()=>{
        setIsMenuOpen(false)
    }} className="w-screen h-screen bg-overlay fixed top-0 -z-10" />
    </div>
  );
};

export default MobileNavbar;
