import React from 'react';
import { CaretDoubleDown, ShoppingCart } from "phosphor-react";
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      {/* <div className="bg-gray-200 w-full p-4 fixed top-0 left-0 z-30"> */}
        {/* <div className="flex justify-between items-center">
          
         
        </div> */}
      {/* </div> */}

      {/* Bottom Navigation Bar */}
      <div className="bg-gray-200 w-full p-4  top-16 left-0 z-20">
        <div className="flex items-center justify-between">
          <p className="text-black px-4 py-1 cursor-pointer flex items-center font-semibold text-lg hover:text-blue-700">
            See our products <CaretDoubleDown size={24} />
          </p>
          <div className="flex items-center gap-4">
            <Link to="/sign-up">
              <button className="bg-black text-white text-sm px-4 py-2 rounded-lg hidden md:block cursor-pointer">
                SignUp
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-black text-white text-sm px-4 py-2 rounded-lg hidden md:block cursor-pointer">
                Login
              </button>
            </Link> <div className="md:hidden flex items-center">
            <Link to="/login">
              <button className="bg-black text-white text-sm px-4 py-2 rounded-lg cursor-pointer">
                Login
              </button>
            </Link>
            <Link to="/sign-up">
              <button className="bg-black text-white text-sm px-4 py-2 rounded-lg cursor-pointer ml-2">
                SignUp
              </button>
            </Link>
          </div>
          </div>
          <div className="relative flex items-center border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-full cursor-pointer">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
