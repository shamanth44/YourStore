const allProductReducer = (state, action) => {
  switch (action.type) {
   // case "ALL_PRODUCTS": ----OLD----

   case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
       // products: [...action.payload], ----OLD----

       filter_products: [...action.payload], //
       all_products: [...action.payload], //
      };

    case "UPDATE_FILTER":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    // case "FILTER_PRODUCTS":
    //   let { filter_products } = state;
    //   let filterProduct = [...filter_products];

    //   const { category } = state.filters;

    //   if (category) {
    //     filterProduct = filterProduct.filter((currElement) => {
    //       return currElement.category === category;
    //     });
    // }
    
    // return {
    //     ...state,
    //     filter_products: filterProduct,
    // };
    
    // default:
    //   return state;


    case "FILTER_PRODUCTS":

    let { all_products } = state;
    let tempFilterProduct = [...all_products];

    const { category } = state.filters;

    if (category !== "All") {
        tempFilterProduct =tempFilterProduct.filter((currElement) => {
            return currElement.category === category;
        })
    }


    return {
        ...state,
        filter_products: tempFilterProduct
    }
  }
};

export default allProductReducer;
