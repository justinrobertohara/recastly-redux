import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = q => {
  //TODO:  Write an asynchronous action to handle a video search!
  var options = { YOUTUBE_API_KEY, q };

  var videos = searchYouTube(options);

  return { type: searchYouTube, videos: videos };

  return searchYouTube(options);
};

export default handleVideoSearch;
