import { House, Dog, Phone } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ openFaqModal, openAboutModal }) => {
  return (
    <div className="h-auto md:h-screen p-4 flex flex-col gap-4 bg-white rounded-lg">
      <div className="bg-transparent h-auto md:h-[20%] flex flex-col justify-around rounded-lg p-4">
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="/Job/dog.png" alt="logo" className="w-48 h-36" />
        </div>
        <nav className="flex flex-col mt-4">
          <div className="flex items-center gap-3 cursor-pointer mt-4 text-lg">
            <House size={32} />
            <NavLink to={"/"} className="font-semibold">
              Home
            </NavLink>
          </div>
          <div className="flex items-center gap-3 cursor-pointer mt-4 text-lg">
            <Dog size={32} />
            <NavLink to={"/products"} className="font-semibold text-blue-700">
              Products
            </NavLink>
          </div>
          <div className="flex items-center gap-3 cursor-pointer mt-4 text-lg">
            <Phone size={32} />
            <NavLink to={"/contacts"} className="font-semibold">
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
      <div className="p-4 bg-transparent rounded-lg font-semibold flex flex-col gap-2 mt-44">
        <h1 className="text-xl">Find out more about us</h1>
        <p className="text-sm font-light">Click the button below</p>
        <button
          onClick={openAboutModal}
          className="px-4 py-2 bg-[#023E8A] text-white text-sm rounded-full hover:bg-[#022B6B] transition"
        >
          Click Here
        </button>
      </div>
      <div className="p-4 bg-transparent rounded-lg font-semibold flex flex-col gap-2 mt-4">
        <h1 className="text-xl">Get to know your pet</h1>
        <p className="text-sm font-light">Click the button below</p>
        <button
          onClick={openFaqModal}
          className="px-4 py-2 bg-[#023E8A] text-white text-sm rounded-full hover:bg-[#022B6B] transition"
        >
          Advices
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
