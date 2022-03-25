import React from 'react';
import Card from '../components/Card';
import menLong from '../img/men long.svg';
import menRound from '../img/men round.svg';
import menBetween from '../img/men between.svg';
import womenLong from '../img/women long.svg';
import womenRound from '../img/women round.svg';
import womenBetween from '../img/women between.svg';
import bothLong from '../img/both long.svg';
import bothRound from '../img/both round.svg';
import bothBetween from '../img/both between.svg';

function Screen6(props) {
  function getImg(faceShape) {
    if (props.gender === 4) {
      if (faceShape === 'long') return menLong;
      if (faceShape === 'round') return menRound;
      if (faceShape === 'between') return menBetween;
    }
    if (props.gender === 5) {
      if (faceShape === 'long') return womenLong;
      if (faceShape === 'round') return womenRound;
      if (faceShape === 'between') return womenBetween;
    } else {
      if (faceShape === 'long') return bothLong;
      if (faceShape === 'round') return bothRound;
      if (faceShape === 'between') return bothBetween;
    }
  }

  return (
    <div className='screen'>
      <p className='text-question' style={{ marginBottom: '1.5rem' }}>
        Every face shape has a perfect fit. What's yours?
      </p>
      <div className='w-100' style={{ marginBottom: '1rem' }}>
        <Card
          onClick={() => props.onNext(null, { face_shape: 'long' })}
          text='I have a long face'
          img={getImg('long')}
          inline
        />
      </div>
      <div className='w-100' style={{ marginBottom: '1rem' }}>
        <Card
          onClick={() => props.onNext(null, { face_shape: 'round' })}
          text='I have a round face'
          img={getImg('round')}
          inline
        />
      </div>
      <div className='w-100'>
        <Card
          onClick={() => props.onNext(null, { face_shape: 'between' })}
          text='In between'
          img={getImg('between')}
          inline
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

export default Screen6;
