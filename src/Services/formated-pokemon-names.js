export const varietyFormattedName = (pokemonVariety, pokemonFormattedName) =>
  Promise.all(
    pokemonVariety.map(async (variety) => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-form/${variety.name}`
        );
        const data = await response.json();

        const englishName = data.names.find(
          (name) => name.language.name === "en"
        );

        return englishName ? englishName.name : pokemonFormattedName;
      } catch (error) {
        console.error(
          `Error fetching data for variety: ${variety.name}`,
          error
        );

        return null;
      }
    })
  );
