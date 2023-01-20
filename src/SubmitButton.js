export default function SubmitButton({
  setTypesAreCorrect,
  selectedTypes,
  currentPokemon,
}) {
  return (
    <button
      className='button is-centered is-light is-primary'
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30%',
      }}
      onClick={() =>
        isCorrect(setTypesAreCorrect, selectedTypes, currentPokemon)
      }
    >
      Submit
    </button>
  );
}

function isCorrect(setTypesAreCorrect, selectedTypes, currentPokemon) {
  if (currentPokemon.type2 === null) {
    return setTypesAreCorrect(selectedTypes[0] == currentPokemon.type1 && selectedTypes[1] === null);
  }
  else {
    return setTypesAreCorrect(selectedTypes.includes(currentPokemon.type1) && selectedTypes.includes(currentPokemon.type2))
  }
}
