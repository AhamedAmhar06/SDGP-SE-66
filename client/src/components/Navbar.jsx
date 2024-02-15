import React, { useState } from 'react'
import logo from'../Assets/images/Logo-N.png'
import{RiMenu4Line,RiCloseFill}from "react-icons/ri";
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
        const [isMenuOpen ,setIsMenuOpen]=useState(true);

const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen);
};



  return (
    <>
     {isMenuOpen && <MobileNavbar setIsMenuOpen={setIsMenuOpen} />}
    <div className='bg-background sticky top-0 z-10 '>
      <nav className='max-w-screen-xl mx-auto py-4 px-6'>
        <div className='flex items-center justify-between'>
            <img src={logo} alt ='logo' className='h-11 w-auto object-contain'/>
            <ul className='hidden md:flex md:gap-14 '>
                <li>
                    <a className ="menu-item">Home</a>
                </li>
                <li>
                    <a className ="menu-item">About US</a>
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
            <button className="hidden h-10 bg-NavBlue text-white text-sm px-6 rounded hover:bg-blue-700 hover:text-primary md:block">Join Us</button>
            <button  onClick={()=>{setIsMenuOpen(true)}} className="w-11 h-11 bg-NavBlue text-2xl text-white flex items-center justify-center rounded-md:hidden z-50">
           {isMenuOpen?<RiCloseFill/> :<RiMenu4Line />}
           </button>
        </div>
      </nav>
    </div>
    </>
  );
};


export default Navbar;
