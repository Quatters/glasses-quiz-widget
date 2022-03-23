import { React, useState } from 'react';
import Header from './components/Header';
import * as Screens from './screens';
import './style/shared.css';
import './style/App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [parameters, setParameters] = useState({});

  function handleNext(event, params) {
    if (params) {
      let newParameters = parameters;
      Object.keys(params).forEach(key => {
        newParameters = { ...newParameters, [key]: params[key] };
      });
      setParameters(newParameters);
    }
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
      case 4:
        return <Screens.Screen4 onNext={handleNext} />;
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
