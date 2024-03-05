const Undergrad = require('../models/undergrad');
const Tutor = require('../models/tutor');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const { EMAIL, PASSWORD } = process.env;

//Create tutor account
const tutorRegister = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log(email, password);

        //Check if password are entered
        if (!password) {
            return res.json({
                error: 'Password is required'
            })
        };

        

        //Check if password length is correct
        if (password.length < 6) {
            return res.json({
                error: 'Password must be at least 6 characters long'
            })
        };

        //Check if user exists
        const undergrad = await Undergrad.findOne({ email });

        console.log(undergrad.password)

        //Check if password is correct
        const match = await comparePassword(password, undergrad.password);
        if (!match) {
            return res.json({
                error: 'Incorrect password'
            })
        };

        if (match) {
            const fName = undergrad.fName;
            const lName = undergrad.lName;
            const university = undergrad.university;
            const studyLevel = undergrad.studyLevel;
            const hashedPassword = undergrad.password;
            const subjects = "None";
            const rating = 0;
            const reviews = "None";
            const price = 0;
            const tutor = await Tutor.create({
                fName,
                lName,
                email,
                university,
                studyLevel,
                password : hashedPassword,
                subjects,
                rating,
                reviews,
                price
            });
            return res.json(tutor)
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    tutorRegister
}