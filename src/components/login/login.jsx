import { Envelope, LockKey } from "@phosphor-icons/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [submissionMessage, setSubmissionMessage] = useState(""); // Adicionado para mostrar mensagens de envio

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    setSubmissionMessage("Login successful!"); // Mensagem de sucesso
    setFormData({ ...initialFormData });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/login-photo.jpg')",
      }}
    >
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-lg">
        <img
          src="/happy-pets-logo.png"
          alt="Happy Pets Logo"
          className="w-24 mx-auto mb-6"
        />
        <h2 className="text-2xl font-semibold text-center text-black mb-6">
          Login
        </h2>

        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className="w-full bg-gray-400 text-black border border-black rounded-md h-12 font-semibold hover:bg-gray-500 transition duration-200"
          >
            Login
          </button>

          {submissionMessage && (
            <div className="text-green-600 text-center mt-4">
              {submissionMessage}
            </div>
          )}

          <div className="text-center mt-4">
            <span className="text-black">Doesn't have an account? </span>
            <a href="http://localhost:5173/sign-up" className="text-blue-800">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
