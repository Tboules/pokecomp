const defaultFetchPokemonOptions = { limit: 151, offset: 0 };
export const fetchPokemon = ({
  limit = 151,
  offset = 0,
} = defaultFetchPokemonOptions) => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  )
    .then((response) => response.json())
    .then((allPokemon) =>
      allPokemon.results.map((pokemon) => fetchPokemonData(pokemon))
    )
    .then((pokePromises) => Promise.all(pokePromises));
};

export const fetchPokemonData = (pokemon) => {
  let url = pokemon.url;
  return fetch(url).then((response) => response.json());
};

export const fetchAllPokemon = () => {
  return Promise.all([
    fetchPokemon({ limit: 100, offset: 0 }),
    fetchPokemon({ limit: 51, offset: 100 }),
  ]);
};
