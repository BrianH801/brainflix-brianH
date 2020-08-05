import React from 'react';

const Banner = () => {
  return (
    <div className='banner flex-wrapper container'>
      <div className='video-player'>
        <source src='./assets/Video/BrainStation-vid.mp4' type='video/mp4' />
      </div>
    </div>
  );
};

export default Banner;
