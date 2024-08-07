import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden m-0 p-0 box-border">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
        id="myVideo"
      >
        <source src="/1920x1080_New.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>

      <div
        className="absolute top-1/4 left-4 sm:left-8 md:left-12 lg:left-20 p-4 sm:p-6 md:p-8 lg:p-10"
        style={{ overflow: "hidden" }}
      >
        <div
          className="bg-white bg-opacity-80 p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            HAPPY-PETS
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
            Welcome to our store specializing in the sale of various feeds,
            puppy breeds, and puppy accessories! Here you’ll find all the
            information you need to explore, understand, and get the most out
            of our products aimed at the well-being of your four-legged friends.
          </p>
          <Link to='/products'>
            <button
              className="mt-4 font-bold py-2 px-4 rounded-lg"
              style={{
                backgroundColor: "#80ED99",
                borderRadius: "0.75rem",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              View Products
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};
