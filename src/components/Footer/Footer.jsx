import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import "./Footer.sass";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <section className="footerContent">

        <img src={logo} alt="IPA Studios Design Logo" className="logo" />
         
        <section className="socialIcons">      
          <a href="https://www.instagram.com/imobiliariavivaci/" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/vivaci.imobiliaria" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/vivaci-imobili%C3%A1ria-ltda/" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaLinkedinIn />
          </a>
          <a href="https://wa.me/5521991180587" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaWhatsapp />
          </a>
        </section>

        <section className="footerBottom">
          <p>&copy; 2024 Vivaci | IPA Studios Design. Todos os direitos reservados.</p>
        </section>
        
      </section>
    </footer>
  );
};

export default Footer;
