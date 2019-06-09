import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from '../actions/currentVideo.js';

const mapStateToProps = state => {
  return {
    video: state.currentVideo
  };
};

// const mapDispatchToProps = video => {
//   return changeVideo(video);
// };

const mapDispatchToProps = dispatch => {
  return {
    changeVideo: () => dispatch(changeVideo(video))
  };
};

var VideoPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
