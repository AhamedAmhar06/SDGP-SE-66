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
    email: '',
    code: '',
  })

  const verifyUser = async (e) => {
    e.preventDefault()

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

          <form onSubmit={verifyUser} className="flex flex-col gap-4">
            <input 
              className="p-2 mt-8 rounded-xl border" 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={data.email}
              onChange={(e) => setData({...data, email: e.target.value})}
            />

            <button type='submit' className="py-2 text-white duration-300 bg-NavBlue rounded-xl hover:scale-105">Confirm Email</button>

            <br />
            <div className="relative">
              <input 
                className="p-2 rounded-xl border w-full" 
                type="password" 
                name="password" 
                placeholder="OTP Code" 
                value={data.code}
                onChange={(e) => setData({...data, code: e.target.value})}
              />

            </div>

            <button type='submit' className="py-2 text-white duration-300 bg-NavBlue rounded-xl hover:scale-105">Verify Code</button>
            
          </form>

        </div>

        
      </div>
    </section>
  );
}
