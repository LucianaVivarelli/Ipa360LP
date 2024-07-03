// WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.sass';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5521991180587"
      target="_blank"
      rel="noopener noreferrer"
      className="whats-button"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
