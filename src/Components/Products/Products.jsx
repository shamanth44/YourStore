import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Products(currElement) {
  const { id, image, name, price } = currElement;
  return (
    <>
      <div  className="card">
          <NavLink to={`/singleproduct/${id}`}>
          <img src={image} alt="" />
          </NavLink>
          <div className="productDetails">
          <div className="TitleAndPrice">
            <h1>{name}</h1>
            <p>₹{price}.00</p>
          </div >
          <FontAwesomeIcon icon={faHeart} className="addToFave"/ >
          </div>
      </div>
    </>
  );
}

export default Products;
