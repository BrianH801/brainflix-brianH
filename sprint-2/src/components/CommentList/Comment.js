import React from 'react';

function Comment({ id, name, comment, timestamp }) {
  const formattedDate = new Date(timestamp).toLocaleDateString();
  console.log('This is formatted date from comment.js', formattedDate);

  return (
    <li className='comment__id flex-wrapper' id={id}>
      <div className='comment__name'>
        <h2>{name}</h2>
      </div>
      <div className='comment__comment'>
        <p>{comment}</p>
      </div>
    </li>
  );
}
export default Comment;
