import { varietyFormattedName } from "../Services/formated-pokemon-names";

export const pokemonData = {
  name: "",
  image: "",
  moves: [],
  abilities: [],
  types: [],
  varieties: {
    names: [],
    formattedNames: [],
  },
};

export async function createPokemon(pokemon, pokemonFormattedName, pokemonVariety, description) {
  const formattedNames = await varietyFormattedName(pokemonVariety, pokemonFormattedName);

  return {
    name: pokemonFormattedName,
    image: pokemon.sprites.front_default,
    moves: pokemon.moves,
    abilities: pokemon.abilities.map((ability, index) => ({
      name: ability.ability.name,
      description: description[index],
      isHidden: ability.is_hidden,
    })),
    types: pokemon.types.map((type) => ({
      type: type.type.name,
    })),
    varieties: {
      names: pokemonVariety.map((variety) => variety.name),
      formattedNames: formattedNames,
    },
  };
}
