import React from "react";
import { useCartContext } from "../Context/CartContext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useProductContext } from "../Context/ProductContext";
import Quantity from "../Products/Quantity";
import "./CartList.css";

function CartList({ id, name, image, price, quantity }) {
  const { removeItem, setDecrement, setIncrement } = useCartContext();
  const { singleProduct } = useProductContext();
  const { stock } = singleProduct;
  // const {quantity, setQuantity} = useState(0);
  return (
    <>
      <div className="singleCartItem">
        <div className="productImage">
          <img src={image} alt="" />
        </div>
        <h1 className="name">{name}</h1>
        <p className="price">Price: ₹{price}</p>
        {/* <p>{quantity}</p> */}

        <Quantity
          className="quantity"
          quantity={quantity}
          setIncrement={() => setIncrement(id)}
          setDecrement={() => setDecrement(id)}
        />
        <p className="total">Total: ₹{price * quantity}</p>
        <button className="remove" onClick={() => removeItem(id)}>
          Remove Item
        </button>
      </div>
    </>
  );
}

export default CartList;
