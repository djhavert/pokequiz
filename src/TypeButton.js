import logo from './logo.svg';
import React from 'react';

function TypeButton({ type, changeType, selectedTypes }) {
  return (
    <button
      className={buttonColor(type, selectedTypes)}
      onClick={() => changeType(type)}
    >
      {type}
    </button>
  );
}

function buttonColor(type, selectedTypes) {
  if (selectedTypes[0] === type || selectedTypes[1] === type)
    return 'button is-dark';
  else return 'button';
}

export default TypeButton;
