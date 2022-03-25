import React from 'react';
import Card from '../components/Card';

function Screen42(props) {
  return (
    <div className='screen'>
      <p className='text-question' style={{ marginBottom: '2.5rem' }}>
        How wide would you say your face is?
      </p>
      <Card
        onClick={() => props.onNext({ frame_size: 68 })}
        style={{ marginBottom: '0.8rem' }}
        text='Wider than average'
      />
      <Card
        onClick={() => props.onNext({ frame_size: 67 })}
        style={{ marginBottom: '0.8rem' }}
        text='Average'
      />
      <Card
        onClick={() => props.onNext({ frame_size: 66 })}
        style={{ marginBottom: '0.8rem' }}
        text='Narrower than average'
      />
      <button
        className='btn-transparent text-additional text-underlined fixed-bottom'
        style={{ marginBottom: '1.5rem' }}
        onClick={props.onSkip}
      >
        I'm not sure
      </button>
    </div>
  );
}

export default Screen42;
