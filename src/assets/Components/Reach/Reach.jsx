import React, { useState } from 'react';
import './reach.css';

const Reach = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to email service here (e.g., EmailJS or backend API)
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="reach" className="reach">
      <h2 className="section-title">Reach Out</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Reach;
