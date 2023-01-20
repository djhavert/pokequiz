import React from 'react';
import TypeButton from './TypeButton';

function CreateTypeButtons({
  types,
  changeType,
  selectedTypes,
  setSelectedTypes,
}) {
  return (
    <div className='buttons is-centered'>
      {types.map((type) => {
        return (
          <TypeButton
            key={type}
            type={type}
            changeType={() => changeType(type, selectedTypes, setSelectedTypes)}
            selectedTypes={selectedTypes}
          />
        );
      })}
    </div>
  );
}

export default CreateTypeButtons;
