import React, { useEffect } from 'react';
import PostWidget from '../forum/PostWidget';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';

const Forum = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="home-page">
      <div className="posts-container">
        {posts && posts.map((post) => (
          <PostWidget
            key={post.id}
            postId={post.id}
            title={post.title} // Replace with the appropriate property from your post object
            content={post.content} // Replace with the appropriate property from your post object
          />
          
        ))}
        
      </div>
    </div>
  );
};

export default Forum;
