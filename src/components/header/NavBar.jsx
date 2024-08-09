import React, { useState } from "react";
import { ShoppingCart } from "phosphor-react";
import { useCart } from "../../context/cart-context";
import Sidebar from "./SideBar"; // Corrigido para Sidebar com maiúscula inicial
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para o carrinho
  const [showModal, setShowModal] = useState(false); // Estado para o modal

  const {
    cart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getDeliveryFee,
    getTotalWithDelivery,
    clearCart,
  } = useCart();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const toggleCart = () => setIsCartOpen((prev) => !prev); // Alterna a visibilidade do carrinho

  const handleCheckout = () => {
    clearCart(); // Limpa o carrinho
    setShowModal(true); // Exibe o modal de sucesso
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="bg-transparent w-full fixed top-0 left-0 z-50 flex justify-between items-center p-6">
        {/* Menu Button for Mobile */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        {/* Right-aligned items */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Shopping Cart Icon */}
          <div className="relative">
            <button className="relative flex items-center" onClick={toggleCart}>
              <ShoppingCart size={32} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            </button>
          </div>

          {/* SignUp and Login Buttons */}
          <div className="hidden md:flex gap-4 items-center">
            <button
              className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl cursor-pointer"
              onClick={() => console.log("SignUp clicked")}
            >
              SignUp
            </button>
            <button
              className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl cursor-pointer"
              onClick={() => console.log("Login clicked")}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-200 p-4 flex flex-col items-center ${
          isSidebarOpen ? "block" : "hidden"
        } z-50`}
      >
        <button className="text-2xl self-end mb-4" onClick={toggleSidebar}>
          ✕
        </button>
        <button
          className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl mb-2 cursor-pointer"
          onClick={() => console.log("SignUp clicked")}
        >
          SignUp
        </button>
        <button
          className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl cursor-pointer"
          onClick={() => console.log("Login clicked")}
        >
          Login
        </button>
      </div>

      {/* Cart */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white p-4 shadow-lg z-50">
          <h1 className="font-bold text-2xl">Shopping Cart</h1>
          <div className="mt-4">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-2"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="flex-1 mx-4">
                    <h2 className="font-semibold">{item.alt}</h2>
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="bg-white text-black px-2 py-1 rounded"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="bg-white text-black px-2 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="mt-4">
            <p>Subtotal: ${getCartTotal().toFixed(2)}</p>
            <p>Delivery Fee (10%): ${getDeliveryFee().toFixed(2)}</p>
            <p>Total: ${getTotalWithDelivery().toFixed(2)}</p>
          </div>
          <NavLink
            to={"/payment"}
            onClick={handleCheckout}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Checkout
          </NavLink>
          <button
            onClick={toggleCart}
            className="bg-gray-500 text-white px-4 py-2 rounded mt-2 ml-3"
          >
            Close
          </button>
        </div>
      )}

      {/* Sidebar */}
      {/* <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        openFaqModal={() => console.log('Open FAQ Modal')}
        openAboutModal={() => console.log('Open About Modal')}
      /> */}
    </>
  );
};
