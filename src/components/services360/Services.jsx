import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { TbGymnastics } from "react-icons/tb";

import { FaTableTennisPaddleBall } from "react-icons/fa6";
import { MdLocalLaundryService } from "react-icons/md";

import { MdOutlineLocalFlorist } from "react-icons/md";
import "./Services.sass";
const Services = () => {
  return (
    <>
      <section className="ServicesContainer">
        <h2>Exclusividade e Sofisticação</h2>

        <p>
          Localizado no charmoso quadrilátero de Ipanema, com vista 360° para o
          mar, Morro Dois Irmãos, Cristo, Lagoa e Arpoador.
        </p>

        <ul>
          <li>
            <IoBedOutline className="icon" />
            <label>Studios luxuosos</label>
          </li>

          <li>
            <MdOutlineLocalFlorist className="icon" />
            <label>Studios Gardens</label>
          </li>

          <li>
            <TbGymnastics className="icon" />
            <label>Academia Moderna</label>
          </li>

          <li>
            <MdLocalLaundryService className="icon" />
            <label>Self Laundry</label>
          </li>

          <li>
            <FaTableTennisPaddleBall className="icon" />
            <label>Lazer Completo</label>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Services;
