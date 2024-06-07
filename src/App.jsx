import "./App.css";
import { createGlobalStyle } from "styled-components";
import { PokeRoutes } from "./Routes/route";
import { ThemeProvider } from "./Contexts/theme-context";

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <PokeRoutes />
      </ThemeProvider>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'PokemonHollow';
  src: url('../src/assets/fonts/Pokemon%20Hollow.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'PokemonSolid';
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'RetroGaming';
  src: url('../src/assets/fonts/Retro%20Gaming.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  
  height: 100%;
}

ul, li {
  list-style-type: none;
}
`;

export default App;
