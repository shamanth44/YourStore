import React from "react";
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./DisplayProduct.css"

function DisplayProducts(currElement) {
  const { id, image, name, price } = currElement;
  return (
    <>

      <div className="singleCard">
      <NavLink to={`/singleproduct/${id}`}>
          <img src={image} alt="" />
          </NavLink>
        <h1>{name}</h1>
        <p>Price:{price}</p>
        <button className="addToCart">ADD TO CART</button>
    
    </div>
    
{/* <h1>{name}</h1> */}
    </>
  );
}

export default DisplayProducts;
