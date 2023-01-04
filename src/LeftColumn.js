import React from 'react';
import { getGens } from './getGens';
import CreateGenButtons from './CreateGenButtons'

function LeftColumn({gens, setGens, selectedGens, setSelectedGens}) {
  // variable - 'return function at the end of logic'
  

  if (gens == null) {
    getGens(setGens);
  }

  return (
    <div>
      <h1>Instructions</h1>
      <b style={{ marginbottom: 50}} />
      <p className='has-text-centered'>Select Generations to Quiz:</p>

      {gens ? (<CreateGenButtons
        gens={gens}
        selectedGens={selectedGens}
        setSelectedGens={setSelectedGens}
      />
      ) : (
        <div />
      )}
    </div>
  );
}

export default LeftColumn;