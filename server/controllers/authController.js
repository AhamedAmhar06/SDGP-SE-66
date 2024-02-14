const Undergrad = require('../models/undergrad');

const test = (req, res) => {
    res.json('test is working')
} 

const registerUser = async (req, res) => {
    try {
        const { fName, lName, email, university, studyLevel, password, confirmPassword } = req.body;

        //Check if name was entered
        if (!fName || !lName) {
            return res.json({
                error: 'name is required'
            })
        };

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
        
        const undergrad = await Undergrad.create({
            fName,
            lName,
            email,
            university,
            studyLevel,
            password
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