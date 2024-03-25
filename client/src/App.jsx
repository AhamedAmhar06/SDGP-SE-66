import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Footer from './components/Footer';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs'; 
import axios from 'axios';
import Home from './pages/Home';

//Auth
import ForgetPassword from './pages/ForgetPassword';
import EditProfile from './pages/EditProfile';
import Dashboard from './pages/Dashboard';

//questionbank
import QuestionBank from './pages/Question/QuestionBank';
import QuestionList from './pages/Question/QuestionList';
import QuizTaker from './pages/Question/QuizTaker';
import OptionSelector from './pages/Question/OptionSelector';

//Tutor
import TutorRegister from './pages/Tutoring/TutorRegister';
import TutorDashboard from './pages/TutorDashboard';
import Tutors from './pages/Tutors';
import TutorDetails from './pages/TutorDetails';
import CreateCourse from './pages/Tutoring/CreateCourse';

import Notifications from './pages/Notifications';

import { Toaster } from 'react-hot-toast';
import { UndergradContextProvider } from './context/undergradContext';
import Error404page from './components/Error404page';


//forum
import Forum from './pages/forum/Forum';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App () {

  return(
    <UndergradContextProvider>
      <div className='bg-background'>
        
        <Navbar/>
        <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
      <Routes>
          <Route path='*' element={<Error404page/>} />
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/about' element={<AboutUs/>} />


          <Route path='/dashboard' element={<Dashboard/>} />
          
          
          <Route path='/questionlist' element={<QuestionList/>} />
          <Route path='/questionuploader' element={<QuestionBank/>} />
          <Route path='/questionBank' element={<QuizTaker/>}/>


          <Route path='/forum' element={<Forum/>} />

          <Route path='/forgetpassword' element={<ForgetPassword/>} />
          <Route path='/tutorRegister' element={<TutorRegister/>} />
          <Route path='/tutorDashboard' element={<TutorDashboard/>} />
          <Route path='/tutors' element={<Tutors/>} />
          <Route path='/tutors/:id' element={<TutorDetails />} />
          <Route path='/createCourse' element={<CreateCourse/>} />

          <Route path='/optionSelector' element={<OptionSelector/>} />
          <Route path='/notifications' element={<Notifications/>} />
          <Route path='/editProfile' element={<EditProfile/>} />
          
      </Routes>

        <Footer/>
      </div>
    </UndergradContextProvider>
    
  )
}

export default App;
