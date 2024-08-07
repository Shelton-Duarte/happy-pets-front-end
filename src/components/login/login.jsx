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
      <div className="w-2/5 h-2/5 flex flex-col justify-center items-center rounded-3xl shadow-lg shadow-black outline-none bg-white p-6 mr-20">
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
          <span className="items-center col-span-2 text-black pl-28">
            Doesn't have an account?{" "}
            <span className=" items-center text-blue-800">
              <a href="http://localhost:5173/sign-up">SignUp</a>
            </span>
          </span>
        </form>
      </div>
    </div>
  );
};
