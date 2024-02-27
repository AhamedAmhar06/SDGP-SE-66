import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Footer from './components/Footer';
import Register from './pages/Register';
// import AboutUs from './components/AboutUs'; 
import axios from 'axios';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ForgetPassword from './pages/ForgetPassword';
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
          {/* <Route path='/about' element={<AboutUs/>} /> */}
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/forgetpassword' element={<ForgetPassword/>} />
          
      </Routes>

        <Footer/>
      </div>
    </UndergradContextProvider>
    
  )
}

export default App;
