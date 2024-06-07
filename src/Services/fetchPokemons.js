export const fetchPokemonsData = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0/`
  );
  const data = await response.json();

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      return response.json();
    })
  );
  
  return pokemonDetails;
};

export const fetchPokemonData = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.json();
};

export const fetchAbilityDetails = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export const fetchSpeciesData = async (url) => {
  const response = await fetch(url);
  return response.json();
};
