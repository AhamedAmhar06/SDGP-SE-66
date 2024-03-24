import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setPosts, setError } from '../actions/postActions';
import { FETCH_POSTS } from '../actions/types';

function* fetchPostsSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:8000/posts');
    yield put(setPosts(response.data));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* postSaga() {
  yield takeEvery(FETCH_POSTS, fetchPostsSaga);
}

export default postSaga;
