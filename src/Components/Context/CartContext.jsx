import React, { useEffect } from "react";
import { useReducer, useContext, createContext } from "react";
import reducer from "../Reducer/cartReducer"


const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("CartItems");
    // if (localCartData == []) {
    //     return [];
    // }
    // else {
    //     return JSON.parse(localCartData);
    // }


    const parsedData = JSON.parse(localCartData);
    if (!Array.isArray(parsedData)) return [];
    return parsedData;
}

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_quantity: "",
    total_amount: "",
    shipping_fee: 500,
}
const CartProvider = ({children}) => {

    const [state, dispatch ] = useReducer(reducer, initialState);

    const addToCart = (id, quantity, singleProduct, setQuantity) => {
        dispatch({type: "ADD_TO_CART", payload: {id, quantity, singleProduct, setQuantity}})
    };

    const setDecrement = (id) => {
        dispatch( {type: "SET_DECREMENT", payload: id});
    }

    const setIncrement = (id) => {
        dispatch( {type: "SET_INCREMENT", payload: id});
    }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id});
    }


    useEffect(() => {

        dispatch({type: "CART_TOTAL_QUANTITY"})

        localStorage.setItem("CartItems", JSON.stringify(state.cart));
    }, [state.cart]);


    return <CartContext.Provider value={{...state, addToCart, removeItem, setDecrement, setIncrement}}>{children}</CartContext.Provider>

};

const useCartContext = () =>{
    return useContext(CartContext);
}

export { CartProvider,useCartContext };