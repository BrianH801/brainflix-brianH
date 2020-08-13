import React from 'react';
import avatar from '../assets/images/Mohan-muruge.jpg';

const CommentForm = ({ handleSubmitComment }) => {
  return (
    <>
      <div className='form-container container'>
        <div className='form__avatar'>
          <img src={avatar} alt='brainflix avatar' />
        </div>
        <form id='formID' onSubmit={handleSubmitComment}>
          <div className='form__banner'>
            <h3>JOIN THE CONVERSATION</h3>
          </div>
          <div className='form__inner-container'>
            <div className='form__name-date'>
              <div id='dateForm' className='dateForm'></div>
              <textarea
                className='form__textarea'
                id='formComment'
                name='comment'
                placeholder='Write a comment here'
              />
            </div>
            <div className='form__button'>
              <button type='submit'>COMMENT</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
