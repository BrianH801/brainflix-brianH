import React from 'react';
import video from '../assets/images/video-list-0.jpg';

const Banner = () => {
  return (
    <div className='banner flex-wrapper container'>
      <div className='video__container'>
        <section className='video__player' controls>
          <img src={video} alt='brainflix video' />
        </section>
      </div>
    </div>
  );
};

export default Banner;
