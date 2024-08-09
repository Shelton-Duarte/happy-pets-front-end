// import { Mensagem } from "../components/contact/chatboox/mensege";
// import { Detalhes } from "../components/contact/detalhes/nossos-detlh";
import { ContactCard } from "../components/contact/social-midea/social-midia";
import Sidebar from "../components/header/SideBar";

export const Contacts = () => {
  return (
    <main
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/joe-caione-qO-PIF84Vxg-unsplash.jpg')",
      }}
    >
      <Sidebar />
      <div className="ml-auto mr-56 flex flex-col items-center p-4">
        <div className="flex flex-col md:flex-row w-full max-w-6xl mb-4">
          <ContactCard />
        </div>
      </div>
    </main>
  );
};
