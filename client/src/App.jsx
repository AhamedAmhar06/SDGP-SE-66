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
    


    <div className='container'>
      <p>All Posts</p>
      <table class = "table">
        <thead>
          <tr>
            <th scope = "col">#</th>
            <th scope = "col">Topic</th>
            <th scope = "col">Sescription </th>
            <th scope = "col">Post Category </th>
            <th scope = "col">Action </th>
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((posts,index)=>(
            <tr>
              <th scope = "row">{index+1}</th>
              <td>{posts.topic}</td>
              <td>{posts.description}</td>
              <td>{posts.postCategory}</td>
              <td>
                <a className='btn btn-warning'href ="#">
                  <i className='fas fa-edit'></i>&nbsp;Edit
                </a>
                <a className='btn btn-danger'href ="#">
                  <i className='fas fa-trash-alt'></i>&nbsp;Delete
                </a>
              </td>
          
          
            </tr>
          
          ))}
          
        </tbody>
        
      </table>
        <thead></thead>
      
    </div>
        )







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
    {/* </UndergradContextProvider>
    
  ) */}




export default App;
