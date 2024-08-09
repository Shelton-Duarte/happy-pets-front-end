// import { Envelope, LockKey, MapPin, Phone } from "@phosphor-icons/react";
// import React, { useState } from "react";

// export const PaymentForm = () => {
//   const initialFormData = {
//     email: "",
//     password: "",
//     location: "",
//     contact: "",
//   };

//   const [formData, setFormData] = useState({ ...initialFormData });
//   const [submissionMessage, setSubmissionMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Aqui você pode adicionar a lógica de envio do formulário
//     setSubmissionMessage("Payment successful!"); // Mensagem de sucesso
//     setFormData({ ...initialFormData });
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/login-photo.jpg')", // Altere o caminho conforme necessário
//       }}
//     >
//       <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-lg">
//         <img
//           src="/happy-pets-logo.png"
//           alt="Happy Pets Logo"
//           className="w-24 mx-auto mb-6"
//         />
//         <h2 className="text-2xl font-semibold text-center text-black mb-6">
//           Payment
//         </h2>

//         <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
//           {/* Email Field */}
//           <div className="flex items-center space-x-3">
//             <Envelope size={24} className="text-gray-600" />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full h-12 border-b-2 border-gray-300 text-black outline-none placeholder-gray-500 px-4"
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div className="flex items-center space-x-3">
//             <LockKey size={24} className="text-gray-600" />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full h-12 border-b-2 border-gray-300 text-black outline-none placeholder-gray-500 px-4"
//               required
//             />
//           </div>

//           {/* Location Field */}
//           <div className="flex items-center space-x-3">
//             <MapPin size={24} className="text-gray-600" />
//             <input
//               type="text"
//               name="location"
//               placeholder="Location"
//               value={formData.location}
//               onChange={handleChange}
//               className="w-full h-12 border-b-2 border-gray-300 text-black outline-none placeholder-gray-500 px-4"
//               required
//             />
//           </div>

//           {/* Contact Field */}
//           <div className="flex items-center space-x-3">
//             <Phone size={24} className="text-gray-600" />
//             <input
//               type="text"
//               name="contact"
//               placeholder="Contact Number"
//               value={formData.contact}
//               onChange={handleChange}
//               className="w-full h-12 border-b-2 border-gray-300 text-black outline-none placeholder-gray-500 px-4"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gray-400 text-black border border-black rounded-md h-12 font-semibold hover:bg-gray-500 transition duration-200"
//           >
//             Submit
//           </button>

//           {submissionMessage && (
//             <div className="text-green-600 text-center mt-4">
//               {submissionMessage}
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";

export const PaymentForm = () => {
  // Estado para armazenar o método de pagamento selecionado
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  // Função para lidar com a mudança no botão de opção
  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.id);
  };

  return (
    <div>
      {/* Botões de opção de pagamento */}
      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <div className="flex items-center">
          <input
            type="radio"
            id="card"
            name="payment-method"
            className="w-5 h-5 cursor-pointer"
            checked={selectedPaymentMethod === "card"}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
            <img
              src="https://readymadeui.com/images/visa.webp"
              className="w-12"
              alt="Visa"
            />
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="emola"
            name="payment-method"
            className="w-5 h-5 cursor-pointer"
            checked={selectedPaymentMethod === "emola"}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="emola" className="ml-4 flex gap-2 cursor-pointer">
            <img src="emola.png" className="w-12" alt="Emola" />
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="mpesa"
            name="payment-method"
            className="w-5 h-5 cursor-pointer"
            checked={selectedPaymentMethod === "mpesa"}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="mpesa" className="ml-4 flex gap-2 cursor-pointer">
            <img src="/M-pesa-logo.png" className="w-12" alt="M-Pesa" />
          </label>
        </div>
      </div>

      {/* Formulário para pagamento usando Visa */}
      {selectedPaymentMethod === "card" && (
        <div className="grid gap-8 mt-8">
          <div>
            <label htmlFor="cardholder-name" className="sr-only">
              Cardholder's Name
            </label>
            <input
              id="cardholder-name"
              type="text"
              placeholder="Cardholder's Name"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="card-number" className="sr-only">
              Card Number
            </label>
            <input
              id="card-number"
              type="text"
              placeholder="Card Number"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="expiration-date" className="sr-only">
              Expiration Date
            </label>
            <input
              id="expiration-date"
              type="text"
              placeholder="Expiration Date (MM/YY)"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv" className="sr-only">
              CVV
            </label>
            <input
              id="cvv"
              type="text"
              placeholder="CVV"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
              required
            />
          </div>
        </div>
      )}

      {/* Formulário para pagamento usando Emola */}
      {selectedPaymentMethod === "emola" && (
        <div className="grid gap-8 mt-8">
          <div>
            <label htmlFor="emola-phone" className="sr-only">
              Phone Number
            </label>
            <input
              id="emola-phone"
              type="text"
              placeholder="Phone Number"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="emola-pin" className="sr-only">
              PIN
            </label>
            <input
              id="emola-pin"
              type="text"
              placeholder="PIN"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
              required
            />
          </div>
          {/* Adicione mais campos específicos para Emola se necessário */}
        </div>
      )}

      {/* Formulário para pagamento usando M-Pesa */}
      {selectedPaymentMethod === "mpesa" && (
        <div className="grid gap-8 mt-8">
          <div>
            <label htmlFor="mpesa-phone" className="sr-only">
              Phone Number
            </label>
            <input
              id="mpesa-phone"
              type="text"
              placeholder="Phone Number"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="mpesa-pin" className="sr-only">
              PIN
            </label>
            <input
              id="mpesa-pin"
              type="text"
              placeholder="PIN"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
              required
            />
          </div>
          {/* Adicione mais campos específicos para M-Pesa se necessário */}
        </div>
      )}
    </div>
  );
};
