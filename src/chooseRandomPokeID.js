import PokeIDsByGen from './PokeIDsByGen'

function chooseRandomPokeID({selectedGens}) {
  selectedGens = selectedGens.selectedGens;
  if (selectedGens === null) {
    return 1;
  }
  const pokeIDs = [];
  selectedGens.forEach((gen) => {
    const range = PokeIDsByGen[gen][1] - PokeIDsByGen[gen][0] + 1;
    pokeIDs.push(...[...Array(range).keys()].map(x => x + PokeIDsByGen[gen][0]));
  })
  const amount = pokeIDs.length;
  return pokeIDs[Math.ceil(Math.random() * amount)];
}

export default chooseRandomPokeID;
