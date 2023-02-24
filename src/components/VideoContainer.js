import React from 'react';
import DEFAULT_PATH from '../assets/Video/video.mp4';

const VideoContainer = ({ path = DEFAULT_PATH }) => {
  return (
    <div className='video-content'>
      <video src={path} width='100%' controls='controls' autoplay='true' />
    </div>
  );
};

export default VideoContainer;
