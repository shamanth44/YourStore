import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";
import "./SingleProduct.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../Context/CartContext";

const API = "https://api.pujakaitem.com/api/products";
function SingleProduct() {
  const { getClickedProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const { addToCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);

  const {
    id: ID,
    name,
    price,
    stock,
    image = [{ url: "" }],
    description,
    company,
  } = singleProduct;
  useEffect(() => {
    getClickedProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <div>
        <h1>...Loading</h1>
      </div>
    );
  }

  return (
    <>
      <h1>Single Product {name}</h1>

      <div className="singleProductCard">
        <div className="imgFlex">
          <img
            className="productImg"
            // src="https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src={image[0].url}
            alt=""
          />
        </div>
        <div className="SingleProductDetails imgFlex">
          <h1>{name}</h1>
          <p>
            Price: <b>₹{price}.00</b>
          </p>
          <p>{description}</p>
          <p>
            Available: <b>{stock > 0 ? "In Stock" : "Out of stock"}</b>
          </p>
          <div className="quantityATC">
            <div className="quantity">
              <button
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => {
                  if (quantity < stock) setQuantity(quantity + 1);
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <NavLink to={"/cart"} 
            onClick={ () => addToCart(id, quantity, singleProduct) }>
              <button className="addToCart">ADD TO CART</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
