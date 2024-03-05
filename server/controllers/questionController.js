const Undergrad = require('../models/undergrad');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const { EMAIL, PASSWORD } = process.env;




const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Create a new question
router.post('/questions', async (req, res) => {
  try {
    const { title, description, createdBy } = req.body;
    console.log("hello");
    const question = new Question({ title, description, createdBy });
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all questions
router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
