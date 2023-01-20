import React from 'react';
import colorChart from './colorChart';

function CreateGenButtons({ gens, selectedGens, setSelectedGens }) {
  return (
    <div className='buttons is-centered'>
      {gens.map((gen) => {
        return (
          <GenButton
            key={gen}
            gen={gen}
            changeGens={() => changeGens(gen, selectedGens, setSelectedGens)}
            selectedGens={selectedGens}
          />
        );
      })}
    </div>
  );
}

function changeGens(gen, selectedGens, setSelectedGens) {
  if (selectedGens.has(gen)) {
    // If gen is already selected
    // Remove gen from set, but not if there is only 1 gen selected
    if (selectedGens.size > 1) {
      const next = new Set(selectedGens);
      next.delete(gen);
      setSelectedGens(next);
    }
  } else {
    // Add gen to set
    setSelectedGens(new Set(selectedGens).add(gen));
  }
}

function GenButton({ gen, changeGens, selectedGens }) {
  return (
    <button
      className='button'
      style={{
        backgroundColor: selectedGens.has(gen) ? 'lightgreen' : 'white',
      }}
      onClick={() => changeGens(gen)}
    >
      {gen}
    </button>
  );
}

export default CreateGenButtons;
