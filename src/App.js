import { React, useState } from 'react';
import Header from './components/Header';
import * as Screens from './screens';
import './style/shared.css';
import './style/App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [parameters, setParameters] = useState({});

  function handleNext(event, parameter) {
    if (parameter)
      setParameters({
        ...parameters,
        [Object.keys(parameter)[0]]: parameter[Object.keys(parameter)[0]],
      });
    setCurrentScreen(currentScreen + 1);
  }

  function handleExit() {
    console.log('exit');
  }

  function handlePrev() {
    setCurrentScreen(currentScreen - 1);
  }

  function getScreen(num) {
    switch (num) {
      case 0:
        return <Screens.Start onStart={handleNext} />;
      case 1:
        return <Screens.Screen1 onNext={handleNext} />;
      case 2:
        return (
          <Screens.Screen2 onNext={handleNext} gender={parameters.gender} />
        );
      case 3:
        return <Screens.Screen3 onNext={handleNext} />;
      default:
        return <p>Screen {num} not found.</p>;
    }
  }

  return (
    <>
      <Header
        onNext={handleNext}
        onPrev={handlePrev}
        onExit={handleExit}
        screen={currentScreen}
      />
      {getScreen(currentScreen)}
    </>
  );
}

export default App;
