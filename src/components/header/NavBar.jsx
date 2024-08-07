import React from 'react';
import { CaretDoubleDown, ShoppingCart } from "phosphor-react";
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <div className="bg-gray-200 w-full md:w-[75%] p-4 fixed top-0 right-0 z-10">
        <div className="flex justify-end items-center font-semibold">
          <div className="flex items-center gap-4">
            <Link to="/pages/sign-up">
            <button className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            SignUp
            </button>
            </Link>
            <Link to="/pages/login">
            <button className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Login
            </button>
            </Link>
            
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-full md:w-[75%] p-4 fixed top-16 right-0 z-10">
        <div className="flex items-center justify-between">
          <p className="text-black px-4 py-1 cursor-pointer flex font-semibold text-xl hover:text-blue-700">
            See our products <CaretDoubleDown size={32} />
          </p>
          
          <div className="relative hover:bg-blue-700 border border-blue-700 bg-white text-blue-500 hover:text-white px-2 py-1 rounded-full cursor-pointer">
            <ShoppingCart size={32} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
