import React from 'react';
import logo from'../Assets/images/white logo 1.png'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
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
        <ul>
            <li className='py-2 text-sm'>Home</li>
            <li className='py-2 text-sm'>AboutUs</li>
            <li className='py-2 text-sm'>Sessions</li>
            <li className='py-2 text-sm'>Tutors</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'></h6>
        <ul>
            <li className='py-2 text-sm'></li>
            <li className='py-2 text-sm'></li>
            <li className='py-2 text-sm'>FAQ</li>
            <li className='py-2 text-sm'>Question Bank</li>
            <li className='py-2 text-sm'>Join the community </li>
            <li className='py-2 text-sm'>My account</li>
        </ul>
    </div>
  
    <div>
        <h6 className='font-medium text-gray-400'>Contact us </h6>
        <ul>
            <li className='py-2 text-sm'>+94 XXXX XXX</li>
            <li className='py-2 text-sm'>hello@campuskuppi.lk</li>
            <li className='py-2 text-sm'>23/4, addresslineone,
addressline02</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;