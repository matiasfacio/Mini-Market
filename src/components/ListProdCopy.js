import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../App.css";
import DisplayCart from "./DisplayCart";
import ProductInformation from "./ProductInformation";
import Form from "./Form";

function ListaProdCopy() {
  const { ProductsAvailable, Cart, dispatch } = useContext(
    GlobalContext
  );

  const [menuClick, setmenuClick] = useState(false);

  useEffect(() => {
    return;
  }, [menuClick]);

  return (
    <div>
      <div className="title">
        <h1>Mini Market</h1>
      </div>
      <nav>
        <ul>
          <li onClick={() => setmenuClick(!menuClick)}>
            {!menuClick ? "Show Cart" : "Hide Cart"}
          </li>
          <p style={{ color: "red" }}>({Cart.length})</p>
        </ul>
      </nav>
      <div className="_listsDisplay">
        <div className="_listProducts">
          <div className="title_list">
            <h2>Products</h2>
            <p>*our I products with love*</p>
          </div>
          <div className="product container_list" style={{ marginBottom: 20 }}>
            <div className="product_id" style={{ fontSize: "1.2rem" }}>
              ID
            </div>
            <div className="product_name" style={{ fontSize: "1.2rem" }}>
              NAME
            </div>
            <div className="product_price" style={{ fontSize: "1.2rem" }}>
              PRICE
            </div>
          </div>
          <div className="container_list">
            {ProductsAvailable.map((t, index) => {
              return (
                <div key={index} className="product">
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
                </div>
              );
            })}
          </div>
          <div className="secondPage">
            <Form />
            <ProductInformation />
          </div>
        </div>

        <div className="container_right">
          {menuClick ? <DisplayCart /> : ""}
        </div>
      </div>
    </div>
  );
}

export default ListaProdCopy;
