import React, { useState } from "react";
import { ShoppingCart } from "phosphor-react";
import Sidebar from "./SideBar"; // Corrigido para Sidebar com maiúscula inicial

export const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Main Navbar */}
      <div className="bg-transparent w-full fixed top-0 left-0 z-50 flex justify-between items-center p-6">
        {/* Menu Button for Mobile */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        {/* Right-aligned items */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Shopping Cart Icon */}
          <div className="relative">
            <button
              className="relative flex items-center"
              onClick={() => console.log("Cart clicked")}
            >
              <ShoppingCart size={32} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* SignUp and Login Buttons */}
          <div className="hidden md:flex gap-4 items-center">
            <button
              className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl cursor-pointer"
              onClick={() => console.log("SignUp clicked")}
            >
              SignUp
            </button>
            <button
              className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl cursor-pointer"
              onClick={() => console.log("Login clicked")}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-200 p-4 flex flex-col items-center ${
          isSidebarOpen ? "block" : "hidden"
        } z-50`} // Ensure Mobile Menu is also above other content
      >
        <button className="text-2xl self-end mb-4" onClick={toggleSidebar}>
          ✕
        </button>
        <button
          className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl mb-2 cursor-pointer"
          onClick={() => console.log("SignUp clicked")}
        >
          SignUp
        </button>
        <button
          className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl cursor-pointer"
          onClick={() => console.log("Login clicked")}
        >
          Login
        </button>
      </div>

      {/* Sidebar */}
      {/* <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        openFaqModal={() => console.log("Open FAQ Modal")}
        openAboutModal={() => console.log("Open About Modal")}
      /> */}
    </>
  );
};
