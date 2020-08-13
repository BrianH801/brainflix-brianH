import React from 'react';
import { Link } from 'react-router-dom';

function VideoList(props) {
  console.log('VideoList videos', props.videos);
  if (props.videos === undefined) {
    return <p>Loading Videos</p>;
  }
  return (
    <ul className='video__list container'>
      {props.videos.map((video) => (
        <div key={video.id} className='videos'>
          <Link to={`/video/${video.id}`}>
            <img src={video.image} alt={video.title} className='poster' />
          </Link>
          <h5>{video.title}</h5>
        </div>
      ))}
    </ul>
  );
}
export default VideoList;
