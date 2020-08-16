import React from 'react';
import Header from './Header';
import Bicycle from '../assets/images/Upload-video-preview.jpg';

//This is the upload form that will be used to save data to the
//server object that we will be builiding

function UploadForm() {
  return (
    <>
      <Header />
      <section className='upload__form-container container'>
        <div className='upload__slogan'>
          <h1>Upload Video</h1>
        </div>
        <div className='upload__bicycle'>
          <img src={Bicycle} alt='' />
        </div>
        <form className='upload__form'>
          <label className='upload__label'>TITLE YOUR VIDEO</label>
          <input
            className='upload__input'
            type='text'
            name='name'
            placeholder='Add a title to your video'
          />
          <label className='upload__label'>ADD A COMMENT</label>
          <textarea
            className='upload__textarea'
            name='comment'
            placeholder='Add a description of your video'
          ></textarea>
          <div className='upload__button-container'>
            <button type='submit'>CANCEL</button>
            <button type='submit'>PUBLISH</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default UploadForm;
