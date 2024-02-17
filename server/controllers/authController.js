const Undergrad = require('../models/undergrad');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working')
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

        return res.json(undergrad)
        
    } catch (error) {
        console.log(error);
    }
};

//login user
const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;

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
            res.json('Login successful')
            jwt.sign({
                email: user.email,
                id: user._id,
                fName: user.fName,
                lName: user.lName,
                university: user.university,
                studyLevel: user.studyLevel
            }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user)
            });
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    test,
    registerUser,
    loginUser
}