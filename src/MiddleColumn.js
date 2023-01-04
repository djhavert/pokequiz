import logo from './logo.svg';
import React from 'react';
import TypeButton from './TypeButton';
import CreateTypeButtons from './CreateTypeButtons';
import SubmitButton from './SubmitButton';
import { getPokemon } from './getPokemon';
import { changeType } from './changeType';
import { getTypes } from './getTypes';

function MiddleColumn() {
  //     variable - 'return function at the end of logic'
  const [selectedTypes, setSelectedTypes] = React.useState([null, null]);
  const [currentPokemon, setCurrentPokemon] = React.useState(null);
  const [pokeTypes, setPokeTypes] = React.useState(null);
  const [typesAreCorrect, setTypesAreCorrect] = React.useState(null);
  const [streak, setStreak] = React.useState(0);

  if (pokeTypes === null) {
    getTypes(setPokeTypes);
  } else if (currentPokemon === null) {
    getPokemon(setCurrentPokemon, Math.ceil(Math.random() * 151));
  }

  if (typesAreCorrect) {
    setTypesAreCorrect(null);
    setCurrentPokemon(null);
    setSelectedTypes([null, null]);
    setStreak(streak + 1);
  } else if (typesAreCorrect === false) {
    alert('Incorrect type! Correct type(s): ' + currentPokemon.type1 + " " + currentPokemon.type2);
    setTypesAreCorrect(null);
    setCurrentPokemon(null);
    setSelectedTypes([null, null]);
    setStreak(0);
  }

  return (
    <div>
      <img
        src={
          currentPokemon === null
            ? 'https://wiki.p-insurgence.com/images/0/09/722.png'
            : currentPokemon.img
        }
        alt='pokemon'
      ></img>
      <b />
      <p className='has-text-centered'>Select pokemon types:</p>

      {pokeTypes ? (
        <CreateTypeButtons
          types={pokeTypes}
          changeType={changeType}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
        />
      ) : (
        <div />
      )}
      <br />
      <SubmitButton
        setTypesAreCorrect={setTypesAreCorrect}
        selectedTypes={selectedTypes}
        currentPokemon={currentPokemon}
      />
      <p>streak: {streak}</p>
    </div>
  );
}

export default MiddleColumn;
