import React, { useState } from 'react';
import { useCart } from '../../context/cart-context';
import Cart from '../cart/cart.jsx';
import NavBar from './NavBar.jsx';



const PetCard = ({ src, alt, price }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ src, alt, price, quantity });
  };

  return (
    <div className="bg-gray-300 p-4 rounded-lg w-full sm:w-[200px] flex flex-col items-center">
      <img src={src} alt={alt} className="w-[170px] h-[170px] object-cover rounded-md" />
      <h3 className='font-semibold mt-3'>Quantity</h3>
      <div className="flex items-center mt-2 gap-2">
        <button onClick={decrementQuantity} className="bg-white text-black px-2 py-1 rounded hover:bg-red-700 transition">-</button>
        <span className='bg-white px-2 py-1 rounded'>{quantity}</span>
        <button onClick={incrementQuantity} className="bg-white text-black px-2 py-1 rounded hover:bg-green-700 transition">+</button>
      </div>
      <div className="mt-2 flex gap-2">
        <button className="bg-white text-blue-500 border border-blue-500 px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition">See details</button>
      </div>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white mt-2 px-4 py-1 rounded hover:bg-blue-800 transition">Add to shopping cart</button>
    </div>
  );
};







const AllProducts = () => {
  return (
    <>
    <NavBar/>
       <div className='pt-40 pb-8'>
        <div className='px-4'>
          <h1 className='font-bold text-2xl'>Pets</h1>
          <div className='flex flex-wrap gap-4 sm:gap-8'>
            <PetCard src="/Job/Pets/alan-king-.jpg" alt="Alan King" price={20} />
            <PetCard src="/Job/Pets/baptist-standaert-.jpg" alt="Baptist Standaert" price={30} />
            <PetCard src="/Job/Pets/beagle-dog-.jpg" alt="Beagle Dog" price={25} />
            <PetCard src="/Job/Pets/labrador-retriever-portrait.jpg" alt="Labrador Retriever" price={35} />
            <PetCard src="/Job/Pets/Pitbull.jpeg" alt="Pitbull" price={40} />
            <PetCard src="/Job/Pets/oscar-sutton-.jpg" alt="Oscar Sutton" price={22} />
          </div>
        </div>
        <div className='px-4 mt-8'>
          <h1 className='font-bold text-2xl'>Dog Food</h1>
          <div className='flex flex-wrap gap-4 sm:gap-8'>
            <PetCard src="/Job/Racoes/-center-1.avif" alt="-center-1" price={15} />
            <PetCard src="/Job/Racoes/Classic-Puppy-.png" alt="Classic-Puppy-" price={18} />
            <PetCard src="/Job/Racoes/coco-.jpg" alt="coco-" price={20} />
            <PetCard src="/Job/Racoes/Group-shots.png" alt="Group-shots" price={22} />
          </div>
        </div>
      </div>
      <Cart />
    </>
  );
};

export default AllProducts;
