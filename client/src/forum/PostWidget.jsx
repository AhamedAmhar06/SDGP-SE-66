import React from 'react';
import { useDispatch } from 'react-redux';
import { likePost, addComment } from '../redux/actions/postActions';

const PostWidget = ({ post }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likePost(post._id)); // Assuming postId is stored in _id field
  };

  const handleComment = () => {
    // Implement your comment logic here
    const comment = 'Your comment logic here';
    dispatch(addComment(post._id, comment)); // Assuming postId is stored in _id field
  };

  return (
    <div className="post-widget">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleComment}>Comment</button>
    </div>
  );
};

export default PostWidget;
