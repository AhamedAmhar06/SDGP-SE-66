import { useState } from "react";
import registerperson from "../Assets/images/registerperson.png";
import {toast} from 'react-hot-toast'
import axios from "axios";
import { useNavigate } from "react-router-dom"

function Register() {
  
  const navigate = useNavigate()

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
    userEmail: "",
    serverOTP: "",
    userOTP: "",
    otpGenerated: false,
    verified: false
  });

  //Register user
  const registerUser = async (e) => {
    e.preventDefault();
    const { fName, lName, email, university, studyLevel, password, confirmPassword } = formData;
    const { verified } = otpData;
    try {
      const {data} = await axios.post('/register', {
        fName,
        lName,
        email,
        university,
        studyLevel,
        password,
        confirmPassword
      })

      if(!verified) {
        return toast.error('Email not verified')
      }
      if(data.error) {
        toast.error(data.error)
      } else {
        setFormData({})
        toast.success('Login Successfull. Welcome!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error);
    }
    
    // console.log("Form submitted:", formData);
  };

  //Generate OTP code
  const generateOTP = async (e) => {
    e.preventDefault();
    const {userEmail, serverOTP} = otpData;
    const { fName, lName, email } = formData;

    //Check if email and names are entered
    if (!fName || !lName || !email) {
      return toast.error('First Name, Last Name and Email are required')
    }
    // Check if serverOTP is already generated
    if (!otpData.serverOTP) {
      const serverOTP = `${Math.floor(100000 + Math.random() * 900000)}`;
      setOtpData({...otpData, serverOTP: serverOTP, otpGenerated: true});
      console.log("Email:", userEmail);
        console.log("OTP generated:", serverOTP);
    
      try {
        const {data} = await axios.post('/otpMail', {
          userEmail,
          serverOTP,
          fName,
          lName
        });
        
        if(data.error) {
          toast.error(data.error)
        } else {
          toast.success('OTP sent to your email')
        }
      } catch (error) {
          console.log(error);
      }
    }}
    

  const verifyOTP = async (e) => {
    e.preventDefault();
    const {serverOTP, userOTP, verified} = otpData;
    if(!serverOTP) {
      return toast.error('OTP not requested')
    }
    if (serverOTP === userOTP) {
      toast.success('Email verified')
      setOtpData({...otpData, verified: true});
    } else {
      toast.error('Email not verified')
    }
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50">
      {/* Register container */}
      <div className="flex items-center max-w-3xl p-5 bg-gray-100 shadow-lg rounded-2xl">
        {/* Image */}
        <div className="hidden md:w-1/2 md:block">
          <img className="border-4 rounded-2xl border-NavBlue" src={registerperson} alt="Register Person" />
        </div>

        {/* Form */}
        <div className="px-8 md:w-1/2 md:px-16">
          <h2 className="text-2xl font-bold text-NavBlue">Register</h2>
          <p className="mt-4 text-xs text-NavBlue">Registered already? </p>
          {/* Login Button */}
          <button className="text-NavBlue" onClick={(e) => navigate('/login')}>
            Login
          </button>

          <form className="flex flex-col gap-4">
            <input
              className="p-2 border rounded-xl"
              type="text"
              id="fName"
              name="fName"
              value={formData.fName}
              onChange={(e) => setFormData({...formData, fName: e.target.value})}
              placeholder="First Name"
              // required
            />
            <input
              className="p-2 border rounded-xl"
              type="text"
              id="lName"
              name="lName"
              value={formData.lName}
              onChange={(e) => setFormData({...formData, lName: e.target.value})}
              placeholder="Last Name"
              // required
            />
            <input
              className="p-2 border rounded-xl"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({...formData, email: e.target.value})
                setOtpData({...otpData, userEmail: e.target.value})
              }}
              placeholder="Email" 
              disabled={otpData.otpGenerated}
            />

            <button className={`bg-NavBlue rounded-xl text-white py-2 hover:scale-105 duration-300 ${otpData.otpGenerated && "bg-gray-300 pointer-events-none"}`}
              disabled={otpData.otpGenerated}
             onClick={generateOTP}>
              Generate OTP
            </button>

            <input
              className="p-2 border rounded-xl"
              type="text"
              id="userOTP"
              name="userOTP"
              value={otpData.userOTP}
              onChange={(e) => {
                setOtpData({...otpData, userOTP: e.target.value})
              }}
              placeholder="OTP" 
              disabled={otpData.verified}
            />

            <button className={`bg-NavBlue rounded-xl text-white py-2 hover:scale-105 duration-300 ${otpData.verified && "bg-gray-300 pointer-events-none"}`}
              onClick={verifyOTP}>
              Verify OTP
            </button>

            <input
              className="p-2 border rounded-xl"
              type="text"
              id="university"
              name="university"
              value={formData.university}
              onChange={(e) => setFormData({...formData, university: e.target.value})}
              placeholder="University"
              // required
            />
            <input
              className="p-2 border rounded-xl"
              type="text"
              id="studyLevel"
              name="studyLevel"
              value={formData.studyLevel}
              onChange={(e) => setFormData({...formData, studyLevel: e.target.value})}
              placeholder="Level of Study"
              // required
            />
            <input
              className="p-2 border rounded-xl"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="Password"
            />
            <input
              className="p-2 border rounded-xl"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              placeholder="Confirm Password"
            />
          
           {/* Register Button */}
           <button className="py-2 text-white duration-300 bg-NavBlue rounded-xl hover:scale-105" type="submit" onClick={registerUser}>
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;