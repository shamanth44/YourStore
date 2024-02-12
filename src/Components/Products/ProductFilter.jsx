import { useAllProductsContext } from "../Context/AllProductsContext";

import React from "react";

const ProductFilter = () => {
  const {
    all_products,
    updateFilter,
    filters: { category },
  } = useAllProductsContext();

  

  const uniqueCategoryData = (data, property) => {
    let categoryName = data.map((currElement) => {
      return currElement[property];
    });

    return (categoryName = ["All", ...new Set(categoryName)]);
  };

  const productCategories = uniqueCategoryData(all_products, "category");

  return (
    <>
      <section className="filterColumn">
        <h1>Category</h1>
        <div className="categoryList">
          {productCategories.map((currElement, index) => {
            const categorylist =
              currElement.charAt(0).toUpperCase() + currElement.slice(1);
            return (
      
              <button
                key={index}
                type="button"
                name="category"
                value={currElement}
                onClick={updateFilter}
              >
                {categorylist}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductFilter;
