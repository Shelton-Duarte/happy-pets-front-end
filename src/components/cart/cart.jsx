import React from "react";
import { useCart } from "../../context/cart-context";
import { NavLink } from "react-router-dom"; // Importa o useNavigate

const CartItem = ({ item, updateQuantity, removeFromCart }) => (
  <div
    key={item.id}
    className="flex items-center justify-between border-b py-2"
  >
    <img src={item.src} alt={item.alt} className="w-20 h-20 object-cover" />
    <div className="flex-1 mx-4">
      <h2 className="font-semibold">{item.alt}</h2>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          className="bg-white text-black px-2 py-1 rounded border border-gray-300"
          aria-label={`Decrease quantity of ${item.alt}`}
        >
          -
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="bg-white text-black px-2 py-1 rounded border border-gray-300"
          aria-label={`Increase quantity of ${item.alt}`}
        >
          +
        </button>
      </div>
    </div>
    <div className="text-right">
      <p className="font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 mt-2 underline"
        aria-label={`Remove ${item.alt} from cart`}
      >
        Remove
      </button>
    </div>
  </div>
);

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getDeliveryFee,
    getTotalWithDelivery,
    clearCart,
  } = useCart();

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))
        )}
      </div>
      <div className="mt-4 space-y-2">
        <p className="font-semibold">Subtotal: ${getCartTotal().toFixed(2)}</p>
        <p className="font-semibold">
          Delivery Fee (10%): ${getDeliveryFee().toFixed(2)}
        </p>
        <p className="font-semibold">
          Total: ${getTotalWithDelivery().toFixed(2)}
        </p>
      </div>
      <NavLink className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Checkout
      </NavLink>
    </div>
  );
};

export default Cart;
