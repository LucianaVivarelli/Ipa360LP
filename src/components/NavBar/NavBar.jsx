import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/img/logo.png";
import ipa360 from "../../assets/img/ipa360.png";
import CarouselPage from "../../components/Carousel/CarouselPage";
import "./NavBar.sass";
import "animate.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "Home" },
    { link: "Sobre", path: "aboutContainer" },
    { link: "Galeria", path: "galleryContainer" },
    { link: "Plantas", path: "PlantsInner" },
    { link: "Contato", path: "formContainer" },
  ];

  return (
    <>
      <header className={isSticky ? "sticky" : ""}>
        <nav className="navContent">
          <a href="/" className="logo-link">
            <img className="logo" src={logo} alt="Logo" />
          </a>
          <button className="menu-toggle" onClick={toggleMenu}>
            &#9776;
          </button>
          <ul className={`navItem ${isMenuOpen ? "open" : ""}`}>
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  spy={true}
                  smooth={false}
                  offset={-100}
                  onClick={closeMenu}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="informContainer">
        <ul>
          <li>Apartamentos de luxo na Zona Sul</li>
          <li>
            <img src={ipa360} alt="" />
          </li>
          <li>Prudente de Morais, 1.117</li>
        </ul>
      </section>
      <CarouselPage />
    </>
  );
};

export default Navbar;
