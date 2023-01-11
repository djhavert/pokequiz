import React from 'react';

import GameScreen from './GameScreen'
import IntroScreen from './IntroScreen'

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [selectedGens, setSelectedGens] = React.useState(() => new Set([1]));

  if (isPlaying) {
    return (
      <div>
        <GameScreen
          selectedGens={selectedGens}
          setIsPlaying={setIsPlaying}
        />
      </div>
      
    );
  }
  else {
    return (
      <div>
        <IntroScreen
          selectedGens={selectedGens}
          setSelectedGens={setSelectedGens}
          setIsPlaying={setIsPlaying}
        />
      </div>
    )
  }
  
}

export default App;
