import React from 'react';
import Card from '../components/Card';
import lightShade from '../img/light shade.svg';
import darkShade from '../img/dark shade.svg';
import transition from '../img/photochromic.svg';

function Screen5Sunglasses(props) {
  return (
    <div className='screen'>
      <p className='text-question' style={{ marginBottom: '2.5rem' }}>
        When you're out and about, which shade of lenses do you prefer?
      </p>
      <Card
        onClick={() => props.onNext({ shade: 'dark', blue_light: null })}
        style={{ marginBottom: '1rem' }}
        text='Dark Shade'
        img={darkShade}
        inline
      />
      <Card
        onClick={() => props.onNext({ shade: 'light', blue_light: null })}
        text='Light Shade'
        style={{ marginBottom: '1rem' }}
        img={lightShade}
        inline
      />
      <Card
        onClick={() => props.onNext({ shade: 'transition', blue_light: null })}
        text='Transitioning Shade'
        img={transition}
        inline
      />
    </div>
  );
}

export default Screen5Sunglasses;
