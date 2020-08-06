import React from 'react';

function VideoItem(props) {
  return (
    <li className='video__list container flex-wrapper'>
      <img src='/images/video-list-3.jpg' />
      <h3>{props.videoData.title}</h3>
      <p>{props.videoData.channel}</p>
    </li>
  );
}

export default VideoItem;
