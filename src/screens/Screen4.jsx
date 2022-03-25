import { React, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Between from './Between';
import Screen41 from './Screen41';
import Screen42 from './Screen42';

function Screen4(props) {
  const [showing, setShowing] = useState('41');

  if (showing === 'between')
    return (
      <SwitchTransition>
        <CSSTransition
          key={showing}
          timeout={350}
          classNames='screen'
          unmountOnExit
        >
          <Between
            text="No worries, we've got you!"
            timeout={2000}
            onTimeout={() => {
              setShowing('42');
            }}
          />
        </CSSTransition>
      </SwitchTransition>
    );
  else if (showing === '42')
    return (
      <SwitchTransition>
        <CSSTransition
          key={showing}
          timeout={350}
          classNames='screen'
          unmountOnExit
        >
          <Screen42
            onNext={parameter => props.onNext(null, parameter)}
            onSkip={props.onNext}
          />
        </CSSTransition>
      </SwitchTransition>
    );
  return (
    <SwitchTransition>
      <CSSTransition
        key={showing}
        timeout={350}
        classNames='screen'
        unmountOnExit
      >
        <Screen41
          onNext={parameter => props.onNext(null, parameter)}
          onDontKnow={() => {
            setShowing('between');
          }}
        />
      </CSSTransition>
    </SwitchTransition>
  );
}

export default Screen4;
