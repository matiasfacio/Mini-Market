import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import styled from "styled-components";

const Form = () => {
  const { ProductsAvailable, dispatch } = useContext(GlobalContext);
  const [newItem, setNewItem] = useState({
    name: "",
    id: ProductsAvailable.length + 1,
    stock: 0,
    description: "",
    price: 0,
    available: false,
  });

  return (
    <FormCSS>
      <form
        className="_form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", newItem });
          setNewItem({
            name: "",
            id: ProductsAvailable.length + 2,
            stock: 0,
            description: "",
            price: 0,
            available: false,
          });
        }}
      >
        <div className="flex_form">
          <div>
            <Label>
              <h2>Add New Product</h2>
              <p>* Form for adding new products *</p>
            </Label>
            <br />
            <Label>Name:</Label>
            <input
              type="text"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <br />
            <Label>Id:</Label>
            <input
              type="text"
              value={ProductsAvailable.length + 1}
              onChange={(e) =>
                setNewItem({ ...newItem, id: ProductsAvailable.length + 2 })
              }
            />
            <br />
            <Label>Stock:</Label>
            <input
              type="text"
              value={newItem.stock}
              onChange={(e) =>
                setNewItem({ ...newItem, stock: parseInt(e.target.value) })
              }
            />
            <br />
            <Label>Price:</Label>
            <input
              type="text"
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: parseInt(e.target.value) })
              }
            />
            <br />
            <Label>Description:</Label>
            <input
              type="text"
              value={newItem.description}
              onChange={(e) =>
                setNewItem({ ...newItem, description: e.target.value })
              }
            />
            <br />
          </div>
          <ButtonSubmit type="submit" value="submit">
            Submit
          </ButtonSubmit>
        </div>
      </form>
    </FormCSS>
  );
};

export default Form;

export const FormCSS = styled.form`
  ._form {
    margin-top: 50px;
  }

  .flex_form {
    display: flex;
    justify-content: stretch;
    align-items: center;
    background-color: #353b46;
    padding: 1.5em 1em;
    box-shadow: 1px 1px 20px black;
    margin-bottom: 2em;
    border-top: 1px white solid;
    border-radius: 10px;
  }
`;

export const ButtonSubmit = styled.button`
  cursor: pointer;
  font-size: 1rem;
  background-color: red;
  border-radius: 10px;
  padding: 3px 5px;
  color: white;

  &:hover {
    background-color: black;
    color: yellowgreen;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  color: white;
`;
