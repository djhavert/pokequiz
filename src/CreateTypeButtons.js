import React from "react";
import TypeButton from "./TypeButton";

function CreateTypeButtons({
  types,
  changeType,
  selectedTypes,
  setSelectedTypes,
}) {
  return (
    <div className="buttons">
      {types.map((type) => {
        console.log(type);
        return (
          <TypeButton
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
