import React, { useEffect, useReducer } from "react";
import { createContext, useContext } from "react";
import { useProductContext } from "./ProductContext"
import reducer from "../Reducer/allProductsReducer"

const AllProductsContext = createContext();

const initialstate = {

    filter_products: [],
    all_products: [],



    // products: [],
    filters: {
        category:"all"
    }
}

export const AllProductsContextProvider = ({children}) => { 
  const { products } = useProductContext();
    


    const [state, dispatch ] = useReducer(reducer, initialstate);


    const updateFilter = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: "UPDATE_FILTER", payload: { name, value }});
    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS"});
    }, [products, state.filters])


    useEffect(() => {
        // dispatch({type: "ALL_PRODUCTS", payload: products}) -----OLD------

        dispatch({ type: "LOAD_FILTER_PRODUCTS" , payload: products }) //


    }, [products]);



  return (
    <AllProductsContext.Provider value={{ ...state, updateFilter }}>
        {children}
    </AllProductsContext.Provider>
  );
};


export const useAllProductsContext = () => {
    return useContext(AllProductsContext, );
};

