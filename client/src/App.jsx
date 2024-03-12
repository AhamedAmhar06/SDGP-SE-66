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
import { Toaster } from 'react-hot-toast';
import { UndergradContextProvider } from './context/undergradContext';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;


function App () {

    constructor(props) 
      super(props);
  
      this.state = {
        posts: [],
      };
    }
  
    componentDidMount() 
      this.retrievePosts();
    
  
    // Use axios to retrieve data from the backend. This is the code for the GET request (url/endpoint).
    retrievePosts() 
      axios.get('http://localhost:8000/posts')
        .then((res) => {
          if (res.data.success) {
            this.setState({
              posts: res.data.existingPosts,
            });
    
            console.log(this.state.posts);
          }
        })
        .catch((error) => {
          console.error('Error retrieving posts:', error.message);
        });
    
    
  
    render()
  

  return(
    <UndergradContextProvider>
      <div className='bg-background'>
        
        <Navbar/>
        <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          {/* <Route path='/about' element={<AboutUs/>} /> */}
          <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>

        <Footer/>
      </div>
    </UndergradContextProvider>
    
  )




export default App;
