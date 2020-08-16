import React from 'react';

function VideoInfo(props) {
  if (props.mainVideo === undefined) {
    return <p>Loading Videos</p>;
  }
  const { description, timestamp, channel, title } = props.mainVideo;

  let videoDate = new Date(timestamp);
  let formattedDate = videoDate.toLocaleDateString();
  // displaying the Video title, date, name, and description that
  // shows up just under the Main Movie Object
  return (
    <>
      <div className='video__container'>
        <div className='video__title'>{title}</div>
        <div className='video__channel-date'>
          <div className='video__channel'>By {channel} </div>
          <div className='video__date'>{formattedDate}</div>
        </div>
        <div className='video__description'>{description}</div>
      </div>
    </>
  );
}

export default VideoInfo;
