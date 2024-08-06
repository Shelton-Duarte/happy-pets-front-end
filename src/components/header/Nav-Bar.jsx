import React, { useState } from 'react';
import { CaretDoubleDown } from '@phosphor-icons/react';

const PetCard = ({ src, alt }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-gray-300 p-4 rounded-lg w-[200px] flex flex-col items-center">
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
      
      <button className="bg-blue-500 text-white mt-2 px-4 py-1 rounded hover:bg-blue-800 transition">Add to shopping cart</button>
    </div>
  );
};

const NavBar = () => {
  return (
    <>
      <div className="bg-gray-200  w-[75%] p-4 fixed top-0 right-0 z-10">
        <div className="flex justify-end items-center font-semibold">
          <div className="flex items-center gap-4">
            <button className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
              SignUp
            </button>
            <button className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-[75%] p-4 fixed top-16 right-0 z-10"> 
        <div className="flex items-center gap-2">
        
          <p className="text-black px-4 py-1 cursor-pointer flex font-semibold text-xl text-blue-700">
          See our products <CaretDoubleDown size={32} />
          </p>
        </div>
      </div>
      <div className='py-40'>
        <h1 className='font-bold text-2xl ml-4'>Pets</h1>
        <div className='flex flex-wrap gap-4 p-4'>
          <PetCard src="/Job/Pets/alan-king-.jpg" alt="Alan King" />
          <PetCard src="/Job/Pets/baptist-standaert-.jpg" alt="Baptist Standaert" />
          <PetCard src="/Job/Pets/beagle-dog-.jpg" alt="Beagle Dog" />
          <PetCard src="/Job/Pets/labrador-retriever-portrait.jpg" alt="Labrador Retriever" />
          <PetCard src="/Job/Pets/Pitbull.jpeg" alt="Pitbull" />
          <PetCard src="/Job/Pets/unique-white-german-boxer.jpg" alt="White German Boxer" />
          <PetCard src="/Job/Pets/oscar-sutton-.jpg" alt="Oscar Sutton" />
          
        </div>
        <h1 className='font-bold text-2xl ml-4'>Dog Food</h1>
        <div className='flex flex-wrap gap-4 p-4'>
          <PetCard src="/Job/Racoes/-center-1.avif" alt="-center-1" />
          <PetCard src="/Job/Racoes/Classic-Puppy-.png" alt="Classic-Puppy-" />
          <PetCard src="/Job/Racoes/coco-.jpg" alt="coco-" />
          <PetCard src="/Job/Racoes/Group-shots.png" alt="Group-shots" />
          <PetCard src="/Job/Racoes/Jock-Grandeur-Large-Breed-Puppy-2kg-.jpg" alt="Jock" />
          <PetCard src="/Job/Racoes/Jock-Junior-.png" alt="Jock-Junior" />
          <PetCard src="/Job/Racoes/karoo-main-page-adult-range-dog.webp" alt="karoo" />
         
        </div>
        <h1 className='font-bold text-2xl ml-4'>Acessories</h1>
        <div className='flex flex-wrap gap-4 p-4'>
          <PetCard src="/Job/Acessorios/coleira.jfif" alt="coleira" />
          <PetCard src="/Job/Acessorios/comedor.webp" alt="comedor" />
          <PetCard src="/Job/Acessorios/comedores.jpg" alt="comedores" />
          <PetCard src="/Job/Acessorios/Dog_Clothing_1000x1000_1.jpg" alt="Dog_Clothing" />
          <PetCard src="/Job/Acessorios/Dog_Toys_Sports_Acc_1000x1000_1.jpg" alt="Dog_Toys_Sports" />
          <PetCard src="/Job/Acessorios/DogKennelsAndFlaps_1000x1000_1.jpg" alt="DogKennelsAndFlaps" />
          <PetCard src="/Job/Acessorios/Dog_Leads_Collars_1000x1000_1.jpg" alt="Dog_Leads_Collars" />
          
        </div>
      </div>
    </>
  );
}

export default NavBar;
