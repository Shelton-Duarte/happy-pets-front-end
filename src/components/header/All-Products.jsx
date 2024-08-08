import React, { useState } from "react";
import { useCart } from "../../context/cart-context";
import Cart from "../cart/cart";

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
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="bg-white px-2 py-1 rounded text-sm">{quantity}</span>
        <button
          onClick={incrementQuantity}
          className="bg-white text-black px-2 py-1 rounded hover:bg-green-700 transition text-sm"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <div className="mt-2 flex gap-2">
        <button
          className="bg-white text-blue-500 border border-blue-500 px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition text-sm"
          aria-label="See product details"
        >
          See details
        </button>
      </div>
      <p className="text-gray-600 text-sm mt-1">{`Price: $${price}`}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white mt-2 px-4 py-1 rounded hover:bg-blue-800 transition text-sm"
        aria-label="Add to shopping cart"
      >
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
            <PetCard
              src="/Job/Pets/alan-king-.jpg"
              alt="Alan King"
              price="99.99"
            />
            <PetCard
              src="/Job/Pets/baptist-standaert-.jpg"
              alt="Baptist Standaert"
              price="129.99"
            />
            <PetCard
              src="/Job/Pets/beagle-dog-.jpg"
              alt="Beagle Dog"
              price="89.99"
            />
            <PetCard
              src="/Job/Pets/labrador-retriever-portrait.jpg"
              alt="Labrador Retriever"
              price="119.99"
            />
            <PetCard
              src="/Job/Pets/Pitbull.jpeg"
              alt="Pitbull"
              price="139.99"
            />
            <PetCard
              src="/Job/Pets/oscar-sutton-.jpg"
              alt="Oscar Sutton"
              price="109.99"
            />
          </div>
        </div>
        <div className="mb-12">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
            Dog Food
          </h1>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
            <PetCard
              src="/Job/Racoes/-center-1.avif"
              alt="-center-1"
              price="25.99"
            />
            <PetCard
              src="/Job/Racoes/Classic-Puppy-.png"
              alt="Classic-Puppy-"
              price="35.99"
            />
            <PetCard src="/Job/Racoes/coco-.jpg" alt="coco-" price="28.99" />
            <PetCard
              src="/Job/Racoes/Group-shots.png"
              alt="Group-shots"
              price="30.99"
            />
            <PetCard
              src="/Job/Racoes/Jock-Grandeur-Large-Breed-Puppy-2kg-.jpg"
              alt="Jock"
              price="45.99"
            />
            <PetCard
              src="/Job/Racoes/karoo-main-page-adult-range-dog.webp"
              alt="karoo"
              price="40.99"
            />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
            Accessories
          </h1>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
            <PetCard
              src="/Job/Acessorios/coleira.jfif"
              alt="coleira"
              price="15.99"
            />
            <PetCard
              src="/Job/Acessorios/comedor.webp"
              alt="comedor"
              price="22.99"
            />
            <PetCard
              src="/Job/Acessorios/comedores.jpg"
              alt="comedores"
              price="19.99"
            />
            <PetCard
              src="/Job/Acessorios/Dog_Clothing_1000x1000_1.jpg"
              alt="Dog_Clothing"
              price="27.99"
            />
            <PetCard
              src="/Job/Acessorios/Dog_Toys_Sports_Acc_1000x1000_1.jpg"
              alt="Dog Toys"
              price="24.99"
            />
            <PetCard
              src="/Job/Acessorios/Dog_Leads_Collars_1000x1000_1.jpg"
              alt="Dog_Leads_Collars"
              price="18.99"
            />
          </div>
        </div>
      </div>
      <Cart />
    </>
  );
};

export default AllProducts;
