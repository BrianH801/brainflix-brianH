import React from 'react';

const Banner = (props) => {
  return (
    <div className='banner container'>
      <div className='banner__video'>
        <section className='video__player' controls>
          <img src={props.mainVideo.image} alt='' />
        </section>
      </div>
    </div>
  );
};

export default Banner;
