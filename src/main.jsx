import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SingleProduct from "./Components/Products/SingleProduct";
import { AppProvider } from "./Components/Context/ProductContext";
import AllProducts from "./Components/Products/AllProducts";
import { AllProductsContextProvider } from "./Components/Context/AllProductsContext";
import { CartProvider } from "./Components/Context/CartContext";
import Order from "./Components/Orders/Order";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="products" element={<AllProducts />} />
      <Route path="cart" element={<Cart />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="/orders" element={<Order />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <AllProductsContextProvider>
      <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
    </AllProductsContextProvider>
  </AppProvider>
);
