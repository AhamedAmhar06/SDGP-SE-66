import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Tutors() {

    const [ tutors, setTutors ] = useState([]); 
    

    useEffect(() => {
        const fetchTutors = async () => {
          try {
            const response = await axios.get('/tutors');
            // console.log(response.data);
            setTutors(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchTutors();
      }, []);
    
      const generateStars = (rating) => {
        const stars = [];
        const ratingC = parseFloat(rating.$numberDecimal);
        const fullStars = Math.floor(ratingC);
        const remainder = ratingC - fullStars;
        // console.log(fullStars, remainder);
        for(let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
        } else {
            stars.push(<span key={i} className="text-gray-400">&#9733;</span>);
        }}
        
        return stars;
      };

  return (
    <div>

        <div style={{ overflowY: 'scroll', height: '400px'}}>
            <ul>
                {tutors.map(tutor => (
                    <li key={tutor._id} className="md:flex bg-slate-100 rounded-xl p-8 md:p-1 dark:bg-gray-300">
                      <Link to={`/tutors/${tutor._id}`}>
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                          <p className="text-lg font-medium">
                            {tutor.fName} {tutor.lName}
                            <br />
                            <span className="text-slate-700 dark:text-slate-500 text-sm">
                              {tutor.university}
                            </span>
                            <br />
                            Subjects : {tutor.subjects.join(', ')}
                          </p>
                          Rating : {generateStars(tutor.rating)}
                          <br />
                          
                        </div>
                      </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
