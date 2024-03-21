const mongoose = require('mongoose');
const {Schema} = mongoose;

const undergradSchema = new Schema({
    fName : {
        type: String,
    },
    lName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        unique: true,
    },
    university : {
        type: String,
    },
    studyLevel : {
        type: String,
    },
    password : {
        type: String,
    },
    Members: {
        type: Array,
        default: [],
    }    

});

const Undergrad = mongoose.model('Undergrad', undergradSchema);

module.exports = Undergrad;