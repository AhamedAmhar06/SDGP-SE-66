import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UndergradContext } from '../../context/undergradContext';
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
                    const sortedNotifications = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    setNotifications(sortedNotifications);
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

    return (
        <div className="bg-gray-300 p-4 rounded-md shadow-md">
            {notifications.length === 0 ? (
                <p className="text-center text-gray-600">No Notifications</p>
            ) : (
                <ul>
                    {notifications.slice(0, 3).map(notification => (
                        <li key={notification._id} className="my-4 p-4 bg-white rounded-md shadow-md flex justify-between items-center transition-transform transform hover:scale-105">
                            <span className={`flex-grow mr-4 ${notification.read ? 'line-through text-gray-500' : 'font-semibold'}`}>{notification.message}</span>
                            <div className="flex gap-2">
                                <MdOutlineMarkEmailRead 
                                    className="text-2xl text-blue-500 cursor-pointer hover:scale-105"
                                    onClick={() => markAsRead(notification._id)}
                                />
                                <MdOutlineMarkunreadMailbox 
                                    className="text-2xl text-blue-500 cursor-pointer hover:scale-105"
                                    onClick={() => markAsUnread(notification._id)}
                                />
                                <MdOutlineDeleteOutline 
                                    className="text-2xl text-blue-500 cursor-pointer hover:scale-105"
                                    onClick={() => deleteNotification(notification._id)}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
