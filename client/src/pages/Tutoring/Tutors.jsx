import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Tutors() {

    const [ tutors, setTutors ] = useState([]); 
    const [ search, setSearch ] = useState('');
    const [ searchBy, setSearchBy ] = useState('name');


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

      const filteredTutors = tutors.filter(tutor => {
        if (searchBy === 'name') {
          const fullName = `${tutor.fName} ${tutor.lName}`.toLowerCase();
          return fullName.includes(search.toLowerCase());
        } else if (searchBy === 'subject') {
          return tutor.subjects.some(subject => subject.toLowerCase().includes(search.toLowerCase()));
        }
      });

  return (
    <div>

        <div >
            <h1 className="text-3xl font-bold text-center">Tutors</h1>
            <input 
              type="text" 
              placeholder="Search by name" 
              className="border border-gray-800 w-1/2 p-2 m-4 rounded-md" 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
            />
            <select
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
              className="border border-gray-800 p-2 m-4 rounded-md"
            >
              <option value="name">Name</option>
              <option value="subject">Subject</option>
            </select>
            <ul>
                {filteredTutors.map(tutor => (
                    <li key={tutor._id} className="my-4 md:flex bg-slate-100 rounded-xl p-8 md:p-1 dark:bg-gray-300">
                      <Link to={`/tutors/${tutor._id}`} className="pt-6 md:p-5 text-center md:text-left space-y-4">
                       
                        <p className="text-lg font-medium">
                          {tutor.fName} {tutor.lName}
                          <br />
                          <span className="text-slate-700 dark:text-slate-500 text-sm">
                            {tutor.university}
                          </span>
                          <br />
                          Subjects : {tutor.subjects.join(', ')}
                          <br />
                          Email : {tutor.email}
                        </p>
                        Rating : {generateStars(tutor.rating)}
                        
                      </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
