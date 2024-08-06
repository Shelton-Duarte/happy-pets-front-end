import React, { useState } from 'react';
import Sidebar from '../components/header/SideBar';
import AllProducts from '../components/header/All-Products';
import FAQ from '../components/FAQ/faq';
import Modal from '../components/FAQ/style';

export const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex">
        <Sidebar openModal={openModal} />
        <div className="flex-auto top-0 right-0 relative">
          <AllProducts />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <FAQ />
      </Modal>
    </>
  );
};


