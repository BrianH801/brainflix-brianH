import React from 'react';

function Comment({ id, date, name, comment }) {
  return (
    <li className='comment__id' id={id}>
      <div className='comment__name-date'>
        <div className='comment__name'>
          <h2>{name}</h2>
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
    </li>
  );
}
export default Comment;
