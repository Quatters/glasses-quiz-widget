import React from 'react';
import Card from '../components/Card';

function Screen9(props) {
  return (
    <div className='screen'>
      <p className='text-question' style={{ marginBottom: '1.5rem' }}>
        Are you looking for any particular eyewear brands?
      </p>
      <Card
        onClick={props.onNext}
        text='Yes, I have some in mind'
        style={{ marginBottom: '1rem' }}
      />
      <Card
        onClick={() => props.onNext(null, null, 1)}
        text="No, brand isn't important"
      />
    </div>
  );
}

export default Screen9;
