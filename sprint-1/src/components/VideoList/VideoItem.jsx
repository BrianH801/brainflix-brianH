import React from 'react';

function VideoItem(props) {
  return (
    <li className='video__list container flex-wrapper'>
      <p>{props.videoData.image}</p>
      <h3>{props.videoData.title}</h3>
      <p>{props.videoData.author}</p>
    </li>
  );
}

export default VideoItem;
