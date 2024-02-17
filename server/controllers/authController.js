const Undergrad = require('../models/undergrad');
const { hashPassword, comparePassword } = require('../helpers/auth');

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
}

module.exports = {
    test,
    registerUser
}