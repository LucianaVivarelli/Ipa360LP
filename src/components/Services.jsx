import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { GiHouse } from "react-icons/gi";
import { FaTableTennisPaddleBall } from "react-icons/fa6";
import { FaRulerCombined } from "react-icons/fa";
import { MdOutlineLocalFlorist } from "react-icons/md";
import '../styles/components/Services.sass'
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
            <p>Studios com 01 quarto</p>
          </li>

          <li>
            <MdOutlineLocalFlorist className="icon" />
            <p>Gardens <span>49M 2 A 111M 2</span></p>
          </li>

          <li>
              <GiHouse className="icon" />
              <p>Studios <span>39M 2 A 85M 2</span></p>
          </li>

          <li>
            <FaTableTennisPaddleBall className="icon" />
            <p>Infra Estrutura Completa</p>
          </li>

          <li>
            <FaRulerCombined className="icon" />
            <p>1.030,00m2</p>
          </li>

        </ul>
        
      </section>
    </>
  );
};

export default Services;
