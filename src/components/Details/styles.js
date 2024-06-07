import styled from "styled-components";
import floresta from "../../assets/images/floresta.jpg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
  transition: 0.2s ease-in-out;
  & .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    background-color: ;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    margin: 30px 0 20px 0;
    background-color: ${(props) => props.theme.detailsCardBackground};
    & .details {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background: url(${floresta}) no-repeat;
      border-radius: 5px;
      min-width: 500px;
      height: 450px;
      margin: 50px 0 90px 0;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      & h1,
      select {
        text-align: center;
        margin-top: 20px;
        padding: 5px 7px;
        font-family: "RetroGaming", sans-serif;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 5px;
        color: #fff;
      }
      & select {
        border: none;
        outline: none;
        font-size: 25px;
      }
      & option {
        font-size: 17px;
        font-family: sans-serif;
      }
      & img {
        width: 350px;
        height: 350px;
      }
      & p {
        font-family: "RetroGaming";
        font-size: 20px;
        margin-bottom: 100px;
      }
    }
    & .attributes {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 50px;
      color: ${(props) => props.theme.detailsCardColor};
      width: 70%;
      margin-bottom: 70px;
      & h2 {
        font-family: "RetroGaming";
        margin-bottom: 7px;
      }
      & li {
        display: flex;
        gap: 10px;
        font-family: "RetroGaming";
        font-size: 17px;
      }
      & .abilities li {
        flex-direction: column;
      }
      & .moves ul {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      & .moves p {
        font-family: "RetroGaming";
      }
      & .types ul {
        display: flex;
        gap: 10px;
      }
      & .types p {
        border-radius: 5px;
        padding: 2px 7px 2px 7px;
        color: #fff;
      }
    }
  }
`;
