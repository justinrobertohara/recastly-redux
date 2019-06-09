import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';
import App from '../components/App.js';
import handleVideoSearch from '../actions/search.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

// var defaultState = handleVideoSearch('redux tutorials');

const configureStore = createStore(
  rootReducer,
  { videoList: exampleVideoData, currentVideo: exampleVideoData[0] },
  applyMiddleware(thunk)
);
export default configureStore;
