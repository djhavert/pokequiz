import React from 'react';
import MiddleColumn from './MiddleColumn';
import LeftColumn from './LeftColumn';

function App() {
  const [gens, setGens] = React.useState(null);
  const [selectedGens, setSelectedGens] = React.useState(() => new Set([1]));

  return (
    <div className='columns'>
      <div className='column'>
        <LeftColumn 
          gens={gens}
          setGens={setGens}
          selectedGens={selectedGens}
          setSelectedGens={setSelectedGens}
        />
      </div>
      <div className='column'>
        <MiddleColumn 
          selectedGens = {selectedGens}
        />
      </div>
      <div className='column'>Third column</div>
    </div>
  );
}

export default App;
