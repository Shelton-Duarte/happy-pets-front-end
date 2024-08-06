import { Envelope, LockKey } from "@phosphor-icons/react";
import React, { useState } from "react";

export const LoginForm = () => {
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmissionMessage("Login successful!");
    setFormData({ ...initialFormData }); 
  };

  return (
    <div
      className="flex items-center justify-end min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/login-photo.jpg')",
      }}
    >
      <div className="w-1/4 h-1/3 flex flex-col justify-center items-center border rounded-3xl shadow-gray-700 shadow-lg bg-white bg-opacity p-6 mr-48">
        <img
          src="/happy-pets-logo.png"
          alt="Happy-Pets-Logo"
          className="mb-4"
        />
        <h2 className="text-2xl font-semibold text-black mb-2">Login</h2>

        <form
          className="flex flex-col space-y-4 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center space-x-2">
            <Envelope size={28} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-14 border-b-2 border-black text-black outline-none placeholder-gray-500 px-4  bg-white bg-opacity-0"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <LockKey size={28} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-14 border-b-2 border-black bg-purple-bytes text-black outline-none placeholder-gray-500 px-4 bg-white bg-opacity-0"
              required
            />
          </div>
          <div className="p-11">
            <button
              type="submit"
              className="w-full bg-gray-400 text-black border-[2px] border-black rounded-md h-10 font-semibold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
