import React from 'react';

//The BannerComponent displays the main video when the image in the
//sidebar is selected.

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
