import React from 'react';

function Comment({ id, name, comment, date }) {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <li className='comment__id container flex-wrapper' id={id}>
      <div className='comment__name'>
        <h2>{name}</h2>
      </div>
      <div className='comment__comment'>
        <p>{comment}</p>
      </div>
      <time className='comment__date'>{formattedDate}</time>
    </li>
  );
}
export default Comment;
