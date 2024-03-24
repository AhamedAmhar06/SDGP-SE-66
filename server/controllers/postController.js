// controllers/post.controller.js
const Post = require('../models/post');

// Create a new post
const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const newPost = new Post({
            userId,
            description,
            picturePath,
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

// Like a post
const likePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.body.userId;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        const alreadyLiked = post.likes.includes(userId);
        if (alreadyLiked) {
            post.likes.pull(userId);
        } else {
            post.likes.push(userId);
        }
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

// Add a comment to a post
const addComment = async (req, res) => {
    try {
        const postId = req.params.id;
        const { userId, text } = req.body;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        const newComment = {
            text,
            postedBy: userId,
        };

        post.comments.push(newComment);
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = { createPost, likePost, addComment };
