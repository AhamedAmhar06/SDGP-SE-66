import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Footer from './components/Footer';
import Register from './pages/Register';
import AboutUs from './components/AboutUs'; 
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App () {

  return(
    
    <div className='bg-background'>
      
      <Navbar/>
      {/* <Login/>  */}
      <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
     <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/about' element={<AboutUs/>} />
     </Routes>

      <Footer/>
    </div>
    
  )
}

export default App;
