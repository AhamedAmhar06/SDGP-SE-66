import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions/postActions';

const NewPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, content }));
    setTitle('');
    setContent('');
  };

  return (
    <div className="new-post-form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter content"></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default NewPostForm;
