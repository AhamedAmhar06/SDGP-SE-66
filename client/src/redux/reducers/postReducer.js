// postReducer.js
import { SET_POSTS, LIKE_POST, ADD_COMMENT, ADD_POST, SET_ERROR } from '../actions/types';

const initialState = {
  posts: [],
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        error: null,
      };
    case LIKE_POST:
      // Handle liking a post
      return state; // Return updated state
    case ADD_COMMENT:
      // Handle adding a comment to a post
      return state; // Return updated state
    case ADD_POST:
      // Handle adding a new post
      return state; // Return updated state
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
