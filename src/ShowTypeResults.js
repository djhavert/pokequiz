import React from 'react';
import colorChart from './colorChart';

function ShowTypeResults({
  setSeeResults,
  selectedTypes,
  currentPokemon  
}) {

  

  return (
    <div>
      <div>
        <button 
          className="button is-static"
          style={{ backgroundColor: buttonColor(currentPokemon.type1, selectedTypes) }}
        >
          {currentPokemon.type1}
        </button>
        {currentPokemon.type2 ? (
          <button 
            className="button is-static"
            style={{ backgroundColor: buttonColor(currentPokemon.type2, selectedTypes) }}
          >
            {currentPokemon.type2}
          </button>
        ) : ('')
        }
      </div>

      <NextButton
        setSeeResults={setSeeResults}
      />

    </div>
  );
}

function buttonColor(type, selectedTypes) {
  if (selectedTypes[0] === type || selectedTypes[1] === type) {
    return colorChart[type];
  } else return;
}

function NextButton({setSeeResults}) {
  return (
    <button
      className='button is-centered is-light is-primary'
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30%',
      }}
      onClick={() =>
        setSeeResults(false)
      }
    >
      Next
    </button>
  );
}

function backgroundColor(prevTypesAreCorrect) {
  if (prevTypesAreCorrect) {
    return '#ccffcc';
  }
  else if (prevTypesAreCorrect === false) {
    return '#ffb3b3';
  }
  else return;
}

export default ShowTypeResults;