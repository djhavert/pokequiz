import React from 'react';
import colorChart from './colorChart';
import GuessButton from './GuessButton';

function ShowTypeResults({
  setSeeResults,
  selectedTypes,
  currentPokemon,
  streak,
}) {
  return (
    <div>
      <div>
        <GuessButton setSeeResults={setSeeResults} streak={streak} />
        <div style={{ height: 50 }}></div>
        <div className='buttons is-centered'>
          <button
            className='button is-static'
            style={{
              backgroundColor: buttonColor(currentPokemon.type1, selectedTypes),
            }}
          >
            {currentPokemon.type1}
          </button>
          {currentPokemon.type2 && (
            <button
              className='button is-static'
              style={{
                backgroundColor: buttonColor(
                  currentPokemon.type2,
                  selectedTypes
                ),
              }}
            >
              {currentPokemon.type2}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function buttonColor(type, selectedTypes) {
  if (selectedTypes[0] === type || selectedTypes[1] === type) {
    return colorChart[type];
  } else return;
}

function backgroundColor(prevTypesAreCorrect) {
  if (prevTypesAreCorrect) {
    return '#ccffcc';
  } else if (prevTypesAreCorrect === false) {
    return '#ffb3b3';
  } else return;
}

export default ShowTypeResults;
