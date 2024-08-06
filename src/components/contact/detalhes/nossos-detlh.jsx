export const Detalhes = () => {
  return (
    <>
      <section
        style={{
          maxWidth: "100%",
          width: "90%", 
          margin: "0 auto", 
          background: "#D9D9D9",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            color: "black",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          Nossos Detalhes de Contato
        </h2>
        <p style={{ fontSize: "1.1rem", color: "black", lineHeight: "1.6" }}>
          <strong>Nome da Empresa</strong>
          <br />
          Endereço da Empresa, Cidade, Maputo
          <br />
          Telefone: (+258) xx xxx xxxx
          <br />
          E-mail Geral: xxxxxxx@.com
          <br />
        </p>
        <p style={{ fontSize: "1.1rem", color: "black", lineHeight: "1.6" }}>
          <strong>Horário de Funcionamento:</strong>
          <br />
          Segunda a Sexta: 9:00 - 18:00
          <br />
          Sábado e Domingo: 9:00 - 12:00
        </p>
      </section>
    </>
  );
};
