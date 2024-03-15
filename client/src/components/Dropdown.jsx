import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UndergradContext } from '../context/undergradContext';

function Dropdown({ onClose }) {
  const navigate = useNavigate();
  

  const logoutUser = async () => {
    try {
      await axios.get('/logout');
      toast.success('Logout Successful');
      localStorage.removeItem('undergrad');
      // onClose(); 
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
          console.log(email);
        const {data} = await axios.post('/tutorLogin', {
           email
         });
         console.log(data);

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

  return (
    <div className='absolute flex flex-col items-center w-32 p-4 border border-t-4 border-b-4 border-NavBlue bg-background top-16 right-6 rounded-2xl'>
      <div className='absolute top-0 w-4 h-4 transform rotate-45 -translate-y-2 border-t border-l right-7 bg-background border-NavBlue'></div>
      <div className='flex flex-col gap-4'>
        <ul>
          <li>
            <Link to={'/dashboard'} className='text-sm text-NavBlue'>
              Dashboard
            </Link>
          </li>
          <li>
            <button onClick={handleTutorLogin} className='mt-4 text-sm text-NavBlue'>
              Switch to Tutor
            </button>
          </li>
          <li>
            <button
              onClick={logoutUser}
              className='hidden h-10 px-6 mt-4 text-sm text-white rounded bg-NavBlue hover:bg-blue-700 hover:text-primary md:block'
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;