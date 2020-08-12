import React from 'react';
import { Link } from 'react-router-dom';
function VideoItem(props) {
  return (
    <li className='video__list'>
      <Link to={'/video/' + props.videoData.id}>
        <div className='video__image'>
          <img src={props.videoData.image} alt='' />
        </div>
        <div className='video__container'>
          <div className='video__title'>
            <h3>{props.videoData.title}</h3>
          </div>
          <div className='video__author'>
            <p>{props.videoData.author}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default VideoItem;
