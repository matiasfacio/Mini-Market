import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext";
import styled from 'styled-components'

function Listing(){

    const { ProductsAvailable, dispatch } = useContext(GlobalContext);

    return(
        <ListProducts>
          <TitleButton>
            <h2>Products</h2>
            <p>*our I products with love*</p>
          </TitleButton>

          <ContainerList>
            <Product>
              <div className="product_id" style={{ fontSize: "1.2rem" }}>
                ID
              </div>
              <div className="product_name" style={{ fontSize: "1.2rem" }}>
                NAME
              </div>
              <div className="product_price" style={{ fontSize: "1.2rem" }}>
                PRICE
              </div>
            </Product>
            {ProductsAvailable.map((t, index) => {
              return (
                <Product key={index}>
                  <div className="product_id">{t.id})</div>
                  <div className="product_name">{t.name}</div>
                  <div className="product_price">€ {t.price.toFixed(2)}</div>
                  <button
                    className="product_button_available"
                    style={{
                      backgroundColor: !t.available ? "red" : "green",
                    }}
                    onClick={() => dispatch({ type: "AVAILABLE", index })}
                  >
                    {t.available ? "Deactivate" : "Activate"}
                  </button>

                  {t.available ? (
                    <button
                      className="product_button_add"
                      onClick={() => dispatch({ type: "ADD_CART", index })}
                    >
                      ADD
                    </button>
                  ) : (
                    ""
                  )}
                  <button
                    className="product_display_info"
                    style={{ border: t.display ? "2px red solid" : "none" }}
                    onMouseOver={() => {
                      dispatch({ type: "CLEAR_INFO" });
                      dispatch({ type: "INFO_ITEM", index });
                    }}
                  >
                    INFO
                  </button>
                </Product>
              );
            })}
          </ContainerList>
        </ListProducts>
    )
}

export default Listing

export const TitleButton = styled.div`
  padding-bottom: 10px;
`;

export const ListProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 55vw;
  justify-content: space-around;
  align-items: flex-start;
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: 0.25fr repeat(3, 1fr) repeat(2, 0.5fr);
  grid-template-rows: auto;
  justify-content: start;
  align-items: start;
  width: 50vw;
  margin-bottom: 10px
`;

export const ContainerList = styled.div`
  background-color: #353b46;
  padding: 20px 0;
  box-shadow: 1px 1px 20px black;
  border-radius: 10px;
  border-top: 1px white solid;
`;

export const ListDisplay = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: calc(100vw - 2em);
  margin: 20px auto;
`;