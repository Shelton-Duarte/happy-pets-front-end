import React from "react";

export const HomePage = () => {
  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <video
        autoPlay
        muted
        loop
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
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "1.25rem",
            borderRadius: "1.25rem",
            boxShadow: "0 0 0.625rem rgba(0, 0, 0, 0.3)",
            textAlign: "center",
            maxWidth: "90vw",
            width: "25%",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            HAPPY-PETS
          </h1>
          <div
            style={{
              marginTop: "0.5rem",
              fontSize: "1rem",
              textAlign: "left",
            }}
          >
            <p>
              Bem-vindo à nossa loja especializada na venda de rações, diversas
              raças de cachorros, e acessórios para cachorros! Aqui você
              encontrará todas as informações necessárias para explorar,
              entender e aproveitar ao máximo os nossos produtos voltados para o
              bem-estar dos seus amigos de quatro patas.
            </p>
            <p>
              Bem-vindo à nossa loja especializada na venda de rações, diversas
              raças de cachorros, e acessórios para cachorros! Aqui você
              encontrará todas as informações necessárias para explorar,
              entender e aproveitar ao máximo os nossos produtos voltados para o
              bem-estar dos seus amigos de quatro patas. JOCK Grandeur é
              formulado cientificamente para liberar a lenda interna do seu
              cachorro. Usando ingredientes de qualidade, nossa ração pesquisada
              por veterinários não é apenas deliciosa, mas também rica em
              proteínas e carregada com minerais e vitaminas essenciais para
              atender às necessidades diárias do seu cachorro.
            </p>
            <button
              style={{
                backgroundColor: "#80ED99",
                borderRadius: "1.25rem",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
                marginTop: "1rem",
                display: "inline-block",
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
