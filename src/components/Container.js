import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../App.css";
import DisplayCart from "./DisplayCart";
import ProductInformation from "./ProductInformation";
import Form from "./Form";
import styled from "styled-components";
import Listing from "./Listing";

function ListaProd() {
  const { Cart } = useContext(GlobalContext);

  const [menuClick, setmenuClick] = useState(true);

  useEffect(() => {
    return;
  }, [menuClick]);

  return (
    <div>
      <Title>
        <h1>Mini Market</h1>
      </Title>
      <Nav>
        <ul>
          <li onClick={() => setmenuClick(!menuClick)}>
            {!menuClick ? "Show Cart" : "Hide Cart"}
          </li>
          <p style={{ color: "red" }}>({Cart.length})</p>
        </ul>
      </Nav>

      <ListDisplay>
        <Listing />
        <ContainerRight>{menuClick ? <DisplayCart /> : ""}</ContainerRight>

        <SecondPage>
          <Form />
          <ProductInformation />
        </SecondPage>
      </ListDisplay>
    </div>
  );
}

export default ListaProd;

export const ListDisplay = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: calc(100vw - 2em);
  margin: 20px auto;
`;

export const ContainerList = styled.div`
  background-color: #353b46;
  padding: 20px 0;
  box-shadow: 1px 1px 20px black;
  border-radius: 10px;
  border-top: 1px white solid;
`;

export const Title = styled.div`
  text-align: center;
  width: calc(100vw - 2em);
  margin: 0 auto;
  padding-top: 2em;
  border-bottom: 3px white solid;
  padding-bottom: 2em;
  background-color: #1e2127;
  border-radius: 10px;
  box-shadow: 1px 1px 20px black;
`;

export const Nav = styled.div`
  ul {
    list-style: none;
    cursor: pointer;
    text-align: right;
    padding-right: 2em;
    padding-top: 1em;
    display: flex;
    justify-content: flex-end
  }

  ul li {
    font-size: 1.2rem;
    margin-left: 2em;
    padding: 0.5em 1em;
    display: inline-block;
  }

  ul li:hover {
    background-color: var(--bg-nav);
    border-radius: 10px;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
`;

export const SecondPage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  width: 100vw;
`;
