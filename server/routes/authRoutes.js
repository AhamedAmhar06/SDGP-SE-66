const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, loginUser, registerUser, getProfile, logout, resetPassword } = require('../controllers/authController');
const { OTPVerification, sendCode, tutorRegisterOTP } = require('../controllers/authMail');
const { tutorRegister, handleTutorLogin, tutorList, tutorDetails } = require('../controllers/tutorControllers');
const { notificationList, createNotification, markAsRead, markAsUnread, deleteNotification } = require('../controllers/notificationController');

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

//Auth
router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/profile', getProfile)
router.get('/logout', logout)
router.post('/resetPassword', resetPassword)
router.post('/otpMail', OTPVerification)
router.post('/sendCode', sendCode)

//Tutor
router.post('/tutorRegisterOTP', tutorRegisterOTP)
router.post('/tutorRegister', tutorRegister)
router.post('/tutorLogin', handleTutorLogin)
router.get('/tutors', tutorList)
router.post('/tutorDetails', tutorDetails)


//Notification
router.post('/notificationList', notificationList)
router.put('/markAsRead/:id', markAsRead)
router.put('/markAsUnread/:id', markAsUnread)
router.post('/createNotification', createNotification)
router.delete('/deleteNotification/:id', deleteNotification)

router.post('/test', test)

module.exports = router;