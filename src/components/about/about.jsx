import React from 'react';
import { Dog, PawPrint, Bone, } from "@phosphor-icons/react";

export const About = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white shadow-md rounded-md p-6 relative">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">
          Welcome to Happy Pets!
          <Dog size={32} className="text-blue-500" />
          <PawPrint size={32} className="text-blue-500" />
          <Bone size={32} className="text-blue-500" />
        </h1>
        <p>At Happy Pets, we are passionate about dogs and are dedicated to providing them with everything they need for a happy and healthy life.</p> 
        <p>Since 2021, we have been providing high-quality, nutritious dog food and a wide range of accessories to ensure the well-being of our furry friends and the satisfaction of their owners.</p>

        <h1 className="text-2xl font-bold mb-4 text-blue-500">Our Mission</h1>
        <p>Our mission is to be the leading source of happiness and health for dogs, offering quality products and exceptional services. We believe that every dog deserves the best, whether in terms of food, care or love.</p>

        <h1>What We Offer</h1>
        <p><b>Dogs:</b> We breed and sell dogs of various breeds, ensuring that each one of them is raised with love, care and responsibility. Our dogs are healthy, well-adjusted and ready to become part of your family.</p>  
        <p><b>Food:</b>We provide a wide range of high-quality food, suitable for all stages of your dog's life. Our products are selected to ensure the complete and balanced nutrition that your dog needs.</p>
        <p><b>Accessories:</b> We offer a variety of accessories, from collars and feeders to toys. Everything to make your dog's life more comfortable and fun.</p>

        <h1 className="text-2xl font-bold mb-4 text-blue-500">Our Values</h1>
        <p><b>Care:</b> We treat each dog with love and respect, ensuring they receive the best possible care.</p>
        <p><b>Quality:</b> We are committed to offering high-quality products that meet the needs of dogs and their owners.</p>
        <p><b>Responsibility:</b>We operate ethically and responsibly, ensuring transparent and fair breeding and marketing practices.</p>
        <p><b>Passion:</b>Our passion for dogs is what motivates us to always strive for the best in everything we do.</p> 

        <h2 className="text-xl font-bold mb-4 text-blue-500">Come visit us and find out how we can help improve your dog's life!</h2>
      </div>
    </div>
  );
}


