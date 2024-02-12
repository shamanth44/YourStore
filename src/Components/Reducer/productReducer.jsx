const ProductReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "API_DATA":
      const featuredData = action.payload.filter((currElement) => {
        return currElement.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: featuredData,
      };

    case "ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SINGLR_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
