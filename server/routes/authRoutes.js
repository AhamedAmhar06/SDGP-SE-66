const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, loginUser, registerUser, getProfile, logout, resetPassword } = require('../controllers/authController');
const { OTPVerification, sendCode, tutorRegisterOTP } = require('../controllers/authMail');
const { tutorRegister } = require('../controllers/tutorControllers');

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/profile', getProfile)
router.get('/logout', logout)
router.post('/tutorRegisterOTP', tutorRegisterOTP)
router.post('/tutorRegister', tutorRegister)
router.post('/resetPassword', resetPassword)
router.post('/otpMail', OTPVerification)
router.post('/sendCode', sendCode)
router.post('/test', test)

module.exports = router;