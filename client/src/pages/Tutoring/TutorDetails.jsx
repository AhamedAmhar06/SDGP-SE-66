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
        // const fetchUndergrad = async () => {
        //     try {
        //         if(undergrad){
        //             setUndergradLoaded(true);
        //         }          
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
    
        fetchTutor();
        // fetchUndergrad();
    });

    useEffect(() => {
        const authStatus = localStorage.getItem('undergrad');
        if(authStatus === 'true') {
            setUndergradLoaded(true);
        }
      }, []);

    return (
        <div className="flex items-center justify-center h-screen">
    <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
        {TutorLoaded ? (
            <>
                {undergradLoaded ? (
                    <>
                        <h1 className="text-4xl font-bold mb-2">{tutor.fName} {tutor.lName}</h1>
                        <p className="text-gray-700 mb-2 text-xl">E-mail: {tutor.email}</p>
                        <p className="text-gray-700 mb-2 text-xl">University: {tutor.university}</p>
                        
                        <p className="text-gray-700 mb-2 text-xl">Subjects: {tutor.subjects.join(', ')}</p>

                        <br />
                        
                        <Link to={`/createRequest/${tutor._id}`}>
                            <button className="bg-NavBlue text-white p-2 rounded-xl hover:scale-105 duration-300 m-5">
                                Request a Session
                            </button>
                        </Link>
                        
                        
                    </>
                ): (
                    <h1 className="text-red-500 font-bold text-2xl text-center">Please Login to the system to view tutor profiles</h1>
                )}
            </>
        ) : null}
    </div>
</div>
    )

}