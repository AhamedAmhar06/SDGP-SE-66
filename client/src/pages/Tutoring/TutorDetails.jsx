import React ,{ useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { UndergradContext } from "../../context/undergradContext";
import { Link } from 'react-router-dom';

export default function TutorDetails({tutor_id}) {

    const [tutor, setTutor] = useState({});
    const { id } = useParams();
    const [TutorLoaded, setTutorLoaded] = useState(false);
    const { undergrad } = useContext(UndergradContext);
    const [ undergradLoaded, setUndergradLoaded ] = useState(false);

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
    <div>
        {TutorLoaded ? (
            <>
                {undergradLoaded ? (
                    <>
                        <h1>{tutor.fName} {tutor.lName}</h1>
                        <p>University: {tutor.university}</p>
                        <p>Subjects: {tutor.subjects.join(', ')}</p>

                        <br />
                        
                        {/* <button className="bg-NavBlue rounded-xl text-white p-2 hover:scale-105 duration-300 m-5">
                            Request for a Session
                        </button> */}

                        <Link to={`/createRequest/${tutor._id}`}>
                            <button className="bg-NavBlue rounded-xl text-white p-2 hover:scale-105 duration-300 m-5">
                                Request a Session
                            </button>
                        </Link>
                        
                        <button 
                            className="bg-NavBlue rounded-xl text-white p-2 hover:scale-105 duration-300 m-5"
                        >
                            Notify me
                        </button>
                    </>
                ): (
                    <h1>Please Login to the system to view tutor profiles</h1>
                )}
            </>
        ) : null}
        

    </div>
  )
}
