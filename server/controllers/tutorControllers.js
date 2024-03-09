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
        const { email, password, subjects } = req.body;

        // console.log(email, password, subjects);

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

        // console.log(undergrad.password)

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


const handleTutorLogin = async (req, res) => {
    try {
        const { email } = req.body;
        // console.log(email);

        //Check whether tutor exists
        const tutor = await Tutor.findOne({ email });
        if (!tutor) {
            return res.json(false)
        }
        return res.json(true)
    } catch (error) {
        console.log(error);
    }
}

const tutorList = async (req, res) => {
    try {
        const tutors = await Tutor.find();
        return res.json(tutors);
    } catch (error) {
        console.log(error);
    }
}

const tutorDetails = async (req, res) => {
    try {
        const { id } = req.body;
        const tutor = await Tutor.findById(id);
        // console.log(id);
        return res.json(tutor);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    tutorRegister,
    handleTutorLogin,
    tutorDetails,
    tutorList
}