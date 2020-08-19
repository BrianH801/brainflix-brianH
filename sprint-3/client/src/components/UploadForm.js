import React from 'react';
import axios from 'axios';
import Header from './Header';
import Bicycle from '../assets/images/Upload-video-preview.jpg';


  function postUpload(postObj) {
    console.log(postObj);
    axios
      .post(`http://localhost:5000/addVideo/`, postObj)
      .then((response) => {
        // if the response is fullfilled move on to process data
        // getComments();
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
  //This is the upload form that will be used to save data to the
  //server object that we will be builiding

  UploadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const isDataValid = validateData(event);
    if (!isDataValid) {
      alert('Please Enter Required Data');
    } else {
      const title = event.target.title.value;
      const description = event.target.description.value;

      postUpload({ title: title, description: description });
      event.target.reset();
    }
  });

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
        <form id='upLoadForm'>
          <div className='upload__form'>
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
              <button type='cancel'>CANCEL</button>
              <button type='submit'>PUBLISH</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
default export UploadForm;