import React from 'react';
import Card from '../components/Card';
import eyeglassesMen from '../img/eyeglasses-men.svg';
import sunglassesMen from '../img/sunglasses-men.svg';
import eyeglassesWomen from '../img/eyeglasses-women.svg';
import sunglassesWomen from '../img/sunglasses-women.svg';

function Screen2(props) {
  console.log(props.gender);
  return (
    <div className='d-flex flex-column' style={{ padding: '3rem' }}>
      <p className='text-question' style={{ marginBottom: '1.5rem' }}>
        What type of glasses are you looking for?
      </p>
      <div className='w-100' style={{ marginBottom: '1rem' }}>
        <Card
          onClick={event => props.onNext(event, { eyewear_type: 210 })}
          img={props.gender === 5 ? eyeglassesWomen : eyeglassesMen}
          text='Eyeglasses'
        />
      </div>
      <div className='w-100'>
        <Card
          onClick={event => props.onNext(event, { eyewear_type: 211 })}
          img={props.gender === 5 ? sunglassesWomen : sunglassesMen}
          text='Sunglasses'
        />
      </div>
      <button
        className='btn-transparent text-additional text-underlined fixed-bottom fixed-centered'
        style={{ marginBottom: '1.5rem' }}
        onClick={event => props.onNext(event, { eyewear_type: null })}
      >
        I want to see both
      </button>
    </div>
  );
}

export default Screen2;
