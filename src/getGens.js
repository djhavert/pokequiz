const axios = require('axios');

export async function getGens(setGens) {
  const url = `https://pokeapi.co/api/v2/generation`;
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
      const gens = [];
      for (let gen = 1; gen <= data.count; gen++) {
        gens.push(gen);
      }
      setGens(gens);
    });
}
