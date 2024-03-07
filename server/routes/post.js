const express = require('express');
const Posts = require("../models/post");

const router = express.Router();

// save post
router.post('/post/save', (req, res) => {
    let newPost = new Posts(req.body);

    newPost.save()
        .then(savedPost => {
            return res.status(200).json({
                success: "Post Saved Successfully",
                post: savedPost
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err.message
            });
        });
});

// get post
router.get('/posts', (req, res) => {
    Posts.find().exec()
        .then(posts => {
            return res.status(200).json({
                success: true,
                existingPosts: posts
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err.message
            });
        });
});

// Update post
router.put('/post/update/:id', (req, res) => {
    Posts.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true } // Return the updated document
    )
        .then(updatedPost => {
            return res.status(200).json({
                success: "Updated Successfully",
                post: updatedPost
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err.message
            });
        });
});

// Delete post
router.delete('/post/delete/:id', (req, res) => {
    Posts.findByIdAndDelete(req.params.id)
        .then(deletePost => {
            return res.status(200).json({
                success: "Delete Successfully",
                deletedPost: deletePost
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: "Not Deleted successfully",
                message: err.message
            });
        });
});

module.exports = router;
