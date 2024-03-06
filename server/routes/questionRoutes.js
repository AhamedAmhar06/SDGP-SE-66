// src/routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.post('/add', questionController.addQuestion);
router.get('/all', questionController.getAllQuestions);

module.exports = router;
