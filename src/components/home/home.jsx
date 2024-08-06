import React from "react";

export const HomePage = () => {
  return (
    <main className="relative w-full h-full overflow-hidden m-0 p-0 box-border">
      <video
        autoPlay
        muted
        loop
        className=" w-screen h-full object-cover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
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
              Bem-vindo à nossa loja especializada na venda de rações, diversas
              raças de cachorros, e acessórios para cachorros! Aqui você
              encontrará todas as informações necessárias para explorar,
              entender e aproveitar ao máximo os nossos produtos voltados para o
              bem-estar dos seus amigos de quatro patas.
            </p>

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
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
