import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Header/header";
import { TypesPokemon } from "../../Objects/types";
import { pokemonData, createPokemon } from "../../Objects/pokemon";
import {
  fetchPokemonData,
  fetchSpeciesData,
  fetchAbilityDetails,
} from "../../Services/fetchPokemons";
import { Container } from "./styles";
import { ThemeContext } from "../../Contexts/theme-context";

export const PokemonDetails = () => {
  const { theme } = useContext(ThemeContext);

  const { name } = useParams();

  const [pokemon, setPokemon] = useState(pokemonData);

  const [selectedPokemon, setSelectedPokemon] = useState(name);

  useEffect(() => {
    const fetchPokemonDetails = async (selectedPokemon) => {
      const data = await fetchPokemonData(selectedPokemon);

      const abilityDescription = Promise.all(
        data.abilities.map(async (ability) => {
          const details = await fetchAbilityDetails(ability.ability.url);
          return (
            details.effect_entries.find(
              (detail) => detail.language.name === "en"
            )?.short_effect ||
            details.flavor_text_entries.find(
              (detail) => detail.language.name === "en"
            )?.flavor_text
          );
        })
      );

      const species = await fetchSpeciesData(data.species.url);

      const pokemonFormattedName = species.names.find(
        (name) => name.language.name === "en"
      )?.name;

      const pokemonVariety = await Promise.all(
        species.varieties.length > 1
          ? species.varieties.map(async (variety) => {
              return await variety.pokemon;
            })
          : ""
      );

      console.log(pokemonVariety);

      const description = (await abilityDescription).map(
        (desc) => desc || "No description available"
      );

      setPokemon(
        await createPokemon(
          data,
          pokemonFormattedName,
          pokemonVariety,
          description
        )
      );
    };

    fetchPokemonDetails(selectedPokemon);
  }, [selectedPokemon]);

  return (
    <>
      <Header />
      <Container theme={theme}>
        <div className="card-container">
          <div className="details">
            {pokemon.varieties.formattedNames.length > 0 ? (
              <select name="" id="">
                {pokemon.varieties.formattedNames.map((variety, index) => {
                  return (
                    <option
                      key={index}
                      onClick={() =>
                        setSelectedPokemon(pokemon.varieties.names[index])
                      }
                    >
                      {variety}
                    </option>
                  );
                })}
              </select>
            ) : (
              <h1>{pokemon.name}</h1>
            )}
            {pokemon.image ? (
              <img src={pokemon.image} alt="" />
            ) : (
              <p>No sprites found</p>
            )}
          </div>
          <div className="attributes">
            <div className="moves">
              <h2>Movimentos: </h2>
              <ul>
                {pokemon.moves.length > 0 ? (
                  pokemon.moves.map((move, index) => {
                    return (
                      <li key={index}>
                        <p>{move.move.name};</p>
                      </li>
                    );
                  })
                ) : (
                  <p>No moves registered yet...</p>
                )}
              </ul>
            </div>
            <div className="abilities">
              <h2>Habilidades:</h2>
              <ul>
                {pokemon.abilities.map((ability, index) => {
                  return (
                    <li key={index}>
                      <p>
                        <strong>
                          {ability.name}
                          {ability.isHidden ? " (hidden)" : ""}
                        </strong>
                        : {""}
                        {`"${ability.description}"`}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="types">
              <h2>Tipos:</h2>
              <ul>
                {pokemon.types.map((type, index) => {
                  return (
                    <li key={index}>
                      <p
                        style={{
                          backgroundColor: `${TypesPokemon[type.type]}`,
                        }}
                      >
                        {type.type}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
