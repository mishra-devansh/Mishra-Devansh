// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="Contact">
      <h2>Contact Me</h2>
      <p>Email: devansh.mishra2014@gmail.com</p>
      <p>Phone: +91 9838596777</p>
      <form>
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
