"use client";

import React, { useState } from "react";
import { Button } from "../../../../ui/button"; 
import { Input } from "../../../../ui/input";
import { Textarea } from "../../../../ui/textarea"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setMessage(result.error || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Something went wrong!');
    }
  };

  return (
    <div className="flex md:flex-row flex-col mb-16 p-6 md:p-24" id="contact">
      <div className="p-6 w-full md:w-1/2">
        <h1 className="mb-2 pt-4 text-3xl text-center md:text-left md:text-7xl fonthead">Send Emma a Message</h1>
        <p className="mb-4 text-base text-center text-gray-500 md:text-left md:text-xl">
          We'd love to hear from you! Send your fan mail, questions, or love notes to Emma Chamberlain using the form below. Your messages mean the world to us!
        </p>
        
      </div>
      <div className="bg-white shadow-lg p-6 w-full md:w-1/2" style={{ borderLeft: '40px solid black', borderBottom: '30px solid black' }}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 text-sm fonthead" htmlFor="name">Name</label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 text-sm fonthead" htmlFor="email">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 text-sm fonthead" htmlFor="message">Message</label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center md:text-left">
            <Button type="submit">Submit</Button>
          </div>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default Contact;
