import React from 'react';

const Banner = (props) => {
  return (
    <div className='banner'>
      <div className='banner__video'>
        <video controls poster={props.mainVideo.image}>
          <source src={props.mainVideo.video} type='video/mp4' />
        </video>
      </div>
    </div>
  );
};

export default Banner;
