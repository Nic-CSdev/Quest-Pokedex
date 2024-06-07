import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, Title } from "./styles";
import { ThemeContext } from "../../Contexts/theme-context";
import { LuMoonStar } from "react-icons/lu";
import { FaRegSun } from "react-icons/fa6";
import { themes } from "../../Objects/themes";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Title>NICKDÉX</Title>
      </Link>
      <button onClick={toggleTheme}>
        {theme === themes.light ? <LuMoonStar /> : <FaRegSun />}
      </button>
    </HeaderContainer>
  );
};
