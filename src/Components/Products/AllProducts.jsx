import React from "react";
import { useAllProductsContext } from "../Context/AllProductsContext";
import DisplayProducts from "./DisplayProducts";
import ProductFilter from "./ProductFilter";

function AllProducts() {
 // const { products } = useAllProductsContext(); ----OLD----

 const { filter_products } = useAllProductsContext(); //

 
  return (
    <>
      <div className="filterAndProducts">
        <div className="filterSection">
        <ProductFilter/>
        </div>

        <div className="allProductsContainer">
          {/* {products.map((currElement) => { ----OLD---- */ } 
          {filter_products.map((currElement) => {  //

            return <DisplayProducts key={currElement.id} {...currElement} />;
          })}
        </div>
      </div>
    </>
  );
}

export default AllProducts;

{
  /* function AllProducts() {

  
  return (
    <div>
      <h1>All Products</h1>


    </div>
  )
}

export default AllProducts */
}
