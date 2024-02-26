const Undergrad = require('../models/undergrad');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const { EMAIL, PASSWORD } = process.env;


const test = (req, res) => {
    const otp = `${Math.floor(100000 + Math.random() * 900000)}`
    res.json({otp})
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



// Send OTP verification
const OTPVerification = async (req, res) => {
    try {
        const { userEmail, serverOTP } = req.body;

        const email = userEmail;

        const exist1 = await Undergrad.findOne({ email });
        
        if (exist1) {
            console.log(exist1);
            return res.json({
                error: 'Email already exists'
            })
        };

        // console.log(userEmail, serverOTP);
        // // Configure transporter for Gmail
        // const transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: EMAIL,
        //         pass: PASSWORD
        //     }
        // });

        // // Create Mailgen instance and generate email content
        // const MailGenerator = new Mailgen({
        //     theme: 'cerberus',
        //     product: {
        //         name: 'UndergradUpLift',
        //         link: 'https://www.iit.ac.lk/'
        //     }
        // });

        // const emailContent = {
        //     body: {
        //         name: 'Testing Brother',
        //         intro: 'Welcome to Undergrad! We are very excited to have you on board.',
        //         action: {
        //             instructions: 'Requested OTP is given below',
        //             button: {
        //                 color: '#22BC66',
        //                 text: serverOTP
        //                 // link: 'https://www.iit.ac.lk/'
        //             }
        //         },
        //         outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        //     }
        // };

        // const mail = MailGenerator.generate(emailContent);

        // // Define message object
        // const message = {
        //     from: EMAIL,
        //     to: userEmail,
        //     subject: 'Confirm Email Address',
        //     html: mail
        // };

        // // Send email
        // const info = await transporter.sendMail(message);

        // // Log message ID and preview URL for testing
        // console.log('Message ID:', info.messageId);
        // console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

        // return res.status(201).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'An error occurred while sending the email' });
    }
}

// Send profile
const getProfileMail = async (req, res) => {
    try {
        // const { userEmail } = req.body;
        const userEmail = "begokak609@lendfash.com";

        // Validate user email
        if (!userEmail) {
            return res.status(400).json({ error: 'User email is required' });
        }

        // Configure transporter for Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        });

        // Create Mailgen instance and generate email content
        const MailGenerator = new Mailgen({
            theme: 'cerberus',
            product: {
                name: 'UndergradUpLift',
                link: 'https://www.iit.ac.lk/'
            }
        });

        const emailContent = {
            body: {
                name: 'Testing Brother',
                intro: 'Welcome to Undergrad! We are very excited to have you on board.',
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        };

        const mail = MailGenerator.generate(emailContent);

        // Define message object
        const message = {
            from: EMAIL,
            to: userEmail,
            subject: 'Welcome to Undergrad!',
            html: mail
        };

        // Send email
        const info = await transporter.sendMail(message);

        // Log message ID and preview URL for testing
        console.log('Message ID:', info.messageId);
        console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

        return res.status(201).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'An error occurred while sending the email' });
    }
}

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
                res.cookie('token', token).json(user)
            });
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

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    logout,
    OTPVerification,
    getProfileMail
}