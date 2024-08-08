import { Envelope, LockKey } from "@phosphor-icons/react";
import React, { useState } from "react";

export const LoginForm = () => {
  const initialFormData = {
    email: "",
    password: "",
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

    setSubmissionMessage("Login successful!");
    setFormData({ ...initialFormData });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center sm:[25%]"
      style={{
        backgroundImage: "url('/login-photo.jpg')",
      }}
    >
      <div className="w-full max-w-md max-w-sm-[50%] p-6 bg-white rounded-3xl shadow-lg ml-[45%]">
        <div className="flex flex-col items-center">
          <img
            src="/happy-pets-logo.png"
            alt="Happy-Pets-Logo"
            className="mb-4 w-32 h-auto"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">Login</h2>

          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center space-x-2">
              <Envelope size={24} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 border-b-2 border-black text-black outline-none placeholder-gray-500 px-3 bg-white"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <LockKey size={24} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-12 border-b-2 border-black text-black outline-none placeholder-gray-500 px-3 bg-white"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-gray-400 text-black border-[2px] border-black rounded-md h-10 font-semibold hover:bg-gray-300"
              >
                Login
              </button>
            </div>

            <div className="text-center text-black mt-4">
              Doesn't have an account?{" "}
              <span className="text-blue-800">
                <a href="/sign-up">SignUp</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
