import React from 'react';
import CreateTypeButtons from './CreateTypeButtons';
import SubmitButton from './SubmitButton';
import { changeType } from './changeType';

function MiddleColumn({
  selectedTypes, 
  setSelectedTypes,
  currentPokemon,
  pokeTypes,
  setTypesAreCorrect,
  seeResults,
  setSeeResults,
}) {
  

  return (
    <div>
      <div className='has-text-centered'>
        <img
          style={{
            width: 475,
            aspectRatio: 1,
            alignSelf: 'center',
            justifyContent: 'center'
          }}
          src={
            currentPokemon === null
              ? 'https://wiki.p-insurgence.com/images/0/09/722.png'
              : currentPokemon.img
          }
          alt='pokemon'
        ></img>
      </div>
      
      <b />
      <div className='has-text-centered'>
        <h1 className='title'>{currentPokemon ? currentPokemon.name : ''}</h1>
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
      {seeResults ? (
        <ShowTypeResults
          setSeeResults={setSeeResults}
          selectedTypes={selectedTypes}
          currentPokemon={currentPokemon}
        />
      ) : (
        <SubmitButton
        setTypesAreCorrect={setTypesAreCorrect}
        selectedTypes={selectedTypes}
        currentPokemon={currentPokemon}
        />
      )}
    </div>
  );
}

export default MiddleColumn;
