import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  console.log('CommentList props', props.comments);
  if (props.comments === undefined) {
    return <p>Loading comments</p>;
  }

  return (
    <ul className='comment__list'>
      {props.comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          name={comment.name}
          date={new Date(comment.timestamp).toLocaleDateString()}
          comment={comment.comment}
        />
      ))}
    </ul>
  );
}

export default CommentList;
