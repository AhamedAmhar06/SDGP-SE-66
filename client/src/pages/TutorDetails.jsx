import React ,{ useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function TutorDetails({tutor_id}) {

    const [tutor, setTutor] = useState({});
    const { id } = useParams();
    const [TutorLoaded, setTutorLoaded] = useState(false);
    useEffect(() => {
        const fetchTutor = async () => {
            try {
                // console.log(tutor_id);
                const response = await axios.post('/tutorDetails', { id });
                // console.log(response.data);
                setTutor(response.data);
                if(response.data) {
                    setTutorLoaded(true)
                    // setTutorLoaded = true;
                } else {
                    window.location.reload();
                }
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchTutor();
    })

    const notifyMe = async () => {
        
    }
  return (
    <div>
        {TutorLoaded ? (
            <>
            <h1>{tutor.fName} {tutor.lName}</h1>
            <p>University: {tutor.university}</p>
            <p>Subjects: {tutor.subjects.join(', ')}</p>

            <br />
            
            <button className="bg-NavBlue rounded-xl text-white p-2 hover:scale-105 duration-300 m-5">
                Request for a Session
            </button>

            <button 
                className="bg-NavBlue rounded-xl text-white p-2 hover:scale-105 duration-300 m-5"
            // onClick={}
            >
                Notify me
            </button>
            </>
        ) : null}
        

    </div>
  )
}
