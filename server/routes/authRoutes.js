const express = require('express');
const router = express.Router();
const cors = require('cors');
const { loginUser, registerUser, getProfile } = require('../controllers/authController');

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/profile', getProfile)

module.exports = router;