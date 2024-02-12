import React from "react";
import { useCartContext } from "../Context/CartContext";
import CartList from "./CartList";
import "./CartList.css";
import { NavLink } from "react-router-dom"

function Cart() {
  const { cart } = useCartContext();

  return (
    <>

      <div className="cartItems">
        {cart.map((currElement) => {
          return <CartList key={currElement.id} {...currElement} />;
        })}
      </div>
      <div className="hr1"></div>
      <div className="pricingContainer">

      <div className="pricing">
        <p>Subtotal: 9999</p>
        <div className="hr"></div>
        <p>Ordertotal: 9999</p>
        <NavLink to={"/orders"}>

        <button className="placeOrder">Place Order</button>
        </NavLink>
      </div>
      </div>
    </>
  );
}

export default Cart;
