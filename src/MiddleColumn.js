import logo from './logo.svg';
import React from 'react';
import CreateTypeButtons from './CreateTypeButtons';
import SubmitButton from './SubmitButton';
import chooseRandomPokeID from './chooseRandomPokeID';
import { getPokemon } from './getPokemon';
import { changeType } from './changeType';
import { getTypes } from './getTypes';

function MiddleColumn(selectedGens) {
  //     variable - 'return function at the end of logic'
  const [selectedTypes, setSelectedTypes] = React.useState([null, null]);
  const [currentPokemon, setCurrentPokemon] = React.useState(null);
  const [pokeTypes, setPokeTypes] = React.useState(null);
  const [typesAreCorrect, setTypesAreCorrect] = React.useState(null);
  const [streak, setStreak] = React.useState(0);

  if (pokeTypes === null) {
    getTypes(setPokeTypes);
  } else if (currentPokemon === null) {
    const pokeID = chooseRandomPokeID({ selectedGens });
    getPokemon(setCurrentPokemon, pokeID);
  }

  if (typesAreCorrect) {
    setTypesAreCorrect(null);
    setCurrentPokemon(null);
    setSelectedTypes([null, null]);
    setStreak(streak + 1);
  } else if (typesAreCorrect === false) {
    let messageWrong = 'Incorrect! ';
    if (currentPokemon.type2 == null) {
      messageWrong = messageWrong + 'Correct type is ' + currentPokemon.type1;
    } else {
      messageWrong =
        messageWrong +
        'Correct types are ' +
        currentPokemon.type1 +
        ' and ' +
        currentPokemon.type2;
    }
    alert(messageWrong);
    setTypesAreCorrect(null);
    setCurrentPokemon(null);
    setSelectedTypes([null, null]);
    setStreak(0);
  }

  return (
    <div>
      <img
        style={{
          width: 475,
          aspectRatio: 1,
          alignSelf: 'center',
        }}
        src={
          currentPokemon === null
            ? 'https://wiki.p-insurgence.com/images/0/09/722.png'
            : currentPokemon.img
        }
        alt='pokemon'
      ></img>
      <b />
      <div className="columns is-centered">
        <h1 className="title">
          {(currentPokemon) ? (currentPokemon.name) : ("")}
        </h1>
      </div>
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
