const mongoose = require('mongoose');
const {Schema} = mongoose;

const undergradSchema = new Schema({
    fName : {
        type: String,
        // required: true
    },
    lName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        unique: true,
        // required: true
    },
    university : {
        type: String,
        // required: true
    },
    studyLevel : {
        type: String,
        // required: true
    },
    password : {
        type: String,
        // required: true
    },
    // confirmPassword : {
    //     type: String,
    //     required: true
    // }
});

const Undergrad = mongoose.model('Undergrad', undergradSchema);

module.exports = Undergrad;