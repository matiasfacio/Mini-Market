import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ProductInformation = () => {
  const { ProductsAvailable, dispatch } = useContext(GlobalContext);

  return (
    <div className="product_information">
      <h2>Product Information</h2>
      <p>* please, choose an item from the list *</p>
      <div className="list_description">
        <div className="button_clear_infos">
          <button onClick={() => dispatch({ type: "CLEAR_INFO" })}>
            Clear
          </button>
        </div>
        {ProductsAvailable.map((t, index) => {
          return t.display ? (
            <div className="product_description">* {t.description}</div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default ProductInformation;
