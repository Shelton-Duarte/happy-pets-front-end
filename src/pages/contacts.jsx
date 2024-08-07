import { Mensagem } from "../components/contact/chatboox/mensege";
import { Detalhes } from "../components/contact/detalhes/nossos-detlh";

export const Contacts = () => {
  return (
    <>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1200px",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              flex: 1,
              marginRight: "1rem",
            }}
          >
            <Detalhes />
          </div>
          <div
            style={{
              flex: 1,
              marginLeft: "1rem",
            }}
          >
            <Mensagem />
          </div>
        </div>
      </main>
    </>
  );
};
