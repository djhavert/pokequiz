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
  const currentPokemonTypeArray = [];
  currentPokemonTypeArray.push(currentPokemon.type1);
  if (currentPokemon.type2 !== null)
    currentPokemonTypeArray.push(currentPokemon.type2);
  else currentPokemonTypeArray.push(null);
  selectedTypes.sort();
  currentPokemonTypeArray.sort();

  console.log(currentPokemonTypeArray, selectedTypes);
  if (currentPokemonTypeArray.length !== selectedTypes.length)
    return setTypesAreCorrect(false);
  else if (currentPokemonTypeArray[0] !== selectedTypes[0])
    return setTypesAreCorrect(false);
  else if (
    currentPokemonTypeArray.length === 2 &&
    currentPokemonTypeArray[1] !== selectedTypes[1]
  )
    setTypesAreCorrect(false);

  setTypesAreCorrect(true);
}
