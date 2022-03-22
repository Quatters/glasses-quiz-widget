import React from 'react';
import Button from '../components/Button';
import image from '../img/867.png';

function Start(props) {
  return (
    <div className='d-flex flex-column align-items-center'>
      <div style={{ margin: '4rem 1.9rem 1.3rem 1.9rem' }}>
        <img src={image} alt='Happy to see you' className='image' />
      </div>
      <div style={{ marginBottom: '0.5rem', padding: '1rem' }}>
        <p className='text-accent' style={{ marginBottom: '1rem' }}>
          Let's find your perfect pair!
        </p>
        <p className='text-additional'>
          Take the quiz to easily discover your perfect fit from thousands of
          styles
        </p>
      </div>
      <Button
        onClick={props.onStart}
        className='align-self-center'
        text='Start Now'
      />
    </div>
  );
}

export default Start;
