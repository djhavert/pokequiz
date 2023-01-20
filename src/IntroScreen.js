import React from 'react';
import { getGens } from './getGens';
import CreateGenButtons from './CreateGenButtons';

function IntroScreen({ selectedGens, setSelectedGens, setIsPlaying }) {
  const [gens, setGens] = React.useState(null);

  if (gens == null) {
    getGens(setGens);
  }

  return (
    <div className='columns'>
      <div className='column'></div>
      <div className='column' style={{ border: 3 }}>
        <h1 className='title has-text-centered' style={{ marginTop: 160 }}>
          Welcome to PokéQuiz
        </h1>
        <p style={{ marginTop: 30 }} className='has-text-centered'>
          Gain a streak by guessing the correct types of the randomly generated
          pokemon. Get a high score!
        </p>

        <p style={{ marginTop: 30 }} className='subtitle has-text-centered'>
          Select Generations to Quiz:
        </p>

        {gens && (
          <CreateGenButtons
            gens={gens}
            selectedGens={selectedGens}
            setSelectedGens={setSelectedGens}
          />
        )}
        <button
          className='button is-centered is-light is-primary'
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
          onClick={() => StartPlaying(setIsPlaying)}
        >
          Start
        </button>

        {localStorage.getItem('highScore') < 20 &&
        localStorage.getItem('highScore') !== null ? (
          <div style={{ marginTop: 30 }}>
            <img
              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png'
              alt='mew'
              style={{ width: 800 }}
            />
          </div>
        ) : (
          <div style={{ marginTop: 30 }}>
            <h1 className='subtitle'>Mewtwo says... You are a PokéGamer!</h1>
            <img
              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png'
              alt='mew'
              style={{ width: 800 }}
            />
          </div>
        )}
      </div>
      <div className='column'></div>
    </div>
  );
}

function StartPlaying(setIsPlaying) {
  setIsPlaying(true);
}

export default IntroScreen;
