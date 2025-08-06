import React from "react"
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [error,setError] = useState({});
  const maxLength=200;

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (formData.message.length < 10) newErrors.message = "Message too short";

    setError(newErrors);
    return Object.keys(newErrors).length===0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()){
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\n\n YOUR MESSAGE HAS BEEN SENT SUCCESSFULLY.`);
    console.log(formData);
    }
  };

  return (
    <div className="pt-16">
    <div className="p-4 m-4">
    <h2 className="flex justify-center items-center text-[var(--text)] text-5xl mb-4 font-bold">Contact</h2>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto p-10 bg-white border rounded-2xl">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="border p-2 rounded bg-gray-300 text-black"
        required
      />
      {error.name && <p className="text-red-600">{error.name}</p>}
      

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="border p-2 rounded bg-gray-300 text-black"
        required
      />
      {error.email && <p className="text-red-600">{error.email}</p>}

      
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Type your Message"
        className="border p-2 rounded h-32 bg-gray-300 text-black "
        required
      />
      {error.message && <p className="text-red-600">{error.message}</p>}
      <p className="text-xs text-black">Min length:10 characters</p>
      <p className="font-bold text-black">{maxLength-formData.message.length} characters left</p>
      

      <button
        type="submit"
        className="bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
      >
        Send Message
      </button>
    </form>
    </div>
    <div className="flex gap-6 justify-center mt-6 text-4xl pb-10 ">
      <a href="https://www.linkedin.com/in/priti-ram?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-blue-600 transition duration-300" />
      </a>
      <a href="https://www.instagram.com/pretty__priti____/profilecard/?igsh=NzNlaDVzemlpYmlj" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-500 transition duration-300" />
      </a>
      <a href="https://github.com/Priti-student" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-gray-800 transition duration-300" />
      </a>
    </div>
    </div>
  );
}

