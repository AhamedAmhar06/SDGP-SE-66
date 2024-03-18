import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UndergradContext } from '../context/undergradContext';
// import { MdCheck, MdClose, MdDelete } from 'react-icons/io';
import { MdOutlineMarkEmailRead, MdOutlineDeleteOutline, MdOutlineMarkunreadMailbox } from "react-icons/md";

export default function Notifications() {
    
    const [notifications, setNotifications] = useState([]);
    const { undergrad } = useContext(UndergradContext);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                if (undergrad) {
                    const email = undergrad.email;
                    const response = await axios.post('/notificationList', { email });
                    setNotifications(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchNotifications();
    }, [undergrad]);

    //Mark as read
    const markAsRead = async (id) => {
        try {
            await axios.put(`/markAsRead/${id}`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    //Mark as unread
    const markAsUnread = async (id) => {
        try {
            await axios.put(`/markAsUnread/${id}`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    //Delete notification
    const deleteNotification = async (id) => {
        try {
            await axios.delete(`/deleteNotification/${id}`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    const testButton = () => { 
        try {
            if (undergrad) {
                const email = undergrad.email;
                const response = axios.post('/createNotification', { email })
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Notifications</h1>
            <ul>
                {notifications.map(notification => (
                    <li key={notification._id} className={`my-4 md:flex rounded-xl p-8 md:p-5 ${notification.read ? 'bg-slate-200' : 'bg-slate-400'}`}>
                        <div className='flex justify-between'>
                            {notification.message} &nbsp;
                            <div className='flex justify-end'>
                                <MdOutlineMarkEmailRead 
                                    className="text-2xl text-NavBlue hover:scale-105" 
                                    onClick={() => markAsRead(notification._id)}
                                />
                                <MdOutlineMarkunreadMailbox 
                                    className="text-2xl text-NavBlue hover:scale-105" 
                                    onClick={() => markAsUnread(notification._id)}
                                />
                                <MdOutlineDeleteOutline 
                                    className="text-2xl text-NavBlue hover:scale-105" 
                                    onClick={() => deleteNotification(notification._id)}
                                />
                            </div>
                        </div>
                        
                    </li>
                ))}
            </ul>
            <button className="text-2xl text-NavBlue hover:scale-105" onClick={testButton}>
                Test
            </button>
        </div>
    );
}
