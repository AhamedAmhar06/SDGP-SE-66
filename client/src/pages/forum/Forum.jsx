import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PostWidget from './PostWidget';
import UndergradName from '../../components/UndergradName';
import { UndergradContext } from '../../context/undergradContext';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

function Forum() {

  const [posts, setPosts] = useState([]);
  const [showWidget, setShowWidget] = useState(false);
  const [newReply, setNewReply] = useState({});
  const [votePosted, setVotePosted] = useState(false);
  const { undergradId } = useContext(UndergradContext);
  const [undergradID, setUndergradID] = useState('');
  const [undergradLoaded, setUndergradLoaded] = useState(false);
  const { undergrad } = useContext(UndergradContext);

  useEffect(() => {
    axios.get('/posts')
      .then(response => {
        const sortedPosts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(sortedPosts);
      });
  }, []);

  //Load the undergrad ID
  useEffect(() => {
    const fetchUndergrad = async () => {
      try {
        if(undergrad){
          setUndergradID(undergrad.id);
          setUndergradLoaded(true);
          console.log(undergradID);
        }
      }
      catch (error) {
        console.error(error);
      }
    };
    fetchUndergrad();
  }, [undergrad, undergradLoaded]);

  const handlePostSubmit = (description) => {
    axios.post('/posts', { description, undergradId: undergradID }) // Change 'undergradID' to 'undergradId'
      .then(response => {
        setPosts(prevPosts => [response.data, ...prevPosts]);
        console.log(description, undergrad.id);
        setShowWidget(false);
      });
  };

  const handleReplySubmit = (postId) => {
    axios.post(`/posts/${postId}/replies`, { text: newReply[postId], undergradId: undergradID }) // Keep 'undergradId' as it is
      .then(response => {
        setPosts(posts.map(post => post._id === postId ? { ...post, replies: [...post.replies, response.data] } : post));
        setNewReply(prevReplies => ({ ...prevReplies, [postId]: '' }));
        window.location.reload();
      });
  };

  const handleUpvote = (postId) => {
    axios.put(`/posts/${postId}/upvote`)
      .then(response => {
        setPosts(posts.map(post => post._id === postId ? response.data : post));
      });
  };

  const handleDownvote = (postId) => {
    axios.put(`/posts/${postId}/downvote`)
      .then(response => {
        setPosts(posts.map(post => post._id === postId ? response.data : post));
      });
  };

  return (
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <div className="p-4">
            <button className="mb-4 px-4 py-2 w-full bg-blue-500 text-white rounded" onClick={() => setShowWidget(!showWidget)}>New Post</button>
            {showWidget && <PostWidget onPostSubmit={handlePostSubmit} />}
          </div>
          {posts.map(post => (
            <div key={post._id} className="p-4 my-4 bg-white rounded shadow-lg flex">
              <div className="mr-4 flex flex-col items-center">
                <button className="mb-2 px-4 py-2 bg-green-500 text-white rounded" onClick={() => handleUpvote(post._id)}><FiArrowUp /></button>
                <p>{post.votes.reduce((total, vote) => total + vote.value, 0)}</p>
                <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded" onClick={() => handleDownvote(post._id)}><FiArrowDown /></button>
              </div>
              <div className="flex-grow">
                <UndergradName undergrad_ID={post.undergradId} className="font-bold" />
                <p className="mt-2">{post.description}</p>
                <input className="mt-2 p-2 w-full border border-gray-200 rounded" value={newReply[post._id] || ''} onChange={e => setNewReply(prevReplies => ({ ...prevReplies, [post._id]: e.target.value }))} />
                <div className="mt-2 flex justify-between">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => handleReplySubmit(post._id)}>Reply</button>
                </div>
                {post.replies.map((reply, index) => (
                  <div key={index} className="mt-4 pl-4 border-l border-gray-200">
                    <UndergradName undergrad_ID={reply.undergradId} className="font-bold" />
                    <p className="mt-2">{reply.message}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Forum;