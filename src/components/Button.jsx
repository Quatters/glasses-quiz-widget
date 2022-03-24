import React from 'react';
import '../style/Button.css';

function Button(props) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className='btn-primary'
      style={props.style}
    >
      {props.text}
    </button>
  );
}

export default Button;
