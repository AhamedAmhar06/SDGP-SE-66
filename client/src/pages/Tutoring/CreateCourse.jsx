import React, { useState, useEffect, useContext } from 'react';
import {toast} from 'react-hot-toast'
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { UndergradContext } from '../../context/undergradContext';



function createCourse() {
  
  const navigate = useNavigate()

  //UseState for form data
  const [formData, setFormData] = useState({
    courseName: "",
    description: "",
    time: "",
    price: "",
    email: "",
  });

  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const { undergrad } = useContext(UndergradContext);
  const [ undergradLoaded, setUndergradLoaded ] = useState(false);

  //Register user
  const registerUser = async (e) => {
    e.preventDefault();
    const { courseName, description, time, email, price } = formData;
    try {
      const {data} = await axios.post('/createCourse', {
        courseName, 
        description, 
        time, 
        email, 
        subject : selectedSubjects[0], 
        price
      })

      if(data.error) {
        toast.error(data.error)
      } else {
        setFormData({})
        toast.success('Course Created successfully!')
        navigate('/tutorDashboard')
      }
      console.log("Form submitted:", formData, selectedSubjects);
    } catch (error) {
      console.log(error);
    }
  };

  const removeSubject = (subject) => {
    setSelectedSubjects(selectedSubjects.filter(item => item !== subject))
  }

  useEffect(() => {
    const fetchUndergrad = async () => {
      try {
        if (undergrad) {
          setFormData({...formData,
            email: undergrad.email,
          })
          setUndergradLoaded(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (undergradLoaded === false) {
      fetchUndergrad();
    }
  }, [undergrad, undergradLoaded]);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50">
      {/* Register container */}

        {/* Form */}
        <div className="px-8 md:w-1/2 md:px-16">
          <h2 className="text-2xl font-bold text-NavBlue">Create Course</h2>
          <br />

          <form className="flex flex-col gap-4">
            <input
              className="p-2 border rounded-xl"
              type="text"
              id="courseName"
              name="courseName"
              value={formData.courseName}
              onChange={(e) => setFormData({...formData, courseName: e.target.value})}
              placeholder="Name of the course"
            />

            <textarea 
              className="p-2 border rounded-xl"
              type="text"
              name="description" 
              id="description" 
              value={formData.description}
              cols="30" 
              rows="5"
              onChange={(e) => {
                const text = e.target.value;
                const words = text.trim().split(/\s+/); // Split based on whitespace characters
                if (words.length <= 50) {
                  setFormData({...formData, description: text});
                }
              }}
              placeholder="Description of the course"
              style={{resize: "none"}}
            />
            <input
              className="p-2 border rounded-xl"
              type="text"
              id="time"
              name="time"
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              placeholder="Time Duration of the Course"
            />

            <label>
              Choose the related subject&nbsp; : &nbsp;

              {selectedSubjects.length === 0 && (
                <select
                  name="subjects"
                  id="subjects"
                  className="appearance-none rounded-xl pt-2 pb-2 pl-2 pr-2 border border-NavBlue"
                  onChange={(e) => setSelectedSubjects([...selectedSubjects, e.target.value])}
                >
                  <option value="">Select Option</option>
                  <option value="Java">Java</option>
                  <option value="Python">Python</option>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="React">React</option>
                  <option value="React-Native">React-Native</option>
                  <option value="Kotlin">Kotlin</option>
                  <option value=""></option>
                </select>
              )}

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
            <input
              className="p-2 border rounded-xl"
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              placeholder="Price of the course"
              // required
            />

           {/* Register Button */}
           <button className="py-2 text-white duration-300 bg-NavBlue rounded-xl hover:scale-105" type="submit" onClick={registerUser}>
              Create Course
            </button>
          </form>
        </div>
    </section>
  );
};

export default createCourse;