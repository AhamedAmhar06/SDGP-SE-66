import React, { useState, useEffect } from 'react';
import logo from '../Assets/images/Logo-N.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { IoClose } from "react-icons/io5";

function MobileNavbar({ setIsMenuOpen }) {
    const [auth, setAuth] = useState(false);

    const logoutUser = async () => {
        try {
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

                    <li className="mb-5">
                        <a className="menu-item">Tutors</a>
                    </li>

                    {auth ? (
                        <>
                            <li className="mb-5">
                                <Link to={'/dashboard'} className='menu-item'>Dashboard</Link>
                            </li>
                            <li className="mb-5">
                                <a className="menu-item">Switch to Tutor</a>
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