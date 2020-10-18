import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import styled from "styled-components";

const DisplayCart = () => {
  const { Cart, CountCart, dispatch } = useContext(GlobalContext);

  return (
    <div className="cart">
      <div style={{ marginBottom: 20 }}>
        <h2>Cart</h2>
      </div>
      <div className="button_empty_cart">
        <button onClick={() => dispatch({ type: "EMPTY_CART" })}>
          Empty Cart
        </button>
      </div>
      <div className="container-cart">
        <CartCSS>
          <div className="displayCart">
            <div className="cart_id">Item</div>
            <div className="cart_name" style={{ textAlign: "center" }}>
              Name
            </div>
            <div className="cart_price">Price</div>
            <div className="cart_cantidad" style={{ textAlign: "center" }}>
              Quantity
            </div>
            <div className="cart_price_total" style={{ textAlign: "right" }}>
              Total
            </div>
          </div>
          <div>
            {Cart.map((t, index) => {
              return t.quantity !== 0 ? (
                <div key={index} className="displayCart">
                  <div className="cart_id">{t.id} </div>
                  <div className="cart_name">{t.name} </div>
                  <div className="cart_price">€ {t.price}</div>
                  <div className="cart_cantidad">
                    {t.quantity}
                    <button
                      onClick={() =>
                        dispatch({ type: "UPDATE_CART_INC", index })
                      }
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "UPDATE_CART_DEC", index })
                      }
                    >
                      -
                    </button>
                  </div>
                  <div className="cart_price_total">
                    € {t.price * t.quantity}.-{" "}
                  </div>
                  <div className="cart_button_del">
                    <button
                      style={{ padding: 5 }}
                      onClick={() => dispatch({ type: "DEL_CART", t, index })}
                    >
                      Del
                    </button>
                  </div>
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </CartCSS>
      </div>

      <div style={{ marginTop: 20 }}>
        {CountCart === 0 ? (
          <div style={{ marginBottom: 10, fontSize: "1rem" }}>
            * No items in your Cart yet *
          </div>
        ) : null}
        <hr />
        <div className="cart_subtotal">
          Subtotal: {(CountCart / 1.19).toFixed(2)}.-€{" "}
        </div>
        <div className="cart_vat">
          VAT (19%): {(CountCart - CountCart / 1.19).toFixed(2)}.- €{" "}
        </div>
        <div className="cart_total">Total: {CountCart}.- €</div>
      </div>
    </div>
  );
};

export default DisplayCart;

export const CartCSS = styled.div`
  .displayCart {
    display: grid;
    grid-template-columns: 0.4fr 1fr 0.5fr 1fr 0.5fr 0.5fr;
    grid-template-rows: auto;
    margin-top: 5px;
    background-color: #353b46;
    padding: 10px 0;
    box-shadow: 1px 1px 20px black;
    border-radius: 10px;
    border-top: 1px white solid;
  }
`;
