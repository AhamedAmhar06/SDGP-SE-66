const mongoose = require('mongoose');
const {Schema} = mongoose;

const notificationSchema = new Schema({
    email : {
        type: String,
    },
    message : {
        type: String,
    },
    read : {
        type: Boolean,
        default: false
    },
    }, {timestamps: true} //add timestamps to the schema
);

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;