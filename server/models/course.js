const mongoose = require('mongoose');
const {Schema} = mongoose;

const courseSchema = new Schema({
    courseName : {
        type: String,
    },
    description : {
        type: String,
    },
    time : { //Time duration of the course
        type: String,
    },
    subject : {
        type: String,
    },
    price : {
        type: Number,
    },
    rating : {
        type: mongoose.Decimal128,
    },
    email : {
        type: String,
    },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;