const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, loginUser, registerUser, getProfile, logout, OTPVerification, getProfileMail } = require('../controllers/authController');

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
router.post('/profileMail', getProfileMail)
router.post('/otpMail', OTPVerification)
router.post('/test', test)

module.exports = router;