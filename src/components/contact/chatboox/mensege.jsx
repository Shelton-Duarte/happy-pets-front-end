export const Mensagem = () => {
  return (
    <>
      <section
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          background: "#D9D9D9",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          boxSizing: "border-box",
          width: "90%", 
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
          Envie uma Mensagem
        </h2>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label
            htmlFor="name"
            style={{ fontSize: "1rem", marginBottom: "5px", color: "black" }}
          >
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={{
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
          />

          <label
            htmlFor="email"
            style={{ fontSize: "1rem", marginBottom: "5px", color: "black" }}
          >
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            style={{
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
          />

          <label
            htmlFor="message"
            style={{ fontSize: "1rem", marginBottom: "5px", color: "black" }}
          >
            Mensagem:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            style={{
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem",
              height: "100px",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              backgroundColor: "#80ED99",
              color: "#023E8A",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Enviar Mensagem
          </button>
        </form>
      </section>
    </>
  );
};
