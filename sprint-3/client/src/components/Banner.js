import React from 'react';

//The BannerComponent displays the main video when the image in the
//sidebar is selected.

const Banner = (props) => {
  if (props.mainVideo === undefined) {
    return <p>Loading Videos</p>;
  }
  //Deconstructed props to pull out imahe
  const { image } = props.mainVideo;
  return (
    <div className='banner container'>
      <video className='banner__poster' controls poster={image}>
        <source src={image} type='video/mp4' />
      </video>
    </div>
  );
};

export default Banner;
