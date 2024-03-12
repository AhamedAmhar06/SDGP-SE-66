import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Footer from './components/Footer';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs'; 
import axios from 'axios';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ForgetPassword from './pages/ForgetPassword';
import TutorRegister from './pages/TutorRegister';
import TutorDashboard from './pages/TutorDashboard';
import Tutors from './pages/Tutors';
import TutorDetails from './pages/TutorDetails';
import { Toaster } from 'react-hot-toast';
import { UndergradContextProvider } from './context/undergradContext';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App () {

  return(
    <UndergradContextProvider>
      <div className='bg-background'>
        
        <Navbar/>
        <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
      <Routes>
          <Route path='*' element={<h1>Not Found</h1>} />
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/forgetpassword' element={<ForgetPassword/>} />
          <Route path='/tutorRegister' element={<TutorRegister/>} />
          <Route path='/tutorDashboard' element={<TutorDashboard/>} />
          <Route path='/tutors' element={<Tutors/>} />
          <Route path='/tutors/:id' element={<TutorDetails />} />
      </Routes>

        <Footer/>
      </div>
    </UndergradContextProvider>
    
  )
}

export default App;
