import React from 'react';
import Card from '../components/Card';

function Screen7(props) {
  return (
    <div className='screen'>
      <p className='text-question' style={{ marginBottom: '1.5rem' }}>
        How would you define your facial features?
      </p>
      <div className='w-100' style={{ marginBottom: '1rem' }}>
        <Card
          onClick={() => props.onNext(null, { facial_features: 'sharp' })}
          text='Sharp'
        />
      </div>
      <div className='w-100' style={{ marginBottom: '1rem' }}>
        <Card
          onClick={() => props.onNext(null, { facial_features: 'rounded' })}
          text='Rounded'
        />
      </div>
      <div className='w-100'>
        <Card
          onClick={() => props.onNext(null, { facial_features: 'between' })}
          text='In between'
        />
      </div>
      <button
        className='btn-transparent text-additional text-underlined fixed-bottom'
        style={{ marginBottom: '1.5rem' }}
        onClick={props.onNext}
      >
        I don't know
      </button>
    </div>
  );
}

export default Screen7;
