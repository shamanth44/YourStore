//create context
// provider
// consumer
import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios"
import reducer from '../Reducer/productReducer'

import { createContext } from "react";

const AppContext = createContext();

const apiLink = "https://api.pujakaitem.com/api/products"

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    isSingleLoading: false,
    singleProduct: {},
}

const AppProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (api) => {
        dispatch({type: "LOADING"});
        try {
            const res = await axios.get(api);
            const products = await res.data;
            dispatch({type:"API_DATA", payload: products});
        } catch (error) {
            dispatch({type: "ERROR"});
        }
    }


    const getClickedProduct = async (api) => {

        dispatch({type: "SINGLE_LOADING"})
        try {
            const res = await axios.get(api);
            const singleProduct = await res.data;
            dispatch({type:"SINGLE_PRODUCT", payload: singleProduct});
            


            
        } catch (error) {
            dispatch({type: "SINGLE_ERROR"});
            
        }
    }

    useEffect(() => {
        getProducts(apiLink);
    }, []);


  return <AppContext.Provider value={{...state, getClickedProduct }}>{children}</AppContext.Provider>;
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
