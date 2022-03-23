import React from 'react';
import '../style/Card.css';

function Card(props) {
  return (
    <button
      className={`card d-flex w-100 ${props.className} ${
        props.inline
          ? 'justify-content-between'
          : 'flex-column align-items-center'
      }`}
      style={{
        ...props.style,
        padding: `${props.inline ? '1rem 1.5rem' : '2rem'}`,
      }}
      onClick={props.onClick}
    >
      {props.img && (
        <img src={props.img} alt='' style={{ marginBottom: '1rem' }} />
      )}
      <p className='text-answer'>{props.text}</p>
      {props.additionalText && (
        <p className='text-answer-additional'>{props.additionalText}</p>
      )}
    </button>
  );
}

export default Card;
