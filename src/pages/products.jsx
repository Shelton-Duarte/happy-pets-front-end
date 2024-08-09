import React, { useState } from "react";
import Sidebar from "../components/header/SideBar";
import { AllProducts } from "../components/header/All-Products";
import FAQ from "../components/FAQ/faq";
import Modal from "../components/FAQ/style";
import { Footer } from "../components/footer/footer";
import { About } from "../components/about/about";
import { NavBar } from "../components/header/NavBar";
import { Slider } from "../components/slides/slides";

export const Products = () => {
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const openFaqModal = () => setIsFaqModalOpen(true);
  const closeFaqModal = () => setIsFaqModalOpen(false);

  const openAboutModal = () => setIsAboutModalOpen(true);
  const closeAboutModal = () => setIsAboutModalOpen(false);

  return (
    <>
      <NavBar />
      <div className="flex">
        <Sidebar openFaqModal={openFaqModal} openAboutModal={openAboutModal} />
        <div className="flex-auto top-0 right-0 relative">
          <NavBar />
          <Slider />
          <div
            className="flex items-center justify-center min-h-screen bg-center"
            style={{
              backgroundImage: "url('/wallpaper-products-1.avif')",
            }}
          >
            <AllProducts />
          </div>
          <Footer />
        </div>
      </div>
      <Modal isOpen={isFaqModalOpen} onClose={closeFaqModal}>
        <FAQ />
      </Modal>
      <Modal isOpen={isAboutModalOpen} onClose={closeAboutModal}>
        <About onClose={closeAboutModal} />
      </Modal>
    </>
  );
};
