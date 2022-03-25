import { React, useState } from 'react';
import '../style/Card.css';
import vIcon from '../img/(v) icon.svg';

function Card(props) {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected(!selected);
    props.onClick();
  }

  return (
    <button
      className={`card d-flex w-100 align-items-center ${
        props.selected || selected ? 'selected' : ''
      } ${props.className} ${
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
      onClick={handleClick}
    >
      <img
        src={vIcon}
        alt='Selected'
        className={props.selected ? 'selected-icon' : 'hidden'}
      />
      {props.img && (
        <>
          <img
            src={props.img}
            alt=''
            className='card-image'
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
