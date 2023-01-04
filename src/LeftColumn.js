import React from 'react';
import { getGens } from './getGens';
import CreateGenButtons from './CreateGenButtons'

function LeftColumn() {
  // variable - 'return function at the end of logic'
  const [gens, setGens] = React.useState(null);
  const [selectedGens, setSelectedGens] = React.useState(() => new Set());

  if (gens == null) {
    getGens(setGens);
  }

  console.log(selectedGens)
  //console.log(gens.map('String'))
  // HTML
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

      <p className='has-text-centered'>
        Selected gens: 
        {
          gens ? (gens.join().split(',')) : ('')
        }
      </p>
    </div>
  );
}
//() => {gens.map(String).split(',')}
export default LeftColumn;