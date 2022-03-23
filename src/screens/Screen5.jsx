import React from 'react';
import Screen5Sunglasses from './Screen5Sunglasses';
import Screen5Eyeglasses from './Screen5Eyeglasses';

function Screen5(props) {
  if (props.sunglasses)
    return (
      <Screen5Sunglasses onNext={parameter => props.onNext(null, parameter)} />
    );

  return (
    <Screen5Eyeglasses onNext={parameter => props.onNext(null, parameter)} />
  );
}

export default Screen5;
