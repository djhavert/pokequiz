import React from 'react';

import MiddleColumn from './MiddleColumn';
import LeftColumn from './LeftColumn';

function GameScreen({
  selectedGens,
  setIsPlaying
}) {

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
          selectedGens = {selectedGens}
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