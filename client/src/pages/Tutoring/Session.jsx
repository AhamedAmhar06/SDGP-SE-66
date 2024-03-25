import React, { useState, useCallback, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UndergradContext } from "../../context/undergradContext";
import { useSocket } from "../../context/SocketProvider";

export default function Session() {



    const navigate = useNavigate();
    const { id } = useParams();
    const { undergrad } = useContext(UndergradContext);
    const socket = useSocket();

    const [ roomData, setRoomData ] = useState({
        room: id,
        email : "",
        status: "pending"
    
    });
    

    const handleSubmitForm = useCallback(
        (e) => {
            const { email, room } = roomData;
          e.preventDefault();
          socket.emit("room:join", { email, room });
        },
        [roomData.email, roomData.room, socket]
      );
    
      const handleJoinRoom = useCallback(
        (data) => {
            const { room } = data;
          navigate(`/room/${room}`);
        },
        [navigate]
      );

    useEffect(() => {
        try {
            if(undergrad) {
                setRoomData({ ...roomData, email: undergrad.email });
            }
        } catch (error) {
            console.log(error);
        }
    }, [undergrad]);

    useEffect(() => {
        socket.on("room:join", handleJoinRoom);
        return () => {
          socket.off("room:join", handleJoinRoom);
        };
      }, [socket, handleJoinRoom]);


    return (

        <div className="text-center">

        <h1 className="text-3xl font-bold text-center">Join Room</h1>

            <br/>
            <label>

                Email: &nbsp; &nbsp;
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={roomData.email}
                    onChange={(e) => setRoomData({ ...roomData, email: e.target.value })}
                    disabled={true}
                />

            </label>    

            <br/>

            <label>
                Room ID: &nbsp; &nbsp;
                <input 
                    type="text" 
                    placeholder="code"
                    name="room"
                    value={roomData.room}
                    disabled={true}
                />
            </label>

                <br/>
                <button 
                    className="bg-NavBlue rounded-xl text-white p-2 hover:scale-105 duration-300 m-2"
                    onClick={handleSubmitForm}
                >
                    Join Now
                </button>

        </div>
    )
}
