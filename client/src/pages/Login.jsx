import { useContext, useState, useEffect } from "react";
import { UndergradContext } from "../context/undergradContext";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import login from'../Assets/images/loginr.png'
import { FaEyeSlash, FaEye } from "react-icons/fa";

function Login  ()  {

  const navigate = useNavigate();
  const { undergrad } = useContext(UndergradContext);
  const [ undergradLoaded, setUndergradLoaded ] = useState(false);

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)

  const loginUser = async (e) => {
    e.preventDefault()
    const { email, password } = data
    try {
      const {data} = await axios.post('/login', {
        email,
        password
      })

      if(data.error) {
        toast.error(data.error)
      } else {
        //If the login is successful
        setData({})
        toast.success('Login Successfull. Welcome!')
        localStorage.setItem('undergrad', 'true')
        navigate('/dashboard')
        window.location.reload();
      }
    } catch (error) {
      
    }

  }

  //To check if the user is already logged in
  useEffect(() => {
    const fetchUndergrad = async () => {
        try {
            if(undergrad){
                setUndergradLoaded(true);
            } 
        } catch (error) {
            console.error(error);
        }
    };
        fetchUndergrad();
  });

  return (
    <div>
      { !undergradLoaded ? (

        <section className="flex items-center justify-center min-h-screen bg-gray-50">


          {/* login container */}
          <div className="flex items-center max-w-3xl p-5 bg-gray-100 shadow-lg rounded-2xl">
            {/* form */}
            <div className="px-8 md:w-1/2 md:px-16">
              <h2 className="text-2xl font-bold text-NavBlue">Login</h2>
              <p className="mt-4 text-xs text-NavBlue">If you are already a member, easily log in</p>

              <form onSubmit={loginUser} className="flex flex-col gap-4">
                <input 
                  className="p-2 mt-8 rounded-xl border" 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={data.email}
                  onChange={(e) => setData({...data, email: e.target.value})}
                />
                <div className="flex relative">
                  <input 
                    className="p-2 rounded-xl border w-full" 
                    type={showPassword ? "text" : "password"} 
                    name="password" 
                    placeholder="Password" 
                    value={data.password}
                    onChange={(e) => setData({...data, password: e.target.value})}
                  />

                {showPassword ? (
                  <FaEye 
                    className='absolute top-1/2 right-2 transform -translate-y-1/2' 
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEyeSlash 
                    className='absolute top-1/2 right-2 transform -translate-y-1/2'
                    onClick={() => setShowPassword(!showPassword)} 
                  />
                  
                )}
                
                </div>
                <button type='submit' className="py-2 text-white duration-300 bg-NavBlue rounded-xl hover:scale-105">Login</button>
              </form>

              <div className="grid items-center grid-cols-3 mt-6 text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-sm text-center">OR</p>
                <hr className="border-gray-400" />
              </div>

              {/*
              
              -----Login With Google-----
              

              <button className="flex items-center justify-center w-full py-2 mt-5 text-sm duration-300 bg-white border rounded-xl hover:scale-105 text-NavBlue">
                <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                Login with Google
              </button> */}

              <div className="py-4 mt-5 text-xs border-b border-NavBlue text-NavBlue">
                <Link to="/forgetpassword">Forgot your password?</Link>
              </div>

              <div className="flex items-center justify-between mt-3 text-xs text-NavBlue">
                <p>Don't have an account?</p>
                <Link to="/register">
                  <button className="px-5 py-2 duration-300 bg-white border rounded-xl hover:scale-110" >Register</button>
                </Link>
                {/* <button className="px-5 py-2 duration-300 bg-white border rounded-xl hover:scale-110" onClick={(e) => {navigate('./register')}}>
                  Register</button> */}
              </div>
            </div>

            {/* image */}

            <div className="hidden w-1/2 md:block">
              <img className="border rounded-2xl border-NavBlue" src={login} />
            </div>
          </div>
        </section>
      ) : (null)}
    </div>
  );
}

export default Login;
