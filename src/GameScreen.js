import React from 'react';

import MiddleColumn from './MiddleColumn';
import chooseRandomPokeID from './chooseRandomPokeID';
import { getPokemon } from './getPokemon';
import { getTypes } from './getTypes';


function GameScreen({
  selectedGens,
  setIsPlaying
}) {
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

  if (currentPokemon==='undefined') {
    return(
      <div>
        Hello World.
      </div>
    )
  }

  return(
    <div className='columns'>
      <div className='column'>
        {/* <LeftColumn 
          gens={gens}
          setGens={setGens}
          selectedGens={selectedGens}
          setSelectedGens={setSelectedGens}
        /> */}
      </div>
      <div className='column'>
        <MiddleColumn 
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          currentPokemon={currentPokemon}
          pokeTypes={pokeTypes}
          setTypesAreCorrect={setTypesAreCorrect}
          streak={streak}
        />
      </div>
      <div className='column'>
        Third column
        <button
          className='button'
          onClick={() => setIsPlaying(false)}
        >
          Quit
        </button>
      </div>
    </div>
  )
  
}

export default GameScreen