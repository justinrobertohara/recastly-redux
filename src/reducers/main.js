import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = (state = {}, action) => {
  return combineReducers({ currentVideo, videoList });
  //function todoApp(state = {}, action) {
  // return {
  //   visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  //   todos: todos(state.todos, action)
  // }
};

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
