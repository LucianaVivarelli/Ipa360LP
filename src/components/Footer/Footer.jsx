import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import "./Footer.sass";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <img src={logo} alt="IPA Studios Design Logo" className="logo" />
         
        <div className="socialIcons">
          
          
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaFacebookF />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaLinkedinIn />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaWhatsapp />
          </a>
        </div>
        <div className="footerBottom">
          <p>&copy; 2024 IPA Studios Design. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
