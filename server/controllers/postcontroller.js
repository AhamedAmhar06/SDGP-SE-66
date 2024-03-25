const Post = require('../models/post');
const Undergrad = require('../models/undergrad');

exports.createPost = async (req, res) => {
  try {
    const { undergradId, description } = req.body;
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addReply = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.replies.push({ undergradId: req.body.undergradId, message: req.body.text });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.upvotePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    post.votes.push({ undergradId: req.body.undergradId, value: 1 });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.downvotePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    post.votes.push({ undergradId: req.body.undergradId, value: -1 });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Undergrad controller
// Undergrad controller


exports.getUndergradDetails = async (req, res) => {
  try {
      const { id } = req.body;
      const undergrad = await Undergrad.findById(id)
      // console.log(undergrad);
      return res.json(undergrad);
  } catch (error) {
      console.error('Error in getUndergradDetails:', error);
      res.status(500).json({ message: error.message });
  }
};