const Undergrad = require('../models/undergrad');
const Tutor = require('../models/tutor');
const Course = require('../models/course');
const Notification = require('../models/notification');
const Session = require('../models/session');
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

            const notification = await Notification.create({
                email,
                message: `Congratulations ${fName}! You are now a tutor`
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

const requestSession = async (req, res)=> {
    try {
        const { email, fName, lName, tutorID, subject, reason, date, startTime, endTime } = req.body;
         
        //Check if subject is entered
        if (!subject) {
            return res.json({
                error: 'Select the subject'
            })
        }

        //Check if reason is entered
        if (!reason) {
            return res.json({
                error: 'Reason is required'
            })
        }

        //Check if date is entered
        if (!date) {
            return res.json({
                error: 'Date is required'
            })
        }

        //Check if start time is entered
        if (!startTime) {
            return res.json({
                error: 'Start time is required'
            })
        }

        //Check if end time is entered
        if (!endTime) {
            return res.json({
                error: 'End time is required'
            })
        }

        const tutor = await Tutor.findById(tutorID);
        const undergrad = await Undergrad.findOne({ email });

        //If all data are entered, create session
        const session = await Session.create({
            tutorID,
            fName,
            lName,
            email,
            subject,
            reason,
            date,
            startTime,
            endTime
        })
        
        const notification = await Notification.create({
            email : tutor.email,
            message: `Please check your sessions for a new request from ${undergrad.fName} ${undergrad.lName}`
        });

        return res.json(session);

    } catch (error) {
        console.log(error);
    }
}

//Retrieve requests
const fetchRequests = async (req, res) => {
    try {
        const { id } = req.body;
        // console.log(id);
        const tutorID = id;
        const request = await Session.find({ tutorID });
        return res.json(request);
    }
    catch (error) {
        console.log(error);
    }
};

//Session Acceptance
const acceptSession = async (req, res) => {
    try {
        const { id } = req.body;
        const session = await Session.findByIdAndUpdate(
            req.params.id,
            { accepted: true, decline: false},
            { new: true }
        );
        res.json(session);
    } catch (error) {
        console.log(error);
    }
}

//Session Decline
const declineSession = async (req, res) => {
    try {
        const { id } = req.body;
        const session = await Session.findByIdAndUpdate(
            req.params.id,
            { decline: true, accepted: false},
            { new: true }
        );
        res.json(session);
    } catch (error) {
        console.log(error);
    }
}

//Get requests
const getRequests = async (req, res) =>{
    try {
        const { id } = req.body;
        //Get undergrad email
        const undergrad = await Undergrad.findById(id);
        const email = undergrad.email;
        //Get all requests related to the undergrad email
        const requests = await Session.find({ email });
        return res.json(requests);

    } catch (error) {
        console.log(error);
    }

}

//Mark as completed
const markAsCompleted = async (req, res) => {
    try {
        const session = await Session.findByIdAndUpdate(
            req.params.id,
            { completed: true },
            { new: true }
        );
        res.json(session);
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
    createCourse,
    requestSession,
    fetchRequests,
    acceptSession,
    declineSession,
    getRequests,
    markAsCompleted
}