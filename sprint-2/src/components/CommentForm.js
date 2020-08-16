import React from 'react';
import avatar from '../assets/images/Mohan-muruge.jpg';

//The CommentForm is used on the BrainFlix main page except that
//it doesn't have the name field anymore.

const CommentForm = ({ handleSubmitComment }) => {
  return (
    <>
      <div className='form-container container'>
        <form id='formID' onSubmit={handleSubmitComment}>
          <div className='form__banner'>
            <h3>JOIN THE CONVERSATION</h3>
          </div>

          <div className='form__inner-container'>
            <div className='form__comment-button'>
              <div className='form__avatar'>
                <img src={avatar} alt='brainflix avatar' />
              </div>
              <textarea
                className='form__textarea'
                id='formComment'
                name='comment'
                placeholder='That was easily the most spectacular BMX moment ever.'
              />
              <button type='submit'>COMMENT</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
