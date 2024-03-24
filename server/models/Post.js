const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Undergrad',
        required: true,
    },
    description: String,
    picturePath: String,
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Undergrad',
        },
    ],
    comments: [
        {
            text: String,
            postedBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Undergrad',
            },
            replies: [
                {
                    text: String,
                    postedBy: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Undergrad',
                    },
                },
            ],
        },
    ],
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
