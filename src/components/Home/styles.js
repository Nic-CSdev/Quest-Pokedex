import fundoPokemon from "../../assets/images/fundo-pokemon.jpg";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: .2s ease-in-out;
  & .search-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 150px;
    margin-top: 40px;
    padding: 30px;
    background-color: rgba(127, 0, 255);
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    .search {
      display: flex;
      width: 100%;
    }
    & h1 {
      align-self: flex-start;
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      text-transform: uppercase;
      color: #fff;
    }
    & input, & button {
      height: 50px;
      border-radius: 5px;
      border: none;
    }
    & input {
      width: 300px;
      outline: none;
      padding-left: 10px;
      font-family: "Poppins", sans-serif;
      &::placeholder {
        font-family: "Poppins", sans-serif;
        color: #000;
      }
      &: -webkit-autofill, 
      &: -webkit-autofill:hover,
      &: -webkit-autofill:focus {
        border: none;
        -webkit-text-fill-color: #000;
        -webkit-box-shadow: 0 0 0px 1000px #fff inset;
        transition: background-color 5000s ease-in-out 0s;
      }
    }
    & button {
      background-color: #000;
      padding: 10px 13px;
      margin-left: 10px;
      font-size: 30px;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
    }
  }
  & .load-buttons {
    display: flex;
    gap: 20px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin-top: 20px;
  & .loading-text {
    display: flex;
    height: 50vh;
    justify-content: center;
    align-items: center;
    & p {
      font-family: "Poppins", sans-serif;
      font-size: 20px;
    }
  } 
  & .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #000;
    border-radius: 5px;
    background: url(${fundoPokemon}) no-repeat center;
    background-size: cover;
    margin-top: 20px;
    width: 250px;
    height: 200px;
    & p {
      font-family: "Poppins", sans-serif;
      font-weight: bold;
    }
    & h1 {
      margin: 20px 0 20px 0;
      padding: 0 10px 0 10px;
      font-size: 15px;
      font-family: "Poppins", sans-serif;
      text-transform: uppercase;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fcefef;
      & span {
        display: inline-block;
        background-color: rgba(255, 252, 127, 0.8);
        color: #000;
        border-radius: inherit;
        margin: 5px 0 5px 5px;
        padding: 0 5px 0 5px;
      }
    }
  }
  & img {
    width: 100px;
    height: 100px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 320px;
  margin: 20px;
  background-color: #ce2828;
  border-radius: 5px;
  box-shadow:  0 0 10px rgba(0, 0, 0, 0.9);
  z-index: 1;
  & .button-container {
    position: relative;
    margin-top: 20px;
    & button {
      background-color: white;
      border: 2px solid #000;
      color: black;
      padding: 15px 32px;
      text-align: center;
      display: inline-block;
      font-size: 15px;
      font-family: "Poppins", sans-serif;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        cursor: pointer;
        transform: translate(-2px, -2px);
      }
    }
    & .fake-shadow {
      position: absolute;
      background-color: #000;
      height: 90%;
      width: 100%;
      top: 10px;
      left: 5px;
      z-index: -1;
    }
  }
`;

export const LoadButtons = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  padding: 20px;
  margin: 20px 0 20px 0;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
