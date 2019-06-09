import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = q => {
  // //TODO:  Write an asynchronous action to handle a video search!

  console.log('we have clicked the button', q);

  var searchInput = searchYouTube({ YOUTUBE_API_KEY, q }, data => {
    console.log('heres our data', data);
  });

  // return dispatch => {
  //   searchYouTube({ YOUTUBE_API_KEY, searchInput }, videos => {
  //     dispatch(changeVideoList(videos));
  //     dispatch(changeVideo(videos[0]));
  //     console.log('is this video', videos);
  //   });
  // };

  return dispatch => {
    searchYouTube({ YOUTUBE_API_KEY, q }, videos => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });
  };
};
export default handleVideoSearch;
