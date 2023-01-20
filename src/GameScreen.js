import React from 'react';

import MiddleColumn from './MiddleColumn';
import chooseRandomPokeID from './chooseRandomPokeID';
import GameThirdColumn from './GameThirdColumn';
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
  const [seeResults, setSeeResults] = React.useState(null);

  if (pokeTypes === null) {
    getTypes(setPokeTypes);
  } else if (currentPokemon === null) {
    const pokeID = chooseRandomPokeID({ selectedGens });
    getPokemon(setCurrentPokemon, pokeID);
  }

  if (typesAreCorrect !== null) {
    typesAreCorrect ? setStreak(streak + 1) : setStreak(0);
    setSeeResults(true);
    //setCurrentPokemon(null);
    //setSelectedTypes([null, null]);
    
    //setTypesAreCorrect(null);
  }

  if (seeResults === false) {
    setCurrentPokemon(null);
    setSelectedTypes([null, null]);
    setTypesAreCorrect(null);
    setSeeResults(null);
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
          seeResults={seeResults}
          setSeeResults={setSeeResults}
        />
      </div>
      <div className='column'>
        <GameThirdColumn
          streak={streak}
        />
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