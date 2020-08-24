import React from 'react';
import { Link } from 'react-router-dom';

//The videolist component compiles and displays the images on the right
//sidebar. The videos are iterated through using the map method to
//build an array that is Routed to the main movie and description on the
//BrainFlix home page

function VideoList(props) {
  console.log('VideoList videos container', props.videos);
  if (props.videos === undefined) {
    return <p>Loading Videos</p>;
  }

  return (
    <ul className='videos__list'>
      <div className='videos__next-video'>NEXT VIDEO</div>
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
