const mongoose = require('mongoose');
const {Schema} = mongoose;

const tutorSchema = new Schema({
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
    subjects : {
        type: [String],
    },
    rating : {
        type: mongoose.Decimal128,
    },
    reviews : {
        type: [String],
    },
    price : {
        type: Number,
    },
});

const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = Tutor;