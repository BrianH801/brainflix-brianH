import React from 'react';

function Comment({ id, date, name, comment }) {
  return (
    <li className='comment__id' id={id}>
      <div className='comment__name-comment'>
        <div className='comment__name-date'>
          <div className='comment__name'>
            <h4>{name}</h4>
          </div>
          <div className='comment__date'>
            <p>{date}</p>
          </div>
        </div>
        <div className='comment__avatar-comment'>
          <div className='comment__avatar'></div>
          <div className='comment__comment'>
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
export default Comment;
