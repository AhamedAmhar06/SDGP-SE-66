const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, loginUser, registerUser, getProfile, logout, resetPassword,  editProfile } = require('../controllers/authController');
const { OTPVerification, sendCode, tutorRegisterOTP } = require('../controllers/authMail');
const { tutorRegister, handleTutorLogin, tutorList, tutorDetails, tutorDetailsByEmail, createCourse, requestSession, fetchRequests, acceptSession, declineSession, getRequests } = require('../controllers/tutorControllers');
const { notificationList, createNotification, markAsRead, markAsUnread, deleteNotification } = require('../controllers/notificationController');
//const questionController = require('../controllers/questionController');
const {getAllQuestions ,createQuestion,updateQuestion,deleteQuestion,getquiz} = require('../controllers/questionController');

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
router.post('/tutorRegisterOTP', tutorRegisterOTP)
router.post('/tutorRegister', tutorRegister)
router.post('/tutorLogin', handleTutorLogin)
router.get('/tutors', tutorList)
router.post('/tutorDetails', tutorDetails)
router.post('/resetPassword', resetPassword)
router.post('/otpMail', OTPVerification)
router.post('/sendCode', sendCode)
router.put('/editProfile', editProfile)

//Tutor
router.post('/tutorRegisterOTP', tutorRegisterOTP)
router.post('/tutorRegister', tutorRegister)
router.post('/tutorLogin', handleTutorLogin)
router.get('/tutors', tutorList)
router.post('/tutorDetails', tutorDetails)
router.post('/tutorDetailsByEmail', tutorDetailsByEmail)
router.post('/createCourse', createCourse)
router.post('/requestSession', requestSession)
router.post('/fetchRequests', fetchRequests)
router.put('/acceptSession/:id', acceptSession)
router.put('/declineSession/:id', declineSession)
router.post('/getRequests', getRequests)

//Notification
router.post('/notificationList', notificationList)
router.put('/markAsRead/:id', markAsRead)
router.put('/markAsUnread/:id', markAsUnread)
router.post('/createNotification', createNotification)
router.delete('/deleteNotification/:id', deleteNotification)

//questionBank
router.post('/getAllQuestions', getAllQuestions)


router.get('/fetchquestion', getAllQuestions);
router.post('/create', createQuestion);
router.put('/update/:id', updateQuestion);
router.delete('/delete/:id', deleteQuestion);


//quiz
router.get('/quizget', getquiz);

router.post('/test', test)

module.exports = router;