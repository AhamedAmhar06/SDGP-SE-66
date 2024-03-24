// postActions.js
import axios from 'axios';
import { FETCH_POSTS, SET_POSTS, LIKE_POST, ADD_COMMENT, ADD_POST, SET_ERROR } from './types';

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export const likePost = (postId) => ({
  type: LIKE_POST,
  payload: postId,
});

export const addComment = (postId, comment) => ({
  type: ADD_COMMENT,
  payload: { postId, comment },
});

export const addPost = (postData) => ({
  type: ADD_POST,
  payload: postData,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
