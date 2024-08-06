import React from 'react';
import NavBar from '../components/header/Nav-Bar';
import Sidebar from '../components/header/SideBar';




export const Products = () => {
    return (
        <>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[0%] flex ">
        <NavBar />
      </div>
    </div>
            
          
        </>
    );
};


