const axios = require('axios');

export async function getTypes(setPokeTypes) {
  const url = `https://pokeapi.co/api/v2/type`;
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
      const types = [];
      data.results.map(x => types.push(x.name));
      types.pop();
      types.pop();
      setPokeTypes(types);
    });
}
