import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TutorName from '../ViewRequests/TutorName';

export default function SessionRequestedCard({ undergradID }) {
  
  const id = undergradID;
  const [requests, setRequests] = useState([]);

  // Load requests
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.post('/getRequests', { id });
        // Filter out completed sessions
        const filteredRequests = response.data.filter(request => !request.completed);
        // Sort requests based on the timestamp
        const sortedRequests = filteredRequests.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setRequests(sortedRequests);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRequests();
  }, [id]);

  return (
    <div className="container mx-auto mt-8">
      {/* Display Requests related to the undergrad */}
      {requests.length === 0 ? (
        <p className="text-lg text-gray-600 transition-transform transform hover:scale-105">No sessions requested</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {requests.slice(0, 3).map(request => (
            <li key={request._id} className={`border rounded-md shadow-md transition-transform transform hover:scale-105 ${request.accepted && !request.decline ? 'bg-green-300' : 'bg-gray-200'}`}>
              <div className={`p-4 ${request.decline ? 'bg-red-300' : ''}`}>
                <TutorName tutor_ID={request.tutorID} />
                <p className="text-gray-800">Subject: {request.subject}</p>
                <p className="text-gray-800">{request.topic}</p>
                <p className="text-gray-800">Reason: {request.reason}</p>
                <p className="text-gray-800">Date: {request.date}</p>
                <p className="text-gray-800">Time: {request.startTime} - {request.endTime}</p>
                <p className="text-gray-800">Status: {request.accepted ? 'Accepted' : null} {request.decline ? 'Declined' : null} {!(request.decline || request.accepted) ? 'Processing' : null}</p>
                {request.accepted && !request.completed && (
                  <a href={`/session/${request._id}`} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 duration-300 mt-2">
                      Join Now
                    </button>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
