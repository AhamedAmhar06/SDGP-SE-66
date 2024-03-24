
import { useContext, useState, useEffect } from "react";
import { UndergradContext } from "../../context/undergradContext";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewRequestsTut() {

    const { id } = useParams();
    const [ requests, setRequests ] = useState([]);
    const { undergrad } = useContext(UndergradContext);
    const [ undergradLoaded, setUndergradLoaded ] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ tutor, setTutor ] = useState([]);;
    const [ requestsLoaded, setRequestsLoaded ] = useState(false);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.post('/fetchRequests', { id });
                // Sort requests based on the timestamp
                const sortedRequests = response.data.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setRequests(sortedRequests);
            } catch (error) {
                console.log(error);
            }
        }
        fetchRequests();
    })

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
            <h1 className="text-3xl font-bold text-center">Session Requests</h1>

            <ul>
                {requests.map(request => (
                    <li key={request._id}
                        // className={`border p-2 m-2 rounded-md ${(request.accepted && !request.decline) ? 'bg-green-200' : 'bg-slate-200'}`}
                        className={`border m-2 rounded-md ${(request.accepted && !request.decline) ? 'bg-green-200' : 'bg-slate-200'}`}
                    >
                        <div className={`p-2 ${request.decline ? 'bg-red-200' : null}`}>
                        <h1>Undergraduate Name: {request.fName} {request.lName}</h1>
                        <h1> Subject : {request.subject}</h1>
                        <h1>Reason : {request.reason}</h1>
                        <h1>Date : {request.date}</h1>
                        <h1>Time : {request.startTime} - {request.endTime}</h1>
                        
                        <h1>
                            {request.accepted ? 'Accepted' : null}
                            {request.decline ? 'Declined' : null}
                        </h1>

                        {!(request.decline || request.accepted) ? (
                            <>
                            <button 
                                className="bg-green-500 p-2 rounded-md m-2"
                                onClick={() => acceptSession(request._id)}
                            >
                                Accept
                            </button>
                            
                            <button 
                                className="bg-red-500 p-2 rounded-md m-2"
                                onClick={() => declineSession(request._id)}
                            >
                                Reject
                            </button>
                            </>
                        ) : 
                            (null)}
                            
                            {request.accepted ? (
                                <a href={`/session/${request._id}`} target="_blank" rel="noopener noreferrer">
                                <button
                                  className="bg-NavBlue rounded-xl text-white p-2 hover:scale-105 duration-300 m-2"
                                >
                                  Join Now
                                </button>
                              </a>
                            ) : (null)}

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
