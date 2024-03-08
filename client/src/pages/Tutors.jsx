import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function Tutors() {

    const [ tutors, setTutors ] = useState([]); 
    

    useEffect(() => {
        const fetchTutors = async () => {
          try {
            const response = await axios.get('/tutors');
            console.log(response.data);
            setTutors(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchTutors();
      }, []);
    
  return (
    <div>

        <div style={{ overflowY: 'scroll', height: '400px'}}>
            <ul>
                {tutors.map(tutor => (
                    <li key={tutor._id}>
                        {tutor.fName} {tutor.lName}
                        <br />
                        {tutor.university}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
