import logo from './logo.svg';
import React from 'react';

function TypeButton({ type, changeType }) {
  return (
    <button className='button' onClick={() => changeType(type)}>
      {type}
    </button>
  );
}

export default TypeButton;
