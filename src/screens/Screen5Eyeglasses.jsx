import React from 'react';
import Card from '../components/Card';

function Screen5Eyeglasses(props) {
  return (
    <div className='screen'>
      <p className='text-question' style={{ marginBottom: '2.5rem' }}>
        Would you like to protect your eyes from light emanating from screens?
      </p>
      <Card
        onClick={() => props.onNext({ blue_light: true, shade: null })}
        style={{ marginBottom: '1rem' }}
        text='Yes'
      />
      <Card
        onClick={() => props.onNext({ blue_light: false, shade: null })}
        text='No'
      />
    </div>
  );
}

export default Screen5Eyeglasses;
