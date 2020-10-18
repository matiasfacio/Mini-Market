import React from "react";
import "./App.css";
import Container from "./components/Container";
import GlobalContextFunction from "./context/GlobalContext";
import styled from "styled-components";

export default function App() {
  return (
    <div className="App-main">
      <Body>
        <GlobalContextFunction>
          <Container />
        </GlobalContextFunction>
      </Body>
    </div>
  );
}

export const Body = styled.body`
  background: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  height: auto;
  font-size: calc(10px + 2vmin);
  p,
  h1,
  h2 {
    color: white;
  }
  p {
    font-size: 1rem;
  }
  button {
    cursor: pointer;
    border-radius: 10px;
    padding: 3px 5px;
  }
`;
