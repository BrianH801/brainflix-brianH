import React from 'react';
import avatar from '../assets/images/Mohan-muruge.jpg';

const CommentForm = ({ handleSubmitComment }) => {
  return (
    <>
      <div className='form__container flex-wrapper container'>
        <section className='form__article container flex-wrapper'>
          <div className='form__caption-container'>
            <div className='form__hightlight'>
              <h1>BMX Rampage: 2018 Highlights</h1>
            </div>
            <div className='form__author-date'>
              <div className='form__author'>By Red Cow</div>
              <div className='form__date'>12/18/2018</div>
            </div>
          </div>
          <p>
            On a gusty day in Southern Utah, a group of 25 daring mountain
            bikers blew the doors off what is possible on two wheels, unleashing
            some of the biggest moments the sport has ever seen. While mother
            nature only allowed for one full run before the conditions made it
            impossible to ride, that was all that was needed for event veteran
            Kyle Strait, who won the event for the second time -- eight years
            after his first Red Cow Rampage title
          </p>
        </section>
        <div className='form__avatar'>
          <img src={avatar} alt='brainflix avatar' />
        </div>
        <form id='formID' onSubmit={handleSubmitComment}>
          <div className='form__banner'>
            <h3>JOIN THE CONVERSION</h3>
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
