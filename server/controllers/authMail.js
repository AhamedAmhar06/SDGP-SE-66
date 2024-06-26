const Undergrad = require('../models/undergrad');
const Tutor = require('../models/tutor');
// const { hashPassword, comparePassword } = require('../helpers/auth');
// const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const { EMAIL, PASSWORD } = process.env;


// Send OTP verification
const OTPVerification = async (req, res) => {
    try {
        const { userEmail, serverOTP, fName, lName } = req.body;

        const email = userEmail;

        const exist1 = await Undergrad.findOne({ email });
        
        if (exist1) {
            console.log(exist1);
            return res.json({
                error: 'Email already exists'
            })
        };

        console.log(userEmail, serverOTP);
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
                name: `${fName} ${lName}`,
                intro: 'Welcome to Undergrad! We are very excited to have you on board.',
                action: {
                    instructions: 'Requested OTP is given below',
                    button: {
                        color: '#22BC66',
                        text: serverOTP
                        // link: 'https://www.iit.ac.lk/'
                    }
                },
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        };

        const mail = MailGenerator.generate(emailContent);

        // Define message object
        const message = {
            from: EMAIL,
            to: userEmail,
            subject: 'Confirm Email Address',
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

// Send Code when password is forgotten
const sendCode = async (req, res) => {
    try {
        const { userEmail, serverOTP } = req.body;

        const email = userEmail;

        const exist = await Undergrad.findOne({ email });

        console.log(userEmail, serverOTP);

        
        if (!exist) {
            return res.json({
            error: 'Email not found'
            })
        };

        console.log(exist.fName , exist.lName);
        
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
                name: `${exist.fName} ${exist.lName}`,
                intro: 'Please use the following code to reset your password. If you did not request a password reset, please ignore this email. Your code is valid for 10 minutes.',
                action: {
                    instructions: 'Requested OTP is given below',
                    button: {
                        color: '#22BC66',
                        text: serverOTP
                    }
                },
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        };

        const mail = MailGenerator.generate(emailContent);

        // Define message object
        const message = {
            from: EMAIL,
            to: userEmail,
            subject: 'Forgot Password',
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

//Generate OTP for the tutor registration
const tutorRegisterOTP = async (req, res) => {
    // const { fName, lName, email, university, studyLevel, password, confirmPassword } = req.body;
    const { email, serverOTP } = req.body;
    
    try {
        
        if (!email) {
            return res.json({
                error: 'Email is required'
            })
        };
        console.log(email, serverOTP);
        const undergrad = await Undergrad.findOne({ email });
        
        if (!undergrad) {
            return res.json({
                error: 'Register as an Undergraduate first'
            })
        };

        if(undergrad){
            const tutor = await Tutor.findOne({ email });
            if (tutor) {
                return res.json({
                    error: 'Already registered as a tutor'
                })
            };
        }
       
        const fName = undergrad.fName;
        const lName = undergrad.lName;

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
                name: `${fName} ${lName}`,
                intro: 'Please use the following code to create the Tutor profile. If you did not request a OTP, please ignore this email. Your code is valid for 10 minutes.',
                action: {
                    instructions: 'Requested OTP is given below',
                    button: {
                        color: '#22BC66',
                        text: serverOTP
                    }
                },
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        };

        const mail = MailGenerator.generate(emailContent);

        // Define message object
        const message = {
            from: EMAIL,
            to: email,
            subject: 'Tutor Registration OTP',
            html: mail
        };

        // Send email
        const info = await transporter.sendMail(message);

        // Log message ID and preview URL for testing
        console.log('Message ID:', info.messageId);
        console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

        return res.status(201).json({ message: 'Email sent successfully' });
        
        // return res.json({
        //     message: 'Email verified'
        // })
        

    } catch (error) {
        console.log(error);
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

module.exports = { 
    OTPVerification,
    sendCode, 
    tutorRegisterOTP
};