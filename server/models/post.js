// Post model
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    undergradId: String,
    description: String,
    replies: [{
        undergradId: String,
        message: String,
        createdAt: { type: Date, default: Date.now }
    }],
    votes: [{
        undergradId: String,
        value: Number // 1 for upvote, -1 for downvote
    }]
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);