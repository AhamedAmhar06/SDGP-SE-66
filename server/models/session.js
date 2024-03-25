const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    tutorID: {
        type: String,
        required: true
    },
    fName : {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    reason: {
        type: String,
    },
    date: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    accepted: {
        type: Boolean,
        default: false
    },
    decline : {
        type: Boolean,
        default: false
    },
    completed: {
        type: Boolean,
        default: false
    },}
    , {timestamps: true} //add timestamps to the schema
);

const session = mongoose.model('session', sessionSchema);

module.exports = session;