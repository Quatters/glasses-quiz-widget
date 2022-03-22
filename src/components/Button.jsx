import React from 'react';
import '../style/Button.css';

function Button(props) {
  return (
    <button onClick={props.onClick} className='btn-primary'>
      {props.text}
    </button>
  );
}

export default Button;
