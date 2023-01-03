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
  if (!selectedTypes.includes(currentPokemon.type1)) setTypesAreCorrect(false);
  else if (
    currentPokemon.type2 !== null &&
    !selectedTypes.includes(currentPokemon.type2)
  )
    setTypesAreCorrect(false);
  else setTypesAreCorrect(true);
}
