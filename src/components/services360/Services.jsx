import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { TbGymnastics } from "react-icons/tb";

import { FaTableTennisPaddleBall } from "react-icons/fa6";
import { MdLocalLaundryService } from "react-icons/md";

import { MdOutlineLocalFlorist } from "react-icons/md";
import './Services.sass'
const Services = () => {
  return (
    <>
      
      <section className="ServicesContainer">
      <h2>Todo Requinte de Ipanema em uma luxuosa estrutura</h2>
        
      <p>Localizado no quadrilatero do charme de Ipanema</p>
      <p> Vista 360° para o mar, Morro dois Irmãos, Cristo, lagoa e Arpoador</p>
        
        <ul>

          <li>
            <IoBedOutline className="icon" />
            <p>Studios luxuosos</p>
          </li>

          <li>
            <MdOutlineLocalFlorist className="icon" />
            <p>Studios Gardens</p>
          </li>

          <li>
              <TbGymnastics className="icon" />
              <p>Academia Moderna</p>
          </li>

          <li>
            <MdLocalLaundryService className="icon" />
            <p>Self Laundry</p>
          </li>

          <li>
            <FaTableTennisPaddleBall className="icon" />
            <p>Lazer Completo</p>
          </li>
        </ul>
        
      </section>
    </>
  );
};

export default Services;
