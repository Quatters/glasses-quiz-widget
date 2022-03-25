import { React, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Screen31 from './Screen31';
import Between from './Between';
import Screen32 from './Screen32';

function Screen3(props) {
  const [showing, setShowing] = useState('between');

  if (showing === '32')
    return (
      <SwitchTransition>
        <CSSTransition
          key={showing}
          timeout={350}
          classNames='screen'
          unmountOnExit
        >
          <Screen32
            onSkip={() => props.onNext()}
            onEnd={parameter => props.onNext(null, parameter)}
          />
        </CSSTransition>
      </SwitchTransition>
    );
  else if (showing === '31')
    return (
      <SwitchTransition>
        <CSSTransition
          key={showing}
          timeout={350}
          classNames='screen'
          unmountOnExit
        >
          <Screen31
            onSkip={() => props.onNext()}
            onNext={() => setShowing('32')}
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
        <Between
          text="Let's get to know you!"
          timeout={2000}
          onTimeout={() => {
            setShowing('31');
          }}
        />
      </CSSTransition>
    </SwitchTransition>
  );
}

export default Screen3;
