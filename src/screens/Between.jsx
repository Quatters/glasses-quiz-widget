import { React, useEffect } from 'react';
import like from '../img/like.svg';

function Between(props) {
  useEffect(() => {
    if (props.timeout) {
      setTimeout(() => {
        props.onTimeout();
      }, props.timeout);
    }
  }, [props]);

  return (
    <div className='d-flex flex-column align-items-center'>
      <div style={{ marginTop: '4rem' }}>
        <img src={like} alt='OK!' />
      </div>
      <p className='text-accent' style={{ marginTop: '0.8rem' }}>
        {props.text}
      </p>
    </div>
  );
}

export default Between;
