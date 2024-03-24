import { useState, useEffect, useContext } from "react";
import registerperson from "../../Assets/images/registerperson.png";
import {toast} from 'react-hot-toast'
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { UndergradContext } from '../../context/undergradContext';
// import { TiDeleteOutline } from "react-icons/ti";

export default function TutorRegister() {

  const navigate = useNavigate();
  const { undergrad } = useContext(UndergradContext);
  const [ undergradLoaded, setUndergradLoaded ] = useState(false);

  //UseState for form data
  const [formData, setFormData] = useState({
    email: "",
    bio: "",
    password: "",
    price: ""
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

  //Selected Subjects
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  //Remove selected subjects
  const removeSubject = (subject) => {
    setSelectedSubjects(selectedSubjects.filter(item => item !== subject))
  }

  //Register user
  const registerUser = async (e) => {
    e.preventDefault();
    const { password, bio, price } = formData;
    const { email, emailVerified } = otpData;
    try {
      console.log(email, password);

      const {data} = await axios.post('/tutorRegister', {
        email,
        password,
        subjects: selectedSubjects,
        bio,

      })

      if(!emailVerified) {
        return toast.error('Email not verified')
      }
      if(data.error) {
        toast.error(data.error)
      } else {
        toast.success('Registered successfully')
        navigate('/tutorDashboard')
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
    }
    
    const fetchUndergrad = async () => {
      try {
          if(undergrad){
            setFormData({...formData,
              email: undergrad.email,
            })
            setOtpData({...otpData,
              email: undergrad.email
            })
              setUndergradLoaded(true);
          }
          
      } catch (error) {
          console.error(error);
      }
  };
  if(undergradLoaded === false) {
      fetchUndergrad();
  }
  })

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* Register container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* Image */}
        <div className="md:w-1/2 hidden md:block">
          <img className="rounded-2xl border-NavBlue border-4" src={registerperson} alt="Register Person" />
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
              Enter bio: &nbsp;
              <br /> 

              <textarea
                  className="p-2 rounded-xl border"
                  type="text"
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={(e) => {
                    const text = e.target.value;
                    const words = text.trim().split(/\s+/); // Split based on whitespace characters
                    if (words.length <= 50) {
                      setFormData({...formData, bio: text});
                    }
                  }}
                  placeholder="Bio"
                  style={{resize: "none"}}
                  rows="3" // Set the number of visible lines
                  cols="30" // Set the number of visible width
              />

            </label>
            <label>
              Choose preferred subjects&nbsp; : &nbsp;

              <select name="subjects" 
                id="subjects"
                // value={selectedSubjects}
                className="appearance-none rounded-xl pt-2 pb-2 pl-2 pr-2 border border-NavBlue"
                onChange={(e) => setSelectedSubjects([...selectedSubjects, e.target.value])}
              >
                <option value="">Select Option</option>
                <option value="Java" disabled={selectedSubjects.includes("Java")}>Java</option>
                <option value="Python" disabled={selectedSubjects.includes("Python")}>Python</option>
                <option value="HTML" disabled={selectedSubjects.includes("HTML")}>HTML</option>
                <option value="CSS" disabled={selectedSubjects.includes("CSS")}>CSS</option>
                <option value="JavaScript" disabled={selectedSubjects.includes("JavaScript")}>JavaScript</option>
                <option value="React" disabled={selectedSubjects.includes("React")}>React</option>
                <option value="React-Native" disabled={selectedSubjects.includes("React-Native")}>React-Native</option>
                <option value="Kotlin" disabled={selectedSubjects.includes("Kotlin")}>Kotlin</option>
                <option value=""></option>
              </select>

              {/* Display selected subjects */}
              <div>
                Selected Subjects &nbsp; :&nbsp;
                  {selectedSubjects.map((subject, index) => (
                    <span key={index} className="selected-subject">
                      {subject}
                      <span className="remove-icon" onClick={() => removeSubject(subject)}>
                        &nbsp; X &nbsp; 
                      </span>
                    </span>
                  ))}
              </div>

            </label>

            <label>
              Price:
              <input
                className="p-2 rounded-xl border"
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={(e) => {
                  const enteredPrice = parseInt(e.target.value);
                  if (enteredPrice >= 0 || enteredPrice === "") {
                    setFormData({...formData, price: enteredPrice});
                  }
                }}
                // setFormData({...formData, price: e.target.value})}
                placeholder="Enter the Average Price"
              />
            </label>
            <input
              className="p-2 rounded-xl border"
              type="email"
              id="email"
              name="email"
              value={formData.email}
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
