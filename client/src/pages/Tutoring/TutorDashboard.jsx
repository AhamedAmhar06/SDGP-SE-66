import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import TutorName from '../../components/ViewRequests/TutorName'


export default function RequestedSessions({ tutor_id}) {
  
  const { id } = useParams();
  const [ requests, setRequests ] = useState([]);
  const [ requestsLoaded, setRequestsLoaded ] = useState(false);

  //Load requests
  useEffect(() => {
    const fetchRequests = async () => {

      try {
        const response = await axios.post('/getRequests', { id });
        // Sort requests based on the timestamp
        const sortedRequests = response.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        // console.log(sortedRequests);
        setRequests(sortedRequests);

      } catch (error) {
        console.log(error);
      }

    }
    fetchRequests();
  })

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">View Requests</h1>
      
      {/* Display Requests related to the undergrad */}

      <ul>
        {requests.map(request => (
          <li key={request._id}
            className={`border m-2 rounded-md ${(request.accepted && !request.decline) ? 'bg-green-200' : 'bg-slate-200'}`}
          >
            <div className={`p-2 ${request.decline ? 'bg-red-200' : null}`}>
              < TutorName tutor_ID={request.tutorID}/>
              <p>Subject: {request.subject}</p>
              <p>{request.topic}</p>
              <p>Reason: {request.reason}</p>
              <p>Date: {request.date}</p>
              <p>Time: {request.startTime} - {request.endTime}</p>
              <p>Status : {request.accepted ? 'Accepted' : null } {request.decline ? 'Declined' : null} {!(request.decline || request.accepted) ? 'Processing' : null }</p>
              {(request.accepted && !request.completed)? (
                <a href={`/session/${request._id}`} target="_blank" rel="noopener noreferrer">
                  <button
                    className="bg-NavBlue rounded-xl text-white p-2 hover:scale-105 duration-300 m-2"
                  >
                    Join Now
                  </button>
                </a>
                
              ) : ("Completed")}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
