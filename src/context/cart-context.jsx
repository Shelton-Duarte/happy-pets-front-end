// import { createContext, useContext, useState } from "react";

// // Cria o contexto do carrinho
// const CartContext = createContext({});

// // Hook personalizado para usar o contexto do carrinho
// export const useCart = () => {
//   return useContext(CartContext);
// };

// // Provedor do contexto do carrinho
// export const CartProvider = ({ children }) => {
//   // Estado do carrinho
//   const [cart, setCart] = useState([]);

//   // Adiciona um item ao carrinho
//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   // Remove um item do carrinho
//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// import React, { createContext, useContext, useState } from 'react';

// // Cria o contexto do carrinho
// const CartContext = createContext({});

// // Hook personalizado para usar o contexto do carrinho
// export const useCart = () => {
//   return useContext(CartContext);
// };

// // Provedor do contexto do carrinho
// export const CartProvider = ({ children }) => {
//   // Estado do carrinho
//   const [cart, setCart] = useState([]);

//   // Adiciona um item ao carrinho
//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + product.quantity }
//             : item
//         );
//       }
//       return [...prevCart, product];
//     });
//   };

//   // Remove um item do carrinho
//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   // Atualiza a quantidade de um item no carrinho
//   const updateQuantity = (productId, quantity) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId ? { ...item, quantity } : item
//       )
//     );
//   };

//   // Calcula o subtotal do carrinho
//   const getCartTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   // Calcula a taxa de entrega (10% do subtotal)
//   const getDeliveryFee = () => {
//     return getCartTotal() * 0.1;
//   };

//   // Calcula o total com a taxa de entrega
//   const getTotalWithDelivery = () => {
//     return getCartTotal() + getDeliveryFee();
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         getCartTotal,
//         getDeliveryFee,
//         getTotalWithDelivery,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// src/context/cart-context.js
import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productWithId = { ...product, id: uuidv4() };
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.src === productWithId.src);
      if (existingItem) {
        return prevCart.map((item) =>
          item.src === productWithId.src
            ? { ...item, quantity: item.quantity + productWithId.quantity }
            : item
        );
      }
      return [...prevCart, productWithId];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const getDeliveryFee = () => getCartTotal() * 0.1;

  const getTotalWithDelivery = () => getCartTotal() + getDeliveryFee();

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getDeliveryFee,
        getTotalWithDelivery,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


