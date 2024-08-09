import React from "react";

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center">
          <img
            src={product.src}
            alt={product.alt}
            className="w-full h-[200px] object-cover rounded-md"
          />
          <h2 className="text-xl font-bold mt-4">{product.alt}</h2>
          <p className="text-gray-600 mt-2">{`Price: $${product.price}`}</p>
          <p className="text-gray-800 mt-2">Detailed description here...</p>
          {/* Add any additional details you want to show */}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
