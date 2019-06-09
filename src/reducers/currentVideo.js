import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    return (state = action.video);
  } else {
    return state;
  }
};

export default currentVideoReducer;
