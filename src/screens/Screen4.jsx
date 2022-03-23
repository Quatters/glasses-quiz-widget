import { React, useState } from 'react';
import Between from './Between';
import Screen41 from './Screen41';
import Screen42 from './Screen42';

function Screen4(props) {
  const [show42, setShow42] = useState(false);
  const [waiting, setWaiting] = useState(false);

  if (waiting)
    return (
      <Between
        text="No worries, we've got you!"
        timeout={2000}
        onTimeout={() => {
          setShow42(true);
          setWaiting(false);
        }}
      />
    );
  else if (show42)
    return (
      <Screen42
        onNext={parameter => props.onNext(null, parameter)}
        onSkip={props.onNext}
      />
    );
  return (
    <Screen41
      onNext={parameter => props.onNext(null, parameter)}
      onDontKnow={() => setWaiting(true)}
    />
  );
}

export default Screen4;
