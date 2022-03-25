import React from 'react';
import Card from '../components/Card';

function Screen31(props) {
  return (
    <div className='screen'>
      <p className='text-question' style={{ marginBottom: '1.5rem' }}>
        Do you need vision correction?
      </p>
      <div className='w-100' style={{ marginBottom: '1rem' }}>
        <Card onClick={props.onNext} text='Yes' />
      </div>
      <div className='w-100'>
        <Card onClick={props.onSkip} text='No' />
      </div>
      <button
        className='btn-transparent text-additional text-underlined fixed-bottom'
        style={{ marginBottom: '1.5rem' }}
        onClick={props.onSkip}
      >
        Skip
      </button>
    </div>
  );
}

export default Screen31;
