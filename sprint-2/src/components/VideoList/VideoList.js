import React from 'react';
import { Link } from 'react-router-dom';

function VideoList(props) {
  console.log('VideoList videos', props.videos);
  if (props.videos === undefined) {
    return <p>Loading Videos</p>;
  }
  return (
    <ul className='videos__list container'>
      {props.videos.map((video) => (
        <div className='videos__poster-container'>
          <div key={video.id} className='videos'>
            <Link to={`/video/${video.id}`}>
              <img
                src={video.image}
                alt={video.title}
                className='videos__poster'
              />
            </Link>
            <div className='videos__container'>
              <div className='videos__title'>{video.title}</div>
              <div className='videos__channel'>{video.channel}</div>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}
export default VideoList;
