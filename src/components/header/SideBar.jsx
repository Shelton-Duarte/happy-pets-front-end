import React from 'react';
import { House, Dog, Phone } from "@phosphor-icons/react";

const Sidebar = ({ openModal }) => {
  return (
    <div className='w-[25%] h-[93rem] p-2 flex-col gap-2 text-black bg-gray-400 rounded '>
      <div className='bg-gray-200 h-[20%] flex flex-col justify-around rounded'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img src="/Job/dog.png" alt="logo" width={90} height={90} />
          <p className='font-bold'>Happy Pets</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer mt-4'>
          <House size={32} />
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer mt-4'>
          <Dog size={32} />
          <p className='font-bold text-blue-700'>Products</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer mt-4'>
          <Phone size={32} />
          <p className='font-bold'>Contact</p>
        </div>
      </div>
      <div className='p-4 bg-gray-300 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-6'>
        <h1>Find out more about us</h1>
        <p className='font-light'>click the button below</p>
        <button 
          onClick={openModal}
          className='px-4 py-1.5 bg-[#023E8A] text-[15px] text-white rounded-full mt-4'
        >
          Click Here
        </button>
      </div>
      <div className='p-4 bg-gray-300 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
        <h1>Get to know your pet</h1>
        <p className='font-light'>click the button below</p>
        <button 
          onClick={openModal}
          className='px-4 py-1.5 bg-[#023E8A] text-[15px] text-white rounded-full mt-4'
        >
          Advices
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
