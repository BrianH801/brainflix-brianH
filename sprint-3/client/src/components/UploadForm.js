import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Header from './Header';
import Bicycle from '../assets/images/Upload-video-preview.jpg';

//This is the upload form that will be used to save data to the
//server object that we will be builiding

function UploadForm() {
  function postUpload(postObj) {
    console.log(postObj);
    axios
      .post(`http://localhost:5000/videos/`, postObj)
      .then((response) => {
        console.log('This is what went to the server', response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function validateData(event) {
    const title = event.target.title.value;
    const description = event.target.description.value;

    return !!title && !!description;
  }
  // //This is the upload form that will be used to save data to the
  // //server object that we will be builiding
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const isDataValid = validateData(event);
    if (!isDataValid) {
      alert('Please Enter Required Data');
    } else {
      const id = uuidv4();
      const title = event.target.title.value;
      const channel = 'Red Cow';
      const image = 'https://i.imgur.com/l2Xfgpl.jpg';
      const description = event.target.description.value;
      const views = '1,001,023';
      const likes = '110,985';
      const duration = '4:01';
      const video = 'https://project-2-api.herokuapp.com/stream';
      const timestamp = new Date();
      const comments = [];

      postUpload({
        id: id,
        title: title,
        channel: channel,
        image: image,
        description: description,
        views: views,
        likes: likes,
        duration: duration,
        video: video,
        timestamp: timestamp,
        comments: comments,
      });
      event.target.reset();
    }
  };

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
        <form
          id='UpLoadForm'
          onSubmit={handleFormSubmit}
          className='upload__form'
        >
          <label className='upload__label'>TITLE YOUR VIDEO</label>
          <input
            className='upload__input'
            type='text'
            name='title'
            placeholder='Add a title to your video'
          />
          <label className='upload__label'>ADD A COMMENT</label>
          <textarea
            className='upload__textarea'
            name='description'
            placeholder='Add a description of your video'
          ></textarea>
          <div className='upload__button-container'>
            <button type='submit'>PUBLISH</button>
            <Link to='/' className='upload__cancel'>
              CANCEL
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default UploadForm;
