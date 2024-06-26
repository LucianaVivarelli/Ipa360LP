import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { GiHouse } from "react-icons/gi";
import { FaTableTennisPaddleBall } from "react-icons/fa6";
import { FaRulerCombined } from "react-icons/fa";
import { MdOutlineLocalFlorist } from "react-icons/md";
import './Services.sass'
const Services = () => {
  return (
    <>
      
      <section className="ServicesContainer">
      <h2>Todo Requinte de Ipanema em uma luxuosa estrutura</h2>
        
      <p>Localizado no quadrilatero do charme de Ipanema</p>
      <p> Vista de 360°, mar, morro dois irmãos, Cristo, lagoa e Arpoador</p>
        
        <ul>

          <li>
            <IoBedOutline className="icon" />
            <p></p>
          </li>

          <li>
            <MdOutlineLocalFlorist className="icon" />
            <p></p>
          </li>

          <li>
              <GiHouse className="icon" />
              <p></p>
          </li>

          <li>
            <FaTableTennisPaddleBall className="icon" />
            <p></p>
          </li>

          <li>
            <FaRulerCombined className="icon" />
            <p></p>
          </li>

        </ul>
        
      </section>
    </>
  );
};

export default Services;
