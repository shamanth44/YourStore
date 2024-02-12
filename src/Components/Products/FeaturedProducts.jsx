import React from "react";
import { useProductContext } from "../Context/ProductContext";
import Products from "./Products";

function FeaturedProducts() {
  const { isLoading, featuredProducts } = useProductContext();


  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  return (
    <>
      <div className="featured">
        <h1 className="heading">Featured Products</h1>

        <div className="productCorousel">

        {featuredProducts.map((currElement) => {
                return <Products  key={currElement.id} {...currElement}/>
                
            })}

          {/* <div>
            <img src="/Assets/model1.jpg" alt="" />
          </div>
          <div>
            <img src="/Assets/model2.jpeg" alt="" />
          </div>
          <div>
            <img src="/Assets/model3.jpeg" alt="" />
          </div>
          <div>
            <img src="/Assets/model4.jpeg" alt="" />
          </div>
          <div>
            <img src="/Assets/model5.jpeg" alt="" />
          </div> */}


        </div>

        
      </div>
    </>
  );
}

export default FeaturedProducts;
