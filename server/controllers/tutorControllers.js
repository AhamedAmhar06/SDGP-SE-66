const Undergrad = require('../models/undergrad');
const Tutor = require('../models/tutor');
const Course = require('../models/course');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const { EMAIL, PASSWORD } = process.env;

//Create tutor account
const tutorRegister = async (req, res) => {
    try {
        const { email, password, subjects, bio, price } = req.body;

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
            const tutor = await Tutor.create({
                fName,
                lName,
                email,
                university,
                studyLevel,
                password : hashedPassword,
                subjects,
                bio,
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

//Retrieve tutor details by email
const tutorDetailsByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const tutor = await Tutor.findOne({ email });
        return res.json(tutor);
    }
    catch (error) {
        console.log(error);
    }
};

//Create course
const createCourse = async (req, res) => {
    try {
        const { courseName, description, time, email, subject, price } = req.body;

        //Check if course name is entered
        if (!courseName) {
            return res.json({
                error: 'Course name is required'
            })
        }

        //Check if course description is entered
        if (!description) {
            return res.json({
                error: 'Course description is required'
            })
        }

        //Check if course time is entered
        if (!time) {
            return res.json({
                error: 'Course time is required'
            })
        }

        //Check if course subject is entered
        if (!subject) {
            return res.json({
                error: 'Select a subject'
            })
        }

        //Check if course price is entered
        if (!price) {
            return res.json({
                error: 'Course price is required'
            })
        }

        const rating = 0;
        
        const course = await Course.create({
            courseName,
            description,
            time,
            email,
            subject,
            price,
            rating
        });

        return res.json(course);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    tutorRegister,
    handleTutorLogin,
    tutorDetails,
    tutorList,
    tutorDetailsByEmail,
    createCourse
}