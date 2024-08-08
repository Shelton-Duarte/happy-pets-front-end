import React, { useState } from "react";
import { NavBar } from "./NavBar";
import Sidebar from "./SideBar";

const PetCard = ({ src, alt }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-slate-50 shadow-md p-3 rounded-lg w-full sm:w-[200px] md:w-[250px] lg:w-[300px] flex flex-col items-center">
      <img
        src={src}
        alt={alt}
        className="w-full h-[150px] sm:h-[170px] object-cover rounded-md"
      />
      <h3 className="font-semibold mt-3 text-sm sm:text-base">Quantity</h3>
      <div className="flex items-center mt-2 gap-2">
        <button
          onClick={decrementQuantity}
          className="bg-white text-black px-2 py-1 rounded hover:bg-red-700 transition text-sm"
        >
          -
        </button>
        <span className="bg-white px-2 py-1 rounded text-sm">{quantity}</span>
        <button
          onClick={incrementQuantity}
          className="bg-white text-black px-2 py-1 rounded hover:bg-green-700 transition text-sm"
        >
          +
        </button>
      </div>
      <div className="mt-2 flex gap-2">
        <button className="bg-white text-blue-500 border border-blue-500 px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition text-sm">
          See details
        </button>
      </div>
      <button className="bg-blue-500 text-white mt-2 px-4 py-1 rounded hover:bg-blue-800 transition text-sm">
        Add to shopping cart
      </button>
    </div>
  );
};

const AllProducts = () => {
  return (
    <>
      <div className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
            Pets
          </h1>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
            <PetCard src="/Job/Pets/alan-king-.jpg" alt="Alan King" />
            <PetCard
              src="/Job/Pets/baptist-standaert-.jpg"
              alt="Baptist Standaert"
            />
            <PetCard src="/Job/Pets/beagle-dog-.jpg" alt="Beagle Dog" />
            <PetCard
              src="/Job/Pets/labrador-retriever-portrait.jpg"
              alt="Labrador Retriever"
            />
            <PetCard src="/Job/Pets/Pitbull.jpeg" alt="Pitbull" />
            <PetCard src="/Job/Pets/oscar-sutton-.jpg" alt="Oscar Sutton" />
          </div>
        </div>
        <div className="mb-12">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
            Dog Food
          </h1>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
            <PetCard src="/Job/Racoes/-center-1.avif" alt="-center-1" />
            <PetCard
              src="/Job/Racoes/Classic-Puppy-.png"
              alt="Classic-Puppy-"
            />
            <PetCard src="/Job/Racoes/coco-.jpg" alt="coco-" />
            <PetCard src="/Job/Racoes/Group-shots.png" alt="Group-shots" />
            <PetCard
              src="/Job/Racoes/Jock-Grandeur-Large-Breed-Puppy-2kg-.jpg"
              alt="Jock"
            />
            <PetCard
              src="/Job/Racoes/karoo-main-page-adult-range-dog.webp"
              alt="karoo"
            />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
            Accessories
          </h1>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
            <PetCard src="/Job/Acessorios/coleira.jfif" alt="coleira" />
            <PetCard src="/Job/Acessorios/comedor.webp" alt="comedor" />
            <PetCard src="/Job/Acessorios/comedores.jpg" alt="comedores" />
            <PetCard
              src="/Job/Acessorios/Dog_Clothing_1000x1000_1.jpg"
              alt="Dog_Clothing"
            />
            <PetCard
              src="/Job/Acessorios/Dog_Toys_Sports_Acc_1000x1000_1.jpg"
              alt="Dog Toys"
            />
            <PetCard
              src="/Job/Acessorios/Dog_Leads_Collars_1000x1000_1.jpg"
              alt="Dog_Leads_Collars"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
