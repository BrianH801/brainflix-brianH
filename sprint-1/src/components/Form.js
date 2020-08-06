import React from 'react';

const Form = () => {
  return (
    <div className='form__container flex-wrapper container'>
      <form id='form'>
        <div id='dateForm' name='dateForm'></div>
        <label class='form__label'>NAME</label>
        <input
          class='form__input'
          type='text'
          name='name'
          placeholder='Mohan Muruge'
        />
        <label class='form__label'>COMMENT</label>
        <textarea name='comment' placeholder='Add a new comment'></textarea>
        <button type='submit'>COMMENT</button>
      </form>
    </div>
  );
};

export default Form;
