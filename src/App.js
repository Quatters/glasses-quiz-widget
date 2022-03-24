import { React, useState } from 'react';
import Header from './components/Header';
import * as Screens from './screens';
import './style/shared.css';
import './style/App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [parameters, setParameters] = useState({});

  function handleNext(event, params, skip) {
    if (params) {
      let newParameters = parameters;
      Object.keys(params).forEach(key => {
        newParameters = { ...newParameters, [key]: params[key] };
      });
      setParameters(newParameters);
    }
    skip = 1 + skip || 1;
    setCurrentScreen(currentScreen + skip);
  }

  function handleExit() {
    setCurrentScreen(0);
    setParameters({});
  }

  function handlePrev() {
    setCurrentScreen(currentScreen - 1);
  }

  function getUrl() {
    let baseUrl = document
      .querySelector('#glasses-quiz-widget')
      .getAttribute('data-source');
    baseUrl = baseUrl.slice(1).slice(0, -1);
    console.log('parameters: ', parameters);

    let url = baseUrl + '?';
    Object.keys(parameters).forEach(key => {
      if (parameters[key]) url = `${url}${key}=${parameters[key]}&`;
    });

    return url.slice(0, -1);
  }

  function handleSend() {
    console.log('URL: ', getUrl());
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
      case 5:
        return (
          <Screens.Screen5
            onNext={handleNext}
            sunglasses={parameters.eyewear_type === 211}
          />
        );
      case 6:
        return (
          <Screens.Screen6 onNext={handleNext} gender={parameters.gender} />
        );
      case 7:
        return <Screens.Screen7 onNext={handleNext} />;
      case 8:
        return <Screens.Screen8 onNext={handleNext} shape={parameters.shape} />;
      case 9:
        return <Screens.Screen9 onNext={handleNext} />;
      case 10:
        return <Screens.Screen10 onNext={handleNext} />;
      case 11:
        return <Screens.End onExit={handleExit} onSend={handleSend} />;
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
