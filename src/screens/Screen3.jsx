import { React, useState } from 'react';
import Screen31 from './Screen31';
import Between from './Between';
import Screen32 from './Screen32';

function Screen3(props) {
  const [waiting, setWaiting] = useState(true);
  const [show32, setShow32] = useState(false);

  if (show32)
    return (
      <Screen32
        onSkip={() => props.onNext()}
        onEnd={parameter => props.onNext(null, parameter)}
      />
    );
  else if (!waiting)
    return (
      <Screen31 onSkip={() => props.onNext()} onNext={() => setShow32(true)} />
    );

  return (
    <Between
      text="Let's get to know you!"
      timeout={2000}
      onTimeout={() => {
        setWaiting(false);
      }}
    />
  );
}

export default Screen3;
