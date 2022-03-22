import React from 'react';
import logo from '../img/Otimax Dev logo 3.png';
import arrowRight from '../img/arrow_right.svg';
import arrowLeft from '../img/back.svg';
import exit from '../img/exit.svg';
import '../style/Header.css';
import ProgressBar from './ProgressBar';

function Header(props) {
  return (
    <div className='header'>
      {props.screen === 0 && (
        <div className='content without-progress'>
          {' '}
          <img className='logo' src={logo} alt='Otimax Dev logo' />
          <button
            onClick={props.onNext}
            className='btn-transparent align-self-center'
          >
            <img src={arrowRight} alt='Start' />
          </button>
        </div>
      )}
      {props.screen > 0 && props.screen < 11 && (
        <div className='content with-progress'>
          <button
            onClick={props.onPrev}
            className='btn-transparent align-self-center'
          >
            <img src={arrowLeft} alt='Next' />
          </button>
          <p className='align-self-center'>{props.screen}/10</p>
          <button onClick={props.onExit} className='btn-transparent'>
            <img src={exit} alt='Exit' />
          </button>
        </div>
      )}
      {props.screen > 0 && props.screen < 11 && (
        <ProgressBar progress={props.screen <= 10 ? props.screen * 10 : 100} />
      )}
    </div>
  );
}

export default Header;
