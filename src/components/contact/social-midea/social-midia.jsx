// import { FacebookLogo, InstagramLogo } from "phosphor-react";

// export const SocialMidia = () => {
//   return (
//     <section className="max-w-1/2 mb-8 bg-gray-300 p-5 rounded-lg shadow-lg">
//       <h2 className="text-2xl text-black mb-4 text-center">
//         Nossas Redes Sociais
//       </h2>
//       <ul className="list-none p-0 flex justify-center space-x-4">
//         <li>
//           <a
//             href="https://www.facebook.com/empresa"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-black text-lg transition-colors duration-300 hover:text-blue-600"
//           >
//             <FacebookLogo size={32} />
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://twitter.com/empresa"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-black text-lg transition-colors duration-300 hover:text-blue-400"
//           >
//             <FacebookLogo size={32} />
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://www.instagram.com/empresa"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-black text-lg transition-colors duration-300 hover:text-pink-600"
//           >
//             <InstagramLogo size={32} />
//           </a>
//         </li>
//       </ul>
//     </section>
//   );
// };

import { FacebookLogo, InstagramLogo } from "phosphor-react";
import React from "react";

const Detalhes = () => {
  return (
    <section className="bg-gray-300 p-5 rounded-lg shadow-lg h-full">
      <h2 className="text-2xl text-black font-black mb-4 text-center">
        Nossos Detalhes de Contato
      </h2>
      <div className="text-lg text-black leading-6">
        <strong className="font-extrabold text-xl">Happy Pets</strong>
        <div className="mt-4">
          <p className="font-bold">Location</p>
          <p>Alto-Mae, City, Maputo</p>
        </div>
        <div className="mt-4">
          <p className="font-bold">Contato/Telefone</p>
          <p>Telefone: (+258) 83 152 1523</p>
        </div>
        <div className="mt-4">
          <p className="font-bold">E-mail Geral</p>
          <p>happypets@gmail.com</p>
        </div>
        <div className="mt-4">
          <p className="font-bold">Horário de Funcionamento:</p>
          <p>Segunda a Sexta: 9:00 - 18:00</p>
          <p>Sábado e Domingo: 9:00 - 12:00</p>
        </div>
      </div>
    </section>
  );
};

const Mensagem = () => {
  return (
    <section className="bg-gray-300 p-5 rounded-lg shadow-lg">
      <h2 className="text-2xl text-black mb-4 text-center">
        Envie uma Mensagem
      </h2>
      <form className="flex flex-col">
        <label htmlFor="name" className="text-lg mb-2 text-black">
          Nome:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="p-2 mb-4 border border-gray-300 rounded-md text-lg"
        />

        <label htmlFor="email" className="text-lg mb-2 text-black">
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="p-2 mb-4 border border-gray-300 rounded-md text-lg"
        />

        <label htmlFor="message" className="text-lg mb-2 text-black">
          Mensagem:
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="p-2 mb-4 border border-gray-300 rounded-md text-lg h-24"
        ></textarea>

        <button
          type="submit"
          className="bg-green-300 text-blue-900 p-2 rounded-md text-lg cursor-pointer transition-colors duration-300 hover:bg-green-400"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
};

const SocialMidia = () => {
  return (
    <section className="bg-gray-300 p-5 rounded-lg shadow-lg">
      <h2 className="text-2xl text-black mb-4 text-center">
        Nossas Redes Sociais
      </h2>
      <ul className="list-none p-0 flex justify-center space-x-4">
        <li>
          <a
            href="https://www.facebook.com/empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg transition-colors duration-300 hover:text-blue-600"
          >
            <FacebookLogo size={32} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg transition-colors duration-300 hover:text-blue-400"
          >
            <FacebookLogo size={32} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg transition-colors duration-300 hover:text-pink-600"
          >
            <InstagramLogo size={32} />
          </a>
        </li>
      </ul>
    </section>
  );
};

export const ContactCard = () => {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="flex flex-wrap justify-between space-x-4 mb-6">
        <div className="flex-1 max-w-md">
          <Detalhes />
        </div>
        <div className="flex-1 max-w-md">
          <Mensagem />
        </div>
      </div>
      <SocialMidia />
    </div>
  );
};
