import React from 'react';
import Card from '../components/Card';

function Screen32(props) {
  return (
    <div className='screen'>
      <p className='text-question' style={{ marginBottom: '1.5rem' }}>
        What do you need your glasses for?
      </p>
      <div className='w-100' style={{ marginBottom: '1rem' }}>
        <Card onClick={() => props.onEnd({ lenstype: 6 })} text='Near Vision' />
      </div>
      <div className='w-100' style={{ marginBottom: '1rem' }}>
        <Card
          onClick={() => props.onEnd({ lenstype: 6 })}
          text='Distance Vision'
        />
      </div>
      <div className='w-100'>
        <Card
          onClick={() => props.onEnd({ lenstype: 7 })}
          text='Multifocal / Progressive'
        />
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

export default Screen32;
