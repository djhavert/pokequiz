import React from 'react';

import LeftColumn from './LeftColumn'

function IntroScreen({
  selectedGens,
  setSelectedGens,
  setIsPlaying
}) {
  const [gens, setGens] = React.useState(null);

  return(
    <div>
      <LeftColumn 
        gens={gens}
        setGens={setGens}
        selectedGens={selectedGens}
        setSelectedGens={setSelectedGens}
      />
      <button
        className='button'
        onClick={() => StartPlaying(setIsPlaying)}
      >
        Start
      </button>
    </div>
  )
}

function StartPlaying(setIsPlaying) {
  setIsPlaying(true);
}

export default IntroScreen