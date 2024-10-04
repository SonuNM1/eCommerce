import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();    // Step 1: Create the context 

// CartProvider - this is the component that wraps our entire application (or part of the app that needs access to the context). 

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]); // Step 2: Create state 

  useEffect(() => {
    let existingCartItem = localStorage.getItem('cart') ; 

    if(existingCartItem) setCart(JSON.parse(existingCartItem)) ; 
  }, [])

   // The CartContext.Provider makes thae cart and setCart available to any child component that consumes this context. 

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };


