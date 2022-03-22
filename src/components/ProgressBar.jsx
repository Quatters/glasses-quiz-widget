import React from 'react';
import '../style/ProgressBar.css';

function ProgressBar(props) {
  return (
    <div className='outer-bar'>
      <div
        className={`inner-bar ${props.progress >= 100 ? 'no-round' : ''}`}
        style={{ width: `${props.progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
