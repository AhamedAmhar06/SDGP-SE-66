import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function TutorName({tutor_ID}) {

    const [tutor, setTutor] = useState([]);
    const [tutorLoaded, setTutorLoaded] = useState(false);

    //To get the tutor details
    useEffect(() => {
        const fetchTutor = async () => {
            try {
                const response = await axios.post('/tutorDetails', { id: tutor_ID });
                setTutor(response.data);
                if(response.data) {
                    setTutorLoaded(true);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchTutor();
    }, [tutor_ID, tutorLoaded]);

  return (
    <div>
        {!!tutor && <div>Tutor Name: {tutor.fName} {tutor.lName}</div>}
    </div>
  )
}

export default TutorName
