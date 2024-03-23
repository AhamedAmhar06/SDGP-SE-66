import { useState, useEffect, useContext } from "react";
import registerperson from "../../Assets/images/registerperson.png";
import {toast} from 'react-hot-toast'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import { UndergradContext } from '../../context/undergradContext';
// import { TiDeleteOutline } from "react-icons/ti";

export default function CreateSession({tutor_id}) {

  const { id } = useParams();
  const navigate = useNavigate();
  const { undergrad } = useContext(UndergradContext);
  const [ undergradLoaded, setUndergradLoaded ] = useState(false);
  const [ tutor, setTutor ] = useState({});
  const [ TutorLoaded, setTutorLoaded ] = useState(false);
  

  //UseState for form data
  const [formData, setFormData] = useState({
    email: "",
    tutorID: id,
    reason: "",
    date: "",
    startTime: "",
    endTime: ""
  });

  //Selected Subjects
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  //Remove selected subjects
  const removeSubject = (subject) => {
    setSelectedSubjects(selectedSubjects.filter(item => item !== subject))
  }

  //Register user
  const requestSession = async (e) => {
    e.preventDefault();
    const { email, tutorID, subject, reason, date, startTime, endTime } = formData;
    console.log("Form submitted:", formData, selectedSubjects);
    try {
      const {data} = await axios.post('/requestSession', {
        email,
        tutorID,
        subject: selectedSubjects[0],
        reason,
        date,
        startTime,
        endTime
      });
      if(data.error) {
        toast.error(data.error)
      } else {
        toast.success('Requested submitted successfully!')
        navigate('/tutors')
      }
    } catch (error) {
      console.log(error);
    }
  };

//To get the user details    
  useEffect(() => {
    const fetchUndergrad = async () => {
      try {
          if(undergrad){
            setFormData({...formData,
              email: undergrad.email,
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

  //To get the tutor details
useEffect(() => {
  const fetchTutor = async () => {
      try {
          const response = await axios.post('/tutorDetails', { id });
          setTutor(response.data);
          if(response.data) {
              setTutorLoaded(true);
          } else {
              window.location.reload();
          }
      } catch (error) {
          console.error(error);
      }
  };

  //To check if the user is already logged in
  const fetchUndergrad = async () => {
      try {
          if(undergrad){
              setUndergradLoaded(true);
          }          
      } catch (error) {
          console.error(error);
      }
  };

  fetchTutor();
  fetchUndergrad();
});



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
          <h2 className="font-bold text-2xl text-NavBlue">Request Session</h2>
          {/* <p className="text-xs mt-4 text-NavBlue">Registered already? </p> */}
          {/* Login Button */}
          {/* <button className="text-NavBlue" onClick={(e) => navigate('/login')}>
            Login
          </button> */}

          <form className="flex flex-col gap-4">
            <br />

            <label>
              Tutor : {tutor.fName} {tutor.lName}
            </label>

            {selectedSubjects.length === 0 && (
                <>
                Choose the requires subject:&nbsp; : &nbsp;
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
              </>
            )}

            {/* Display selected subjects */}
            <div>
              Selected Subject: &nbsp; :&nbsp;
                {selectedSubjects.map((subject, index) => (
                  <span key={index} className="selected-subject">
                    {subject}
                    <span className="remove-icon" onClick={() => removeSubject(subject)}>
                      &nbsp; X &nbsp; 
                    </span>
                  </span>
                ))}
              </div>

            <label>
              Enter the reason for the session: &nbsp;
              <br /> 

              <textarea
                  className="p-2 rounded-xl border"
                  type="text"
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={(e) => {
                    const text = e.target.value;
                    const words = text.trim().split(/\s+/); // Split based on whitespace characters
                    if (words.length <= 50) {
                      setFormData({...formData, reason: text});
                    }
                  }}
                  placeholder="Reason"
                  style={{resize: "none"}}
                  rows="3" // Set the number of visible lines
                  cols="30" // Set the number of visible width
              />

            </label>

            <label>


            </label>

            <label>
                Select Date: &nbsp; 
                <input
                  type="date"
                  className="appearance-none rounded-xl p-1 border border-NavBlue"
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
            </label>

            <label>
                Select Start Time: &nbsp;
                <input
                  type="time"
                  className="appearance-none rounded-xl p-1 border border-NavBlue"
                  onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                />
            </label>

            <label>
                Select End Time: &nbsp;
                <input
                    type="time"
                    className="appearance-none rounded-xl p-1 border border-NavBlue"
                    onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                />
            </label>

           {/* Register Button */}
           <button className="bg-NavBlue rounded-xl text-white py-2 hover:scale-105 duration-300" type="submit" 
           onClick={requestSession}>
              Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
