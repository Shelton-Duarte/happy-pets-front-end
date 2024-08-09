import { House, Dog, Phone } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ openFaqModal, openAboutModal }) => {
  return (
    <div className="w-full md:w-1/4 h-auto md:h-[93rem] p-4 flex flex-col gap-4 bg-transparent rounded-lg">
      <div className="bg-transparent h-auto md:h-[20%] flex flex-col justify-around rounded-lg p-4">
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="/Job/dog.png" alt="logo" className="w-48 h-36" />
        </div>
        <nav className="flex flex-col mt-4">
          <div className="flex items-center gap-3 cursor-pointer mt-4 text-lg">
            <House size={32} />
            <p className="font-semibold">Home</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer mt-4 text-lg">
            <Dog size={32} />
            <p className="font-semibold text-blue-700">Products</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer mt-4 text-lg">
            <Phone size={32} />
            <p className="font-semibold">Contact</p>
          </div>
        </nav>
      </div>
      <div className="p-4 bg-transparent rounded-lg font-semibold flex flex-col gap-2 mt-6">
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
