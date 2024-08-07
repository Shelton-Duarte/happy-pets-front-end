import React from "react";
import { Link, NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <main className="relative w-full h-full overflow-hidden m-0 p-0 box-border">
      <video
        autoPlay
        muted
        loop
         className=" w-screen h-screen object-cover top-0 left-0"
         
        id="myVideo"
      >      
         <source src="/1920x1080_New.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video> 

      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "1rem",
          overflow: "hidden",
        }}
      >
        <div
          className="p-8 text-center max-w-7xl w-1/4 box-border rounded-3xl "
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "1.25rem",
            borderRadius: "1.25rem",
            boxShadow: "0 0 0.625rem rgba(0, 0, 0, 0.3)",
            width: "25%",
          }}
        >
          <h1 className="font-large-bold">HAPPY-PETS</h1>
          <div className="m-2 text-left  ">
            <p>
            Welcome to our store specializing in the sale of various feeds,
              puppy breeds, and puppy accessories! Here you
              You'll find all the information you need to explore,
              understand and get the most out of our products aimed at
              well-being of your four-legged friends. ...
            </p>
            
           <Link to='/products'>
            <button
              className="mt-4  font-bold p-2 "
              style={{
                backgroundColor: "#80ED99",
                borderRadius: "1.25rem",
                fontSize: "1rem",
                display: "inline-block",
                cursor: "cursor-pointer",
              }}
            >
              View Products
            </button></Link>
          </div>
        </div>
      </div>
    </main>
  );
};
