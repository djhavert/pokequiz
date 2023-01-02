import logo from './logo.svg';
import React from 'react';
import TypeButton from './TypeButton';

function MiddleColumn() {
  //     variable - 'return function at the end of logic'
  const [selectedTypes, setSelectedTypes] = React.useState([null, null]);
  const [steelType, setSteelType] = React.useState(false);

  const handleTypeChange = (type1, type2) => {
    setSelectedTypes([type1, type2]);
  };

  const changeType = (type) => {
    //
    console.log('type set:', type);

    handleTypeChange(type, null);
  };

  return (
    <div>
      <h1>Guess the type</h1>
      <img
        src='https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891761-004charmander.png'
        alt='pokemon here'
      ></img>
      <b />
      <p className='has-text-centered'>Select pokemon types:</p>

      <div className='buttons'>
        <TypeButton type='fire' changeType={changeType} />

        <TypeButton type='water' changeType={changeType} />

        <TypeButton type='grass' changeType={changeType} />
      </div>
      <p>
        Selected types: {selectedTypes[0]}, {selectedTypes[1]}
      </p>
    </div>
  );
}

export default MiddleColumn;
