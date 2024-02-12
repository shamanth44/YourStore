

const cartReducer = (state, action) => {

    if(action.type === "ADD_TO_CART") {
        let { id, quantity, singleProduct, setQuantity} = action.payload;


        let existingProduct = state.cart.find((currItem) => currItem.id == id + singleProduct.name);


        if (existingProduct) {
          let updatedProduct = state.cart.map((currElement) => {
            if(currElement.id == id + singleProduct.name) {
              let newQuantity = currElement.quantity + quantity;

              if (newQuantity >= currElement.max) {
                newQuantity = currElement.max;
              }
              return {
                ...currElement,
                quantity: newQuantity,
              }
            }
            else{
              return currElement;
            }
           
          })

          return {
            ...state,
            cart: updatedProduct,
          }
        }

        else {

          let cartProduct;
          
          cartProduct = {
            id: id + singleProduct.name,
            name: singleProduct.name,
            quantity,
            setQuantity,
            image: singleProduct.image[0].url,
            price : singleProduct.price,
            max: singleProduct.stock,
          };
          
          return {
            ...state,
            cart: [...state.cart, cartProduct],
          }
          
        }
        
    }


    if (action.type === "SET_DECREMENT") {
      let updatedProduct = state.cart.map((currElement) => {
        if(currElement.id === action.payload) {
          let decrementQuantity = currElement.quantity - 1;
          if (decrementQuantity <= 1) {
            decrementQuantity = 1;
          }
          return {
            ...currElement,
            quantity: decrementQuantity,
          }
        }
        else{
          return currElement;
        }

      });
      return { ...state, cart: updatedProduct };
    }



    if (action.type === "SET_INCREMENT") {
      let updatedProduct = state.cart.map((currElement) => {
        if(currElement.id === action.payload) {
          let incrementQuantity = currElement.quantity + 1;
          if (incrementQuantity >= currElement.max) {
            incrementQuantity = currElement.max;
          }
          return {
            ...currElement,
            quantity: incrementQuantity,
          }
        }
        else{
          return currElement;
        }

      });
      return { ...state, cart: updatedProduct };
    }



    

    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (currElement) => currElement.id !== action.payload )
      return {
        ...state,
        cart: updatedCart,
      }
    }


    if(action.type= "CART_TOTAL_QUANTITY"){
      let updateQuantityValue = state.cart.reduce((initialValue, currQuantity) => {
        let { quantity } = currQuantity;

        initialValue = initialValue  + quantity;
        return initialValue;
      }, 0);

      return{
        ...state,
        total_quantity: updateQuantityValue,
      };
    }

  return state;
}

export default cartReducer;
