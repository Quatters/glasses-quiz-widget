import { React, useState, useEffect } from 'react';
import Screen31 from './Screen31';
import Between from './Between';
import Screen32 from './Screen32';

function Screen3(props) {
  const [waiting, setWaiting] = useState(true);
  const [show32, setShow32] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWaiting(false);
    }, 2000);
  }, []);

  function handleSkip() {
    props.onNext();
  }

  function handleNext() {
    setShow32(true);
  }

  function handleEnd(parameter) {
    props.onNext(null, parameter);
  }

  if (waiting) return <Between text="Let's get to know you!" />;
  else if (show32) return <Screen32 onSkip={handleSkip} onEnd={handleEnd} />;

  return <Screen31 onSkip={handleSkip} onNext={handleNext} />;
}

export default Screen3;
