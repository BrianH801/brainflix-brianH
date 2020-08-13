import React from 'react';

function VideoInfo(props) {
  return (
    <div>
      {/* Displaying the title of the BMX Movie */}
      <h2>{props.mainVideo.title}</h2>
      {/* Displaying the name of the commentator */}
      <h2>
        {props.mainVideo.channel}
        {props.mainVideo.timestamp}
      </h2>
      <h2>{props.mainVideo.description}</h2>
    </div>
  );
}

export default VideoInfo;
