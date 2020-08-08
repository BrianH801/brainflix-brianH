import React from 'react';

function VideoItem(props) {
  return (
    <li className='video__list container flex-wrapper'>
      <div className='video__image'>
        <img src={props.videoData.image} />
      </div>
      <div className='video__container'>
        <div className='video__title'>
          <h3>{props.videoData.title}</h3>
        </div>
        <div className='video__author'>
          <p>{props.videoData.author}</p>
        </div>
      </div>
    </li>
  );
}

export default VideoItem;
