import React from 'react';

function VideoInfo(props) {
  if (props.mainVideo === undefined) {
    return <p>Loading Videos</p>;
  }
  const { description, timestamp, channel, title } = props.mainVideo;

  let videoDate = new Date(timestamp);
  let formattedDate = videoDate.toLocaleDateString();
  return (
    <>
      <div className='video__channel'>{title}</div>
      <div className='video__description'>{description}</div>
      <div className='video__channel'>{channel}</div>
      <div className='video__date'>{formattedDate}</div>
    </>
  );
}

export default VideoInfo;
