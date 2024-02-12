import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import "./Navbar.css";
import "./Navbar1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faSearch,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../Context/CartContext";

function Navbar() {
  const [menu, setMenu] = useState(true);
  const { total_quantity } = useCartContext();

  return (
    <>
      <nav className="navbar">
        <div className="nav1">
          <NavLink to="/" className="logo">
            YourStore
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `home headerItems ${isActive ? "coloron" : "colorof"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              `products headerItems ${isActive ? "coloron" : "colorof"}`
            }
          >
            Products
          </NavLink>
        </div>

        <div className="nav2">
          <form className="searchTab">
            <input
              className="search"
              type="text"
              placeholder="Search.."
              name="search"
            />
            <button type="submit" className="searchButton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          <NavLink
            to="cart"
            className={({ isActive }) =>
              `hover cartIcon  ${isActive ? "colorof" : "colorof"}`
            }
          >
            <div className="cart">
              <span className="cartQuantity">{total_quantity}</span>
         <div className="icon">   <FontAwesomeIcon icon={faCartShopping} /></div>
            </div>
            
          
          </NavLink>

          {/* <NavLink
            to="favorites"
            className={({ isActive }) =>
              `hover headerItems ${isActive ? "coloron" : "colorof"}`
            }
          >
            <FontAwesomeIcon icon={faHeart} />
          </NavLink> */}
          <button type="submit" className="login">
            Login
          </button>
          <button
            className="bars"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu ? (
              <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
            ) : (
              <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff" }} />
            )}
          </button>
        </div>
        <div
          className={menu ? "lowerItemsContainer" : "lowerItemsContainerShow "}
        >
          <div className="lowerItems">
            <form className="searchTab1">
              <input
                className="search"
                type="text"
                placeholder="Search.."
                name="search"
              />
              <button type="submit" className="searchButton">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `headerItems ${isActive ? "coloron" : "colorof"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="products"
              className={({ isActive }) =>
                `headerItems ${isActive ? "coloron" : "colorof"}`
              }
            >
              Products
            </NavLink>
            <button type="submit" className="login1">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
