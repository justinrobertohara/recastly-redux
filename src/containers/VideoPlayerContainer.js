import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from '../actions/currentVideo.js';

const mapStateToProps = ({ video }) => {
  return {
    video: video
  };
};

const mapDispatchToProps = { changeVideo };

var VideoPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
