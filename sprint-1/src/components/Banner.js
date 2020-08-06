import React from 'react';
import video from '../assets/Video/BrainStation-vid.mp4';

const Banner = () => {
  return (
    <div className='banner flex-wrapper container'>
      <div className='video__container'>
        <section className='video__player' controls>
          <video src={video} alt='brainflix video' />
        </section>
      </div>
    </div>
  );
};

export default Banner;
