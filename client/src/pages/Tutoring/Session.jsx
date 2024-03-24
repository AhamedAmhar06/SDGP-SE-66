import React, { useState, useCallback, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UndergradContext } from "../../context/undergradContext";

export default function Session() {



    const navigate = useNavigate();
    const { id } = useParams();
    const { undergrad } = useContext(UndergradContext);


    const [ roomData, setRoomData ] = useState({
        roomID: id,
        email : "",
        status: "pending"
    
    });

    useEffect(() => {
        try {
            if(undergrad) {
                setRoomData({ ...roomData, email: undergrad.email });
            }
        } catch (error) {
            console.log(error);
        }
    }, [undergrad]);

    const checkData = async () => {
        try {
            console.log(roomData);
        } catch (error) {
            console.log(error);
        }
    }


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
                    name="roomID"
                    value={roomData.roomID}
                    disabled={true}
                />
            </label>

                <br/>
                <button 
                    onClick={checkData}
                >
                    Check
                </button>

        </div>
    )
}
