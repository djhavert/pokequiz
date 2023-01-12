import logo from './logo.svg';
import React from 'react';
import colorChart from './colorChart';

function TypeButton({ type, changeType, selectedTypes }) {
  return (
    <button
      className='button'
      style={{ backgroundColor: buttonColor(type, selectedTypes) }}
      onClick={() => changeType(type)}
    >
      {type}
    </button>
  );
}

function buttonColor(type, selectedTypes) {
  if (selectedTypes[0] === type || selectedTypes[1] === type) {
    return colorChart[type];
  }
  else {
    return colorChart[type+'_light']
  };
}

export default TypeButton;
