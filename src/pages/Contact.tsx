import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold">Contact Us</h1>
      <p className="text-lg">Get in touch with us at <a href="mailto:info@rentacar.com" className="hover:text-gray-300">info@rentacar.com</a></p>
    </div>
  );
}

export default Contact;