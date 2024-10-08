import { User, Envelope, LockKey } from "@phosphor-icons/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || "Sign up successful!");
        setFormData({ ...initialFormData });
        setTimeout(() => {
          navigate("/login"); // Redirecionar para a página de login após sucesso
        }, 2000);
      } else {
        alert(result.message || "Sign up failed.");
      }
    } catch (error) {
      console.error("Sign up error:", error); // Log do erro para depuração
      alert("An error occurred during sign up.");
    }
  };

  return (
    <div
      className="flex items-center justify-end min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/signUp.jpg')",
      }}
    >
      <div className="w-2/5 h-2/5 flex flex-col justify-center items-center rounded-3xl shadow-lg shadow-black outline-none bg-white p-6 mr-20">
        <img
          src="/happy-pets-logo.png"
          alt="Happy-Pets-Logo"
          className="mb-1"
        />
        <h2 className="text-2xl font-semibold text-black mb-6">Sign Up</h2>

        <form
          className="grid grid-cols-2 gap-x-4 gap-y-4 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center space-x-2 col-span-1">
            <User size={28} />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-14 border-b-2 border-black bg-purple-bytes text-black outline-none bg-transparent placeholder-gray-500 px-4"
              required
            />
          </div>

          <div className="flex items-center space-x-2 col-span-1">
            <Envelope size={28} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-14 border-b-2 border-black bg-purple-bytes text-black outline-none bg-transparent placeholder-gray-500 px-4"
              required
            />
          </div>

          <div className="flex items-center space-x-2 col-span-1">
            <LockKey size={28} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-14 border-b-2 border-black bg-purple-bytes text-black outline-none bg-transparent placeholder-gray-500 px-4"
              required
            />
          </div>

          <div className="flex items-center space-x-2 col-span-1">
            <LockKey size={28} />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full h-14 border-b-2 border-black bg-purple-bytes text-black outline-none bg-transparent placeholder-gray-500 px-4"
              required
            />
          </div>

          <div className="col-span-2 p-10">
            <button
              type="submit"
              className="w-full bg-gray-400 text-black border-[2px] border-black rounded-md h-10 font-semibold"
            >
              Sign Up
            </button>
          </div>

          <span className="items-center col-span-2 text-black pl-28">
            Already have an account?{" "}
            <span className="items-center text-blue-800">
              <a href="/login">Login</a>
            </span>
          </span>
        </form>
      </div>
    </div>
  );
};
