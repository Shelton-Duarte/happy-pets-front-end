import React, { useState } from 'react';

const PetCard = ({ src, alt }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-gray-300 p-4 rounded-lg w-full sm:w-80 flex flex-col items-center">
      <img src={src} alt={alt} className="w-full h-48 object-cover rounded-md" />
      <h3 className='font-semibold mt-3'>Quantity</h3>
      <div className="flex items-center mt-2 gap-2">
        <button onClick={decrementQuantity} className="bg-white text-black px-3 py-1 rounded hover:bg-red-700 hover:text-white transition">-</button>
        <span className='bg-white px-3 py-1 rounded'>{quantity}</span>
        <button onClick={incrementQuantity} className="bg-white text-black px-3 py-1 rounded hover:bg-green-700 hover:text-white transition">+</button>
      </div>
      <div className="mt-2 flex gap-2">
        <button className="bg-white text-blue-500 border border-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition">See details</button>
      </div>
      <button className="bg-blue-500 text-white mt-2 px-6 py-2 rounded hover:bg-blue-800 transition">Add to shopping cart</button>
    </div>
  );
};

export default PetCard;
