import React from 'react';
import '../style/Card.css';

function Card(props) {
  return (
    <button
      className='card d-flex flex-column align-items-center w-100'
      style={{ padding: '2rem' }}
      onClick={props.onClick}
    >
      {props.img && (
        <img src={props.img} alt='' style={{ marginBottom: '1rem' }} />
      )}
      <p className='text-answer'>{props.text}</p>
    </button>
  );
}

export default Card;
