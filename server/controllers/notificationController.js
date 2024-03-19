const Undergrad = require('../models/undergrad');
const Notification = require('../models/notification');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const { EMAIL, PASSWORD } = process.env;

const createNotification = async (req, res) => {
    try {
        const { email } = req.body;

        const message = "This is a test message";
        const notification = await Notification.create({
            email,
            message
        });

        res.json(notification);
    } catch (error) {
        console.error(error);
    }
};

const notificationList = async (req, res) => {
    try {
        const { email } = req.body;
        // console.log(email);
        const notifications = await Notification.find({ email });
        res.json(notifications);
    } catch (error) {
        console.log(error);
    }
}

//Mark as read
const markAsRead = async (req, res) => {
    try {
        const notification = await Notification.findByIdAndUpdate(
            req.params.id,
            { read: true },
            { new: true }
        );
        res.json(notification);
    } catch (error) {
        console.log(error);
    }
}

//Mark as unread
const markAsUnread = async (req, res) => {
    try {
        const notification = await Notification.findByIdAndUpdate(
            req.params.id,
            { read: false },
            { new: true }
        );
        res.json(notification);
    } catch (error) {
        console.log(error);
    }
}

//Delete notification
const deleteNotification = async (req, res) => {
    try {
        await Notification.findByIdAndDelete(req.params.id);
        res.json({ message: 'Notification deleted' });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createNotification,
    notificationList,
    markAsRead,
    markAsUnread,
    deleteNotification
};