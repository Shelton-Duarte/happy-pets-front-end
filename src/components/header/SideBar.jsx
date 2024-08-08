import { House, Dog, Phone } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ openFaqModal, openAboutModal }) => {
  return (
    <div className="w-full md:w-[25%] lg:w-[20%] p-0 flex flex-col gap-4 text-black bg-transparent rounded">
      <div className="bg-white shadow-md flex flex-col justify-around rounded p-4 ml-6 mt-16 md:p-6">
        <div className="flex items-center gap-3 mb-4 pl-2">
          <img src="/Job/dog.png" alt="logo" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer mb-4">
          <House size={32} />
          <NavLink to={"/"} className="font-bold text-lg">
            Home
          </NavLink>
        </div>
        <div className="flex items-center gap-3 cursor-pointer mb-4">
          <Dog size={32} />
          <NavLink to={"/products"} className="font-bold text-lg text-blue-700">
            Products
          </NavLink>
        </div>
        <div className="flex items-center gap-3 cursor-pointer mb-4">
          <Phone size={32} />
          <NavLink to={"/contacts"} className="font-bold text-lg">
            Contact
          </NavLink>
        </div>
      </div>
      <div className="p-4 ml-6 bg-white shadow-md rounded font-semibold flex flex-col items-start gap-3">
        <h1 className="text-lg">Find out more about us</h1>
        <p className="font-light text-sm">click the button below</p>
        <button
          onClick={openAboutModal}
          className="px-4 py-2 bg-[#023E8A] text-white text-sm rounded-full"
        >
          Click Here
        </button>
      </div>
      <div className="p-4 ml-6 bg-white shadow-md rounded font-semibold flex flex-col items-start gap-3 mt-4">
        <h1 className="text-lg">Get to know your pet</h1>
        <p className="font-light text-sm">click the button below</p>
        <button
          onClick={openFaqModal}
          className="px-4 py-2 bg-[#023E8A] text-white text-sm rounded-full"
        >
          Advices
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
