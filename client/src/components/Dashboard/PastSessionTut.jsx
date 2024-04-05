import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UndergradContext } from '../../context/undergradContext';

export default function PastSessionTut({ undergradID }) {
  
    const id = undergradID;
    const [requests, setRequests] = useState([]);
    const { undergrad } = useContext(UndergradContext);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.post('/fetchRequests', { id });
                // Filter out completed sessions
                const filteredRequests = response.data.filter(request => request.completed);
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

    //Accept session
    const acceptSession = async (id) => {
        try {
            await axios.put(`/acceptSession/${id}`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    //Decline session
    const declineSession = async (id) => {
        try {
            await axios.put(`/declineSession/${id}`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <ul>
                {requests.slice(0, 3).map(request => (
                    <li key={request._id} className={`border m-2 rounded-md transition-transform transform hover:scale-105 ${(request.accepted && !request.decline) ? 'bg-green-200' : 'bg-slate-200'}`}>
                        <div className={`p-2 ${request.decline ? 'bg-red-200' : null}`}>
                            <h1>Undergraduate Name: {request.fName} {request.lName}</h1>
                            <h1>Subject: {request.subject}</h1>
                            <h1>Reason: {request.reason}</h1>
                            <h1>Date: {request.date}</h1>
                            <h1>Time: {request.startTime} - {request.endTime}</h1>
                            <h1>Status : Completed</h1>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
