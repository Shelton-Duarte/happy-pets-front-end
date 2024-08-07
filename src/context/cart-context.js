import { createContext, useContext, useState } from "react";

// Cria o contexto do carrinho
const CartContext = createContext({});

// Hook personalizado para usar o contexto do carrinho
export const useCart = () => {
  return useContext(CartContext);
};

// Provedor do contexto do carrinho
export const CartProvider = ({ children }) => {
  // Estado do carrinho
  const [cart, setCart] = useState([]);

  // Adiciona um item ao carrinho
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove um item do carrinho
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
