import React from 'react';

function GameThirdColumn({
  streak
}) {

  return (
    <div>
      <p>streak: {streak}</p>
    </div>
  );
}

function backgroundColor(prevTypesAreCorrect) {
  if (prevTypesAreCorrect) {
    return '#ccffcc';
  }
  else if (prevTypesAreCorrect === false) {
    return '#ffb3b3';
  }
  else return;
}

export default GameThirdColumn;
