const axios = require('axios');

export async function getPokemon(setCurrentPokemon, number) {
  const url = `https://pokeapi.co/api/v2/pokemon/${number}`;

  function capitalize(name) {
    return name[0].toUpperCase() + name.slice(1);
  }

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      setCurrentPokemon({
        name: capitalize(data.forms[0].name),
        img: data.sprites.other['official-artwork'].front_default,
        type1: data.types[0].type.name,
        type2: data.types.length === 2 ? data.types[1].type.name : null,
      });
    });
}
