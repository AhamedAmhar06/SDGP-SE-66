import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import {toast} from 'react-hot-toast'
import login from'../Assets/images/loginr.png'

export default function ForgetPassword() {
    
    const navigate = useNavigate();

  const [data, setData] = useState({
    userEmail: '',
    serverOTP: '',
    otpGenerated: false,
    userOTP: '',
    password: '',
    confirmPassword: '',
    verfied: false
  });

  const verifyUser = async (e) => {
    e.preventDefault();
    const { userEmail, serverOTP } = data;

    if(!userEmail){
      return toast.error('Email is required')
    }

    if(!data.serverOTP){
      const serverOTP = `${Math.floor(100000 + Math.random() * 900000)}`;
      setData({...data, serverOTP: serverOTP, otpGenerated: true});
      console.log("Email:", userEmail);
      console.log("OTP generated:", serverOTP);
    
      try {
        const {data} = await axios.post('/sendCode', {
          userEmail,
          serverOTP,
        });
        
        if(data.error) {
          toast.error(data.error)
        } else {
          toast.success('OTP sent to your email')
        }
      } catch (error) {
          console.log(error);
      }
    }
  }

  const verifyOTP = async (e) => {
    e.preventDefault();
    const { userOTP, serverOTP, verfied } = data;
    if(!serverOTP) {
      return toast.error('OTP not requested')
    }
    if (serverOTP === userOTP) {
      toast.success('Email verified')
      setData({...data, verfied: true});
    } else {
      toast.error('Incorrect OTP')
    }
  }

  const resetPassword = async (e) => {
    e.preventDefault();
    const { userEmail, verfied, password, confirmPassword } = data;
    if(!verfied){
      return toast.error('Email not verified')
    }
    if(!password || !confirmPassword){
      return toast.error('Password and Confirm Password are required')
    }
    if(password !== confirmPassword){
      return toast.error('Passwords do not match')
    } 
    try {
      const {data} = await axios.post('/resetPassword', {
        userEmail,
        password
      });
      if(data.error) {
        toast.error(data.error)
      } else {
        toast.success('Password reset successfully')
        navigate('/login')
      }
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50">


      {/* login container */}
       <div className="flex items-center max-w-3xl p-5 bg-gray-100 shadow-lg rounded-2xl">

        {/* image */}

        <div className="hidden w-1/2 md:block">
          <img className="border rounded-2xl border-NavBlue" src={login} />
        </div>
        
        {/* form */}
        <div className="px-8 md:w-1/2 md:px-16">
          <h2 className="text-2xl font-bold text-NavBlue">Forgot Password</h2>
          <p className="mt-4 text-xs text-NavBlue">Complete following steps to recover your password</p>

          <form className="flex flex-col gap-4">
            <input 
              className="p-2 mt-8 rounded-xl border" 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={data.userEmail}
              onChange={(e) => setData({...data, userEmail: e.target.value})}
              disabled={data.otpGenerated}
            />

            <button className={`bg-NavBlue rounded-xl text-white py-2 hover:scale-105 duration-300 ${data.otpGenerated && "bg-gray-300 pointer-events-none"}`}
            onClick={verifyUser}>
              Confirm Email</button>

            <div className="relative">
              <input 
                className="p-2 rounded-xl border w-full" 
                type="text" 
                name="OTP_Code" 
                placeholder="OTP Code" 
                value={data.userOTP}
                onChange={(e) => setData({...data, userOTP: e.target.value})}
                disabled={data.verfied}
              />

            </div>

            <button className={`bg-NavBlue rounded-xl text-white py-2 hover:scale-105 duration-300 ${data.verfied && "bg-gray-300 pointer-events-none"}`}
              onClick={verifyOTP}>
              Verify Code
            </button>

            <label className="py-2 text-NavBlue">Enter New Password</label>
            <input
              className="p-2 rounded-xl border"
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={(e) => setData({...data, password: e.target.value})}
              placeholder="Password"
            />

            <input
              className="p-2 rounded-xl border"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={(e) => setData({...data, confirmPassword: e.target.value})}
              placeholder="Confirm Password"
            />

            <button
              onClick={resetPassword}
              className="py-2 text-white duration-300 bg-NavBlue rounded-xl hover:scale-105">Confirm</button>

          </form>

        </div>

        
      </div>
    </section>
  );
}
