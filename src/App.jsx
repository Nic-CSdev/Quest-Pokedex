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
