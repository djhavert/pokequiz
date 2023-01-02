import logo from './logo.svg';
import React from 'react';
import TypeButton from './TypeButton';

function MiddleColumn() {
  //     variable - 'return function at the end of logic'
  const [selectedTypes, setSelectedTypes] = React.useState([null, null]);

  const changeType = (type) => {
    //
    console.log('type set:', type);

    // If no types, save as first type
    // else if one type, if not same as 1st type, save as 2nd type 
    //                   otherwise disregard
    // else disregard
    if (selectedTypes[0] == null) { // if empty
      setSelectedTypes([type, null]);
    }
    else if (selectedTypes[1] == null) { // if only one element
      if (selectedTypes[0] !== type) {
        setSelectedTypes([selectedTypes[0], type]);
      }
      else {
        setSelectedTypes([null, null]);
      }
    }
    else { // if full
      if (selectedTypes[0] === type) {
        setSelectedTypes([selectedTypes[1], null]);
      }
      else if (selectedTypes[1] === type) {
        setSelectedTypes([selectedTypes[0], null]);
      }
    }
  };

  return (
    <div>
      <h1>Guess the type</h1>
      <img
        src='https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891761-004charmander.png'
        alt='pokemon here'
      ></img>
      <b />
      <p className='has-text-centered'>Select pokemon types:</p>

      <div className='buttons'>
        <TypeButton type='fire' changeType={changeType} />

        <TypeButton type='water' changeType={changeType} />

        <TypeButton type='grass' changeType={changeType} />
      </div>
      <p>
        Selected types: {selectedTypes[0]} {(selectedTypes[1] !== null) ? ',' : ''} {selectedTypes[1]}
      </p>
    </div>
  );
}

export default MiddleColumn;