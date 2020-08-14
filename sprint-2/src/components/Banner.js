import React from 'react';

const Banner = (props) => {
  return (
    <div className='banner container'>
      <video className='banner__poster' controls poster={props.mainVideo.image}>
        <source src={props.mainVideo.video} type='video/mp4' />
      </video>
    </div>
  );
};

export default Banner;
