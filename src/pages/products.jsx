import React from 'react';
import Sidebar from '../components/header/SideBar';
import AllProducts from '../components/header/All-Products';




export const Products = () => {
    return (
        <>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[0%] flex ">
        <AllProducts/>
      </div>
    </div>
            
          
        </>
    );
};


