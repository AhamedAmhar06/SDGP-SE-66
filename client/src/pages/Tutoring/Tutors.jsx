import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaChalkboardTeacher } from "react-icons/fa";


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

        <div className=" items-center gap-[73px] md:gap-[62px] sm:gap-[41px]">
            <h1 className="text-3xl font-bold text-center ">Tutors</h1>
             
            <input 
              type="text" 
              placeholder="Search by name" 
              className="w-3/4 p-2 m-4 border border-gray-800 rounded-md " 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
            />
            <select
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
              className="p-2 m-4 font-bold border border-gray-800 rounded-md"
            >
              <option value="name ">Name</option>
              <option value="subject">Subject</option>
            </select>
            <div className="flex flex-col items-center gap-[73px] md:gap-[62px] sm:gap-[41px]">
            <ul>
                {filteredTutors.map(tutor => (
                    <li key={tutor._id} className="p-8 my-4 md:flex bg-slate-100 rounded-xl md:p-1 dark:bg-gray-300">
                      <div className="pt-6 space-y-4 text-center md:p-5 md:text-left">
                         
                        <p className="text-lg font-medium">
                          <div className='flex text-xl gap-7 row'>
                          <FaChalkboardTeacher  className="h-[50px] w-[50px] ml-2.5 rounded-[10%] hover:scale-110 duration-300" />
                          {tutor.fName} {tutor.lName}
                          </div>
                          <br />
                          <span className="text-m text-slate-700 dark:text-slate-500">
                            {tutor.university}
                          </span>
                          <br />
                          Subjects : {tutor.subjects.join(', ')}
                        </p>
                        Rating : {generateStars(tutor.rating)}
                        <Link to={`/tutors/${tutor._id}`}>
                  <button className="hidden h-10 px-6 mt-3 text-sm text-white rounded bg-NavBlue hover:bg-blue-700 hover:text-primary md:block">View Profile</button>
                 </Link>
                      </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        </div>
   
  )
}
