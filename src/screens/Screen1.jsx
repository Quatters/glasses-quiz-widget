import React from 'react';
import Card from '../components/Card';
import men from '../img/men.svg';
import women from '../img/women.svg';

function Screen1(props) {
  return (
    <div className='d-flex flex-column' style={{ padding: '3rem' }}>
      <p className='text-question' style={{ marginBottom: '1.5rem' }}>
        You are looking for
      </p>
      <div className='w-100' style={{ marginBottom: '1rem' }}>
        <Card
          onClick={event => props.onNext(event, { gender: 5 })}
          img={women}
          text="Women's styles"
        />
      </div>
      <div className='w-100'>
        <Card
          onClick={event => props.onNext(event, { gender: 4 })}
          img={men}
          text="Men's styles"
        />
      </div>
      <button
        className='btn-transparent text-additional text-underlined fixed-bottom fixed-centered'
        style={{ marginBottom: '1.5rem' }}
        onClick={event => props.onNext(event, { gender: null })}
      >
        I'd like to see both
      </button>
    </div>
  );
}

export default Screen1;
