import { useState, useContext, useEffect } from "react";
import registerperson from "../Assets/images/registerperson.png";
import {toast} from 'react-hot-toast'
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { UndergradContext } from "../context/undergradContext";

export default function EditProfile() {
  
    const navigate = useNavigate();
    const { undergrad } = useContext(UndergradContext);
    const [ undergradLoaded, setUndergradLoaded ] = useState(false);

  //UseState for form data
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    university: "",
    studyLevel: "",
  });

  useEffect(() => {
    const fetchUndergrad = async () => {
        try {
            if(undergrad){
                setFormData({
                    fName: undergrad.fName,
                    lName: undergrad.lName,
                    email: undergrad.email,
                    university: undergrad.university,
                    studyLevel: undergrad.studyLevel,
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
  });

  //Register user
  const registerUser = async (e) => {
    e.preventDefault();
    const { fName, lName, university, studyLevel } = formData;
    try {
    //   const {data} = await axios.post('/register', {
    //     fName,
    //     lName,
    //     university,
    //     studyLevel,
    //   })

    //   if(data.error) {
    //     toast.error(data.error)
    //   } else {
    //     setFormData({})
    //     toast.success('Login Successfull. Welcome!')
    //     navigate('/login')
    //   }
        console.log(formData);
    } catch (error) {
      console.log(error);
    }
    // console.log("Form submitted:", formData);
  };

  return (
    <div>
        {undergradLoaded ? (
            <>
                <section className="flex items-center justify-center min-h-screen bg-gray-50">
                    {/* Register container */}
                    <div className="flex items-center max-w-3xl p-5 bg-gray-100 shadow-lg rounded-2xl">
                        {/* Image */}
                        <div className="hidden md:w-1/2 md:block">
                        <img className="border-4 rounded-2xl border-NavBlue" src={registerperson} alt="Register Person" />
                        </div>

                        {/* Form */}
                        <div className="px-8 md:w-1/2 md:px-16">
                        <h2 className="text-2xl font-bold text-NavBlue">Edit Profile</h2>

                        <form className="flex flex-col gap-4">
                            <input
                            className="p-2 border rounded-xl"
                            type="text"
                            id="fName"
                            name="fName"
                            value={formData.fName}
                            onChange={(e) => setFormData({...formData, fName: e.target.value})}
                            placeholder="First Name"
                            />
                            <input
                            className="p-2 border rounded-xl"
                            type="text"
                            id="lName"
                            name="lName"
                            value={formData.lName}
                            onChange={(e) => setFormData({...formData, lName: e.target.value})}
                            placeholder="Last Name"
                            />
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
                        {/* Register Button */}
                        <button className="py-2 text-white duration-300 bg-NavBlue rounded-xl hover:scale-105" type="submit" onClick={registerUser}>
                            Save Changes
                            </button>
                        </form>
                        </div>
                    </div>
                </section>
            </>
        ): (null)}
    </div>
    
  );

}
