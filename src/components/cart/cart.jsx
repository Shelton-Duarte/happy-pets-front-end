import React, { useState } from 'react';
import { useCart } from '../../context/cart-context';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getDeliveryFee, getTotalWithDelivery, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    // Função para finalizar o checkout
    clearCart();  // Limpa o carrinho
    setShowModal(true);  // Exibe o modal de sucesso
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='p-4'>
      <h1 className='font-bold text-2xl'>Shopping Cart</h1>
      <div className='mt-4'>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className='flex items-center justify-between border-b py-2'>
              <img src={item.src} alt={item.alt} className='w-20 h-20 object-cover' />
              <div className='flex-1 mx-4'>
                <h2 className='font-semibold'>{item.alt}</h2>
                <div className='flex items-center'>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                    disabled={item.quantity <= 1} 
                    className='bg-white text-black px-2 py-1 rounded'
                  >
                    -
                  </button>
                  <span className='mx-2'>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                    className='bg-white text-black px-2 py-1 rounded'
                  >
                    +
                  </button>
                </div>
              </div>
              <div className='text-right'>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className='text-red-500 mt-2'
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className='mt-4'>
        <p>Subtotal: ${getCartTotal().toFixed(2)}</p>
        <p>Delivery Fee (10%): ${getDeliveryFee().toFixed(2)}</p>
        <p>Total: ${getTotalWithDelivery().toFixed(2)}</p>
      </div>
      <button 
        onClick={handleCheckout} 
        className='bg-blue-500 text-white px-4 py-2 rounded mt-4'
      >
        Checkout
      </button>
      
      {/* Modal */}
      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold'>Checkout Successful</h2>
            <p className='mt-2'>Your order has been placed successfully.</p>
            <button 
              onClick={handleCloseModal} 
              className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
