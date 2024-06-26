import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "../service/peer";
import { useLocation } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import { set } from "mongoose";
import axios from "axios";
import toast from "react-hot-toast"; 

const RoomPage = () => {

  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  //Test
  const handleSessionCompleted = async () => {
    try {
      await axios.put(`/markAsCompleted/${id}`);
      toast.success("Session Completed");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Room Page</h1>
      <h4 className="mb-4">{remoteSocketId ? "Connected" : "No one in room"}</h4>
      {myStream && <button onClick={sendStreams} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Send Stream</button>}
      {remoteSocketId && <button onClick={handleCallUser} className="bg-green-500 text-white px-4 py-2 rounded mb-4">CALL</button>}
      <div className="grid grid-cols-2 gap-4">
        {myStream && (
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">My Stream</h1>
            <ReactPlayer
              playing
              muted
              url={myStream}
              width="400px"
              height="300px"
            />
          </div>
        )}
        {remoteStream && (
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">Remote Stream</h1>
            <ReactPlayer
              playing
              muted
              url={remoteStream}
              width="400px"
              height="300px"
            />
          </div>
        )}
      </div>
      <button onClick={handleSessionCompleted} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Session Completed</button>
      <button onClick={() => window.close()} className="bg-red-500 text-white px-4 py-2 rounded mb-4">Leave</button>
    </div>
  );
};

export default RoomPage;
