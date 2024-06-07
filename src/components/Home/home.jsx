import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Header } from "../Header/header";
import { fetchPokemonsData } from "../../Services/fetchPokemons";
import { Container, CardsContainer, Card, LoadButtons } from "./styles";
import { ThemeContext } from "../../Contexts/theme-context";

export const Home = () => {
  const { theme } = useContext(ThemeContext);

  const [search, setSearch] = useState("");

  const [quantity, setQuantity] = useState(10);

  const [pokemon, setPokemon] = useState({
    pokemons: [],
  });

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonData = await fetchPokemonsData();
      setPokemon({
        pokemons: pokemonData,
      });
    };

    fetchPokemon();
  }, []);

  const limitedPokemons = pokemon.pokemons.slice(0, quantity);

  const filteredPokemons = pokemon.pokemons.filter(
    (pokemon) =>
      pokemon.name.toString().startsWith(search) ||
      pokemon.id.toString().startsWith(search)
  );

  const handleSearch = () => {
    setSearch(document.getElementById("search-input").value.toLowerCase());
  };

  const handleSearchOnEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Header />
      <Container className="container" theme={theme}>
        {pokemon.pokemons.length > 0 ? (
          <div className="search-container">
            <h1>Nome ou Número</h1>
            <div className="search">
              <input
                id="search-input"
                type="text"
                placeholder="Buscar pokémon..."
                onKeyUp={handleSearchOnEnterKeyPressed}
              />
              <button onClick={handleSearch}>
                <FaMagnifyingGlass />
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        <CardsContainer className="cards-container">
          {limitedPokemons.length > 0 && search === ""
            ? limitedPokemons.map((pokemon) => {
                return (
                  <Card className="card" key={pokemon.id} theme={theme}>
                    <div className="details">
                      <h1>
                        {pokemon.name}{" "}
                        <span>#{pokemon.id.toString().padStart(4, "0")}</span>
                      </h1>
                      {pokemon.sprites.front_default === null ? (
                        <p>No sprites found</p>
                      ) : (
                        <img
                          src={
                            pokemon.sprites.versions["generation-v"][
                              "black-white"
                            ].animated.front_default ??
                            pokemon.sprites.other.showdown.front_default ??
                            pokemon.sprites.front_default
                          }
                          alt=""
                        />
                      )}
                    </div>
                    <div className="button-container">
                      <Link to={`/details/${pokemon.name}`}>
                        <button>Ver detalhes</button>
                      </Link>
                      <span className="fake-shadow"></span>
                    </div>
                  </Card>
                );
              })
            : filteredPokemons.map((pokemon) => {
                return (
                  <Card className="card" key={pokemon.id} theme={theme}>
                    <div className="details">
                      <h1>
                        {pokemon.name}{" "}
                        <span>#{pokemon.id.toString().padStart(3, "0")}</span>
                      </h1>
                      {pokemon.sprites.front_default === null ? (
                        <p>No sprites found</p>
                      ) : (
                        <img
                          src={
                            pokemon.sprites.versions["generation-v"][
                              "black-white"
                            ].animated.front_default ??
                            pokemon.sprites.other.showdown.front_default ??
                            pokemon.sprites.front_default
                          }
                          alt=""
                        />
                      )}
                    </div>
                    <div className="button-container">
                      <Link to={`/details/${pokemon.name}`}>
                        <button>Ver detalhes</button>
                      </Link>
                      <span className="fake-shadow"></span>
                    </div>
                  </Card>
                );
              })}
          {filteredPokemons.length === 0 && search !== "" ? (
            <div className="loading-text">
              <p>Nenhum pokémon encontrado</p>
            </div>
          ) : (
            ""
          )}
          {pokemon.pokemons.length === 0 ? (
            <div className="loading-text">
              <p>Carregando pokémons...</p>
            </div>
          ) : (
            ""
          )}
        </CardsContainer>
        <div className="load-buttons">
          {limitedPokemons.length === pokemon.pokemons.length ||
          quantity === 0 ||
          search !== "" ? (
            ""
          ) : (
            <LoadButtons
              className="btn-more"
              onClick={() => setQuantity(quantity + 10)}
            >
              Carregar mais...
            </LoadButtons>
          )}
          {limitedPokemons.length > 10 && search === "" ? (
            <LoadButtons onClick={() => setQuantity(quantity - 10)}>
              Mostrar menos...
            </LoadButtons>
          ) : (
            ""
          )}
        </div>
      </Container>
    </>
  );
};
