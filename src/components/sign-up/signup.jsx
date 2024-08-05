import { User, Envelope, LockKey } from "@phosphor-icons/react";
import React, { useState } from "react";

export const SignUpForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    if (formData.password !== formData.confirmPassword) {
      alert("The passwords don't match.");
      return;
    }
    setSubmissionMessage("Sign up successful!");
    setFormData({ ...initialFormData }); // Limpa o formulário após envio
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-1/3 h-1/3 flex flex-col justify-center items-center border shadow-black shadow-lg bg-purple-bytes p-6">
        <img
          src="/happy-pets-logo.png"
          alt="Happy-Pets-Logo"
          className="mb-1"
        />
        <h2 className="text-2xl font-semibold text-black mb-6">Sign Up</h2>

        <form
          className="flex flex-col space-y-4 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center space-x-2">
            <User size={28} />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-14 border-b-2 border-black bg-purple-bytes text-black outline-none placeholder-gray-500 px-4"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Envelope size={28} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-14 border-b-2 border-black bg-purple-bytes text-black outline-none placeholder-gray-500 px-4"
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
              className="w-full h-14 border-b-2 border-black bg-purple-bytes text-black outline-none placeholder-gray-500 px-4"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <LockKey size={28} />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full h-14 border-b-2 border-black bg-purple-bytes text-black outline-none placeholder-gray-500 px-4"
              required
            />
          </div>

          <div className="p-10">
            <button
              type="submit"
              className="w-full bg-gray-400 text-black border-[2px] border-black rounded-md h-10 font-semibold"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
