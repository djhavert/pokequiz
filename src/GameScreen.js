import React from 'react';

import MiddleColumn from './MiddleColumn';
import chooseRandomPokeID from './chooseRandomPokeID';
import GameThirdColumn from './GameThirdColumn';
import { getPokemon } from './getPokemon';
import { getTypes } from './getTypes';

function GameScreen({ selectedGens, setIsPlaying }) {
  const [selectedTypes, setSelectedTypes] = React.useState([null, null]);
  const [currentPokemon, setCurrentPokemon] = React.useState(null);
  const [pokeTypes, setPokeTypes] = React.useState(null);
  const [typesAreCorrect, setTypesAreCorrect] = React.useState(null);
  const [streak, setStreak] = React.useState(0);
  const [seeResults, setSeeResults] = React.useState(null);

  if (pokeTypes === null) {
    getTypes(setPokeTypes);
  } else if (currentPokemon === null) {
    const pokeID = chooseRandomPokeID({ selectedGens });
    getPokemon(setCurrentPokemon, pokeID);
  }

  if (typesAreCorrect !== null) {
    setTypesAreCorrect(null);
    const new_streak = streak + 1;
    typesAreCorrect ? setStreak(new_streak) : setStreak(0);
    if (typesAreCorrect && localStorage.getItem('highScore') < new_streak)
      localStorage.setItem('highScore', new_streak);
    setSeeResults(true);
  }

  if (seeResults === false) {
    setSeeResults(null);
    setCurrentPokemon(null);
    setSelectedTypes([null, null]);
    setTypesAreCorrect(null);
  }

  return (
    <div className='columns'>
      <div className='column'></div>
      <div className='column'>
        <div style={{ marginTop: 80 }} />
        <MiddleColumn
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          currentPokemon={currentPokemon}
          pokeTypes={pokeTypes}
          setTypesAreCorrect={setTypesAreCorrect}
          streak={streak}
          seeResults={seeResults}
          setSeeResults={setSeeResults}
        />
      </div>
      <div className='column'>
        <GameThirdColumn streak={streak} />
        <button className='button' onClick={() => setIsPlaying(false)}>
          Quit
        </button>
      </div>
    </div>
  );
}

export default GameScreen;
