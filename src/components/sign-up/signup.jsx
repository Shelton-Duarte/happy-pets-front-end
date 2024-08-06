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
    setFormData({ ...initialFormData }); 
  };

  return (
    <div className="flex items-center justify-end min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/signUp.jpg')",
      }}>
      <div className="w-2/5 h-0 flex flex-col justify-center items-center rounded-3xl outline-none bg-transparent p-6 mr-20">
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
          
          <span className="col-span-2 text-black pl-8">Already have an account? <span className="text-blue-800"><a href="http://localhost:5173/login">Login</a></span></span>
        </form>
      </div>
    </div>
  );
  
};
