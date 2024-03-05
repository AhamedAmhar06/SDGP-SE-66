import { useState, useEffect } from "react";
import registerperson from "../Assets/images/registerperson.png";
import {toast} from 'react-hot-toast'
import axios from "axios";
import { useNavigate } from "react-router-dom"

export default function TutorRegister() {
  const navigate = useNavigate();

  //UseState for form data
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    university: "",
    studyLevel: "",
    password: "",
    confirmPassword: "",
  });

  //UseState for OTP
  const [otpData, setOtpData] = useState({
    email: "",
    serverOTP: "",
    userOTP: "",
    emailVerified: false,
    otpGenerated: false,
    verified: false
  });

  //Register user
  const registerUser = async (e) => {
    e.preventDefault();
    const { password } = formData;
    const { email, emailVerified } = otpData;
    try {
      console.log(email, password);

      const {data} = await axios.post('/tutorRegister', {
        email,
        password
      })

      if(!emailVerified) {
        return toast.error('Email not verified')
      }
      if(data.error) {
        toast.error(data.error)
      } else {
        toast.success('Registered successfully')
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Generate OTP code
  const generateOTP = async (e) => {
    e.preventDefault();
    const {email, serverOTP} = otpData;
    // const { email } = formData;

    //Check if email and names are entered
    if ( !email ) {
      return toast.error('Email is required')
    }

    console.log("OTP generated:", serverOTP);
    try {
      const {data} = await axios.post('/tutorRegisterOTP', {
        email,
        serverOTP
      });
      
      if(data.error) {
        toast.error(data.error)
      } else {
        setOtpData({...otpData, emailVerified: true});
        toast.success(data.message)
      }
    } catch (error) {
        console.log(error);
    }
  }
    

  const verifyOTP = async (e) => {
    e.preventDefault();
    console.log('OTP:', otpData);
    const {serverOTP, userOTP, verified} = otpData;
    if(!otpData.serverOTP) {
      return toast.error('OTP not generated')
    }
    if (serverOTP === userOTP) {
      toast.success('Email verified')
      setOtpData({...otpData, verified: true});
    } else {
      toast.error('Incorrect OTP')
    }
  }

  useEffect(() => {
    if (!otpData.serverOTP) {
      
      const serverOTP = `${Math.floor(100000 + Math.random() * 900000)}`;

      setOtpData({...otpData, serverOTP: serverOTP, otpGenerated: true});
      console.log("OTP generated:", otpData.serverOTP);
    }
  })

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* Register container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* Image */}
        <div className="md:w-1/2 hidden md:block">
          <img className="rounded-2xl border border-NavBlue border-4" src={registerperson} alt="Register Person" />
        </div>

        {/* Form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-NavBlue">Tutor Registration</h2>
          {/* <p className="text-xs mt-4 text-NavBlue">Registered already? </p> */}
          {/* Login Button */}
          {/* <button className="text-NavBlue" onClick={(e) => navigate('/login')}>
            Login
          </button> */}

          <form className="flex flex-col gap-4">
            <br />

            <label>
              Choose preferred subjects

              <select name="" id="">
                <option value="">Select Option</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Javascript">JavaScript</option>
                <option value="React">React</option>
                <option value="React_native">React Native</option>
                <option value="Kotlin">Kotlin</option>
                <option value=""></option>
              </select>

            </label>
            
            <input
              className="p-2 rounded-xl border"
              type="email"
              id="email"
              name="email"
              value={otpData.email}
              onChange={(e) => {
                setFormData({...formData, email: e.target.value})
                setOtpData({...otpData, email: e.target.value})
              }}
              placeholder="Email" 
              disabled={otpData.emailVerified}
            />

            <button className={`bg-NavBlue rounded-xl text-white py-2 hover:scale-105 duration-300 ${otpData.emailVerified && "bg-gray-300 pointer-events-none"}`}
              disabled={otpData.emailVerified}
             onClick={generateOTP}>
              Generate OTP
            </button>

            <input
              className="p-2 rounded-xl border"
              type="text"
              id="userOTP"
              name="userOTP"
              value={otpData.userOTP}
              onChange={(e) => {
                setOtpData({...otpData, userOTP: e.target.value})
              }}
              placeholder="OTP" 
              disabled={!otpData.emailVerified || otpData.verified}
            />

            <button className={`bg-NavBlue rounded-xl text-white py-2 hover:scale-105 duration-300 ${otpData.verified && "bg-gray-300 pointer-events-none"}`}
              onClick={verifyOTP}>
              Verify OTP
            </button>

            

            <input
              className="p-2 rounded-xl border"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="Password"
            />

          <p className="text-xs mt-4 text-NavBlue">Forgot password</p>
          {/* Login Button */}
          <button 
          className="text-NavBlue" 
          onClick={(e) => navigate('/forgetpassword')}>
            Reset
          </button>
          
           {/* Register Button */}
           <button className="bg-NavBlue rounded-xl text-white py-2 hover:scale-105 duration-300" type="submit" 
           onClick={registerUser}>
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
