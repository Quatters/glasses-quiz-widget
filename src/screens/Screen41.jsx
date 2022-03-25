import React from 'react';
import Card from '../components/Card';
import sizesIcon from '../img/sizes icon.svg';

function Screen41(props) {
  return (
    <div className='screen'>
      <p className='text-question' style={{ marginBottom: '2.5rem' }}>
        What's your current frame size?
      </p>
      <img
        src={sizesIcon}
        alt='Sizes'
        className='image'
        style={{ maxWidth: '420px', marginBottom: '1.8rem' }}
      />
      <Card
        onClick={() => props.onNext({ frame_size: 68 })}
        style={{ marginBottom: '0.8rem' }}
        text='Small'
        additionalText='42-48 mm'
        inline
      />
      <Card
        onClick={() => props.onNext({ frame_size: 67 })}
        style={{ marginBottom: '0.8rem' }}
        text='Medium'
        additionalText='49-53 mm'
        inline
      />
      <Card
        onClick={() => props.onNext({ frame_size: 66 })}
        style={{ marginBottom: '0.8rem' }}
        text='Large'
        additionalText='54-58 mm'
        inline
      />
      <button
        className='btn-transparent text-additional text-underlined fixed-bottom'
        style={{ marginBottom: '1.5rem' }}
        onClick={props.onDontKnow}
      >
        I don't know
      </button>
    </div>
  );
}

export default Screen41;
