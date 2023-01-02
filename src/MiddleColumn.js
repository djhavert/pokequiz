import logo from './logo.svg';
import React from 'react';
import TypeButton from './TypeButton';
import { getPokemon } from './getPokemon';
import { changeType } from './changeType';

function MiddleColumn() {
  //     variable - 'return function at the end of logic'
  const [selectedTypes, setSelectedTypes] = React.useState([null, null]);
  const [currentPokemon, setCurrentPokemon] = React.useState(null);

  if (currentPokemon === null) {
    getPokemon(setCurrentPokemon, Math.ceil(Math.random() * 151));
  }
  console.log(currentPokemon);

  return (
    <div>
      <h1>Guess the type</h1>
      <img
        src={
          currentPokemon === null
            ? 'https://wiki.p-insurgence.com/images/0/09/722.png'
            : currentPokemon.img
        }
        alt='pokemon'
      ></img>
      <b style={{ marginbottom: 50 }} />
      <p className='has-text-centered'>Select pokemon types:</p>

      <div className='buttons'>
        <TypeButton
          type='fire'
          changeType={() => changeType('fire', selectedTypes, setSelectedTypes)}
          selectedTypes={selectedTypes}
        />
        <TypeButton
          type='water'
          changeType={() =>
            changeType('water', selectedTypes, setSelectedTypes)
          }
          selectedTypes={selectedTypes}
        />
        <TypeButton
          type='grass'
          changeType={() =>
            changeType('grass', selectedTypes, setSelectedTypes)
          }
          selectedTypes={selectedTypes}
        />
      </div>
      <p className='has-text-centered'>
        Selected types: {selectedTypes[0]}
        {selectedTypes[1] !== null ? ',' : ''} {selectedTypes[1]}
      </p>
    </div>
  );
}

export default MiddleColumn;
