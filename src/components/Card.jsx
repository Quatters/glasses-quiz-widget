import React from 'react';
import '../style/Card.css';

function Card(props) {
  return (
    <button
      className={`card d-flex w-100 align-items-center ${props.className} ${
        props.inline
          ? props.img
            ? ''
            : 'justify-content-between'
          : 'flex-column'
      }`}
      style={{
        ...props.style,
        padding: `${
          props.inline ? (props.img ? '1.5rem 1.2rem' : '1rem 1.5rem') : '2rem'
        }`,
      }}
      onClick={props.onClick}
    >
      {props.img && (
        <>
          <img
            src={props.img}
            alt=''
            style={{
              marginBottom: `${props.inline ? '0' : '1rem'}`,
            }}
          />
          {props.inline && <div className='divider'></div>}
        </>
      )}
      <p className='text-answer'>{props.text}</p>
      {props.additionalText && (
        <p className='text-answer-additional'>{props.additionalText}</p>
      )}
    </button>
  );
}

export default Card;
