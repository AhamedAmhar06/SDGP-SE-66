// src/redux/store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/postReducer'; // Import your root reducer
import postSaga from './sagas/postSaga'; // Import your saga

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(postSaga);

export default store;
