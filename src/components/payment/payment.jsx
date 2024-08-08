import { Envelope, LockKey, MapPin, Phone } from "@phosphor-icons/react";
import React, { useState } from "react";

export const PaymentForm = () => {
  const initialFormData = {
    email: "",
    password: "",
    location: "",
    contact: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    setSubmissionMessage("Payment successful!"); // Mensagem de sucesso
    setFormData({ ...initialFormData });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/login-photo.jpg')", // Altere o caminho conforme necessário
      }}
    >
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-lg">
        <img
          src="/happy-pets-logo.png"
          alt="Happy Pets Logo"
          className="w-24 mx-auto mb-6"
        />
        <h2 className="text-2xl font-semibold text-center text-black mb-6">
          Payment
        </h2>

        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="flex items-center space-x-3">
            <Envelope size={24} className="text-gray-600" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 border-b-2 border-gray-300 text-black outline-none placeholder-gray-500 px-4"
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center space-x-3">
            <LockKey size={24} className="text-gray-600" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-12 border-b-2 border-gray-300 text-black outline-none placeholder-gray-500 px-4"
              required
            />
          </div>

          {/* Location Field */}
          <div className="flex items-center space-x-3">
            <MapPin size={24} className="text-gray-600" />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full h-12 border-b-2 border-gray-300 text-black outline-none placeholder-gray-500 px-4"
              required
            />
          </div>

          {/* Contact Field */}
          <div className="flex items-center space-x-3">
            <Phone size={24} className="text-gray-600" />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="w-full h-12 border-b-2 border-gray-300 text-black outline-none placeholder-gray-500 px-4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-400 text-black border border-black rounded-md h-12 font-semibold hover:bg-gray-500 transition duration-200"
          >
            Submit
          </button>

          {submissionMessage && (
            <div className="text-green-600 text-center mt-4">
              {submissionMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
