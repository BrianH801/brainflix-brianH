import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  console.log('CommentList props', props.comments);
  return (
    <ul className='video__list container flex-wrapper'>
      {props.comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          name={comment.name}
          comment={comment.comment}
          date={comment.time}
        />
      ))}
    </ul>
  );
}

export default CommentList;
