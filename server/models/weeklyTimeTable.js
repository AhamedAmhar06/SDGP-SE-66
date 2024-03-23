const mongoose = require('mongoose');

const weeklyTimeTableSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    Monday: [
        {
            startTime: {
                type: String,
            },
            endTime: {
                type: String,
            }
        }
    ],
    Tuesday: [
        {
            startTime: {
                type: String,
            },
            endTime: {
                type: String,
            }
        }
    ],
    Wednesday: [
        {
            startTime: {
                type: String,
            },
            endTime: {
                type: String,
            }
        }
    ],
    Thursday: [
        {
            startTime: {
                type: String,
            },
            endTime: {
                type: String,
            }
        }
    ],
    Friday: [
        {
            startTime: {
                type: String,
            },
            endTime: {
                type: String,
            }
        }
    ],
    Saturday: [
        {
            startTime: {
                type: String,
            },
            endTime: {
                type: String,
            }
        }
    ],

    Sunday: [
        {
            startTime: {
                type: String,
            },
            endTime: {
                type: String,
            }
        }
    ]
    }
);