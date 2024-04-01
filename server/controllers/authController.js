const Undergrad = require('../models/undergrad');
const Notification = require('../models/notification');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const { EMAIL, PASSWORD } = process.env;


const test = async(req, res) => {
    // console.log('Hello');
    const email = "Check";
    console.log(email);
    res.json()
}

const registerUser = async (req, res) => {
    try {
        const { fName, lName, email, university, studyLevel, password, confirmPassword } = req.body;

        //Check if name was entered
        if (!fName || !lName) {
            return res.json({
                error: 'Name is required'
            })
        };

        //Check university was entered
        if (!university) {
            return res.json({
                error: 'University is required'
            })
        }

        //Check if study level was entered
        if (!studyLevel) {
            return res.json({
                error: 'Study level is required'
            })
        }

        //Check if password has been entered with correct length
        if (password.length < 6) {
            return res.json({
                error: 'Password must be at least 6 characters long'
            })
        };

        // Check if password is matched
        if (password !== confirmPassword) {
            return res.json({
                error: 'Password must be matched'
            })
        };

        //Check if email is valid
        const exist = await Undergrad.findOne({ email });
        if (exist) {
            return res.json({
                error: 'Email already exists'
            })
        };
        
        const hashedPassword = await hashPassword(password);

        //Create new user
        const undergrad = await Undergrad.create({
            fName,
            lName,
            email,
            university,
            studyLevel,
            password : hashedPassword
        });

        //Create a notification
        const message = `Welcome to Undergrad UpLift ${fName}!`;
        const notification = await Notification.create({
            email,
            message
        });
        
        return res.json(undergrad)
        
    } catch (error) {
        console.log(error);
    }
};


//login user
const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;

        //Check if email and password are entered
        if (!email || !password) {
            return res.json({
                error: 'Email and password are required'
            })
        };

        //Check if password lenght is correct
        if (password.length < 6) {
            return res.json({
                error: 'Password must be at least 6 characters long'
            })
        };

        //Check if user exists
        const user = await Undergrad.findOne({email});
        if (!user) {
            return res.json({
                error: 'No user found'
            })
        };

        //Check if password is correct
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.json({
                error: 'Incorrect password'
            })
        };

        if (match) {
            // res.json('Login successful')
            jwt.sign({
                email: user.email,
                id: user._id,
                fName: user.fName,
                lName: user.lName,
                university: user.university,
                studyLevel: user.studyLevel
            }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                try{
                    res.cookie('token', token, {
                        httpOnly: true,
                        secure: true,
                        sameSite: 'none',
                    }).json(user);
                console.log(token);
                } catch(err){
                    console.log(err);
                    res.cookie('token', err).json(user)
                    response.json({error: 'Error logging in'})
                }
            });
        }
        else {
            res.json('Login failed')
        }

    } catch (error) {
        console.log(error);
    }
}

//get user profile
const getProfile = (req, res) => {
    const {token} = req.cookies
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

//Logout user
const logout = async (req, res) => {
    try {
        //Clear cookie
        res.clearCookie('token');
        res.json('Logged out');
    } catch (error) {
        console.log(error);
        res.json('Error logging out');
    }
}

//Reset password
const resetPassword = async (req, res) => {
    try {
        const { userEmail, password } = req.body;

        console.log(userEmail, password);

        //Check if email is valid
        const user = await Undergrad.findOne({ email: userEmail });
        // if (!user) {
        //     return res.json({
        //         error: 'Email not found'
        //     })
        // };

        //Check if password has been entered with correct length
        if (password.length < 6) {
            return res.json({
                error: 'Password must be at least 6 characters long'
            })
        };

        const hashedPassword = await hashPassword(password);

        //Update password
        user.password = hashedPassword;
        user.save(); 
        return res.json(user);

    } catch (error) {
        console.log(error);
    }
}

const editProfile = async (req, res) => {
    try {
        const { fName, lName, email, university, studyLevel } = req.body;

        //Load the user
        const user = await Undergrad.findOne({ email});

        const updatedUser = await Undergrad.findByIdAndUpdate(
            user._id,
            {
                fName,
                lName,
                university,
                studyLevel
            },
            { new: true }
        );
        res.json(updatedUser);
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    logout,
    resetPassword,
    editProfile
}