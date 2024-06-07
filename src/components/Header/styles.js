import styled, { css } from "styled-components";

export const HoverEffects = css`
  color: yellow;
  cursor: pointer;
  transition: 0.2s ease-out;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(127, 0, 255);
  border-bottom: 1px solid #fff;
  & button {
    border: none;
    background: none;
    margin-right: 20px;
    font-size: 30px;
    color: #fff;
    &:hover {
      ${HoverEffects}
    }
  }
`;

export const Title = styled.h1`
  margin-left: 50px;
  font-family: "PokemonHollow", sans-serif;
  color: yellow;
  transition: 0.2s ease-in;
  &:hover {
    text-shadow: 0 0 5px #ffd700, 0 0 5px #ffd700, 0 0 5px #ffd700,
      0 0 5px #ffd700, 0 0 5px #ffd700, 0 0 5px #ffd700, 0 0 10px #ffd700,
      0 0 10px #ffd700;
    color: #000;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;