const express = require('express');
const router = express.Router();
const cors = require('cors');
const { loginUser, registerUser, getProfile, logout } = require('../controllers/authController');

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

module.exports = router;