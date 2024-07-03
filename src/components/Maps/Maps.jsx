import React from "react";
import "./Maps.sass";
import { MdPlace } from "react-icons/md";
const Maps = () => {
  return (
    <>

    <section className="locationDiscription">
      <MdPlace className="icon" />
      <p>Prudente de Morais, 1.117 - Ipanema</p>
    </section>
    
      <section className="mapSection">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.041493940736!2d-43.207604!3d-22.985501599999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd5043ec5c1c7%3A0x5f06a8da8b06518f!2sR.%20Prudente%20de%20Morais%2C%201117%20-%20Ipanema%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022420-041!5e0!3m2!1spt-BR!2sbr!4v1718140543921!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Maps;
