import React from 'react';

const Banner = (props) => {
  return (
    <div className='banner container'>
      <div className='banner__video'>
        <video controls>
          <source src={props.mainVideo.video} type='video/mp4' />
        </video>
      </div>
    </div>
  );
};

export default Banner;
