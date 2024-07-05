import React from "react";
import { useState } from "react";
import "./GalleryInfra.sass";

import { RiCloseCircleLine } from "react-icons/ri";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const GalleryInfra = ({ galleryImgs }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImgs.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber + 1 === galleryImgs.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <section className="infraContainer">
      {openModal && (
        <section className="sliderWrap">
          <RiCloseCircleLine className="btnClose" onClick={handleCloseModal} />
          <CiCircleChevLeft className="btnPrev" onClick={prevSlide} />
          <CiCircleChevRight className="btnNext" onClick={nextSlide} />

          <section className="fullScreenImage">
            <img src={galleryImgs[slideNumber].img} alt="" />
          </section>
        </section>
      )}

      <section className="galleryWrap">
        {galleryImgs &&
          galleryImgs.map((slide, index) => {
            return (
              <section
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="" />
              </section>
            );
          })}
      </section>
      
      <h3 className="DataSheetTitle">
        Ficha tecnica - <span> Ipanema 360°</span>{" "}
      </h3>

      <section className="DataSheet">
       <section className="dataSection">
        <h4>Ipa360</h4>
        
        <p>Elevadores:</p>
        <span> 3 Unidades.</span>

        <p>Tipologia: </p>
        <span> Studios & Gardens.</span>

        <p>Total do Terreno:</p> 
        <span> 1.030,00m2.</span>
        
        <p>Metragem Unidades:</p>
        <span> 39m² a 111m².</span>
              
        <p>Lounge e Bar:</p> 
        <span> Solarium e vista para a Lagoa e Cristo Redentor.</span>

       </section>

       <section className="dataSection">
        <h4>PAVIMENTOS</h4>
       
        <p> 1º pavimento: Studio Garden </p>
        <span> (10 unidades por pavimento)</span>

        <p> 2º pavimento: Studio </p> 
        <span> (10 unidades por pavimento)</span>

        <p>Piscina: </p> 
        <span>12,5m de comprimento e 1m² de profundidade com deck molhado.</span>
           
        <p>Rooftop e Academia</p>
        <span>Vista Panorâmica do mar e da Lagoa.</span>

       </section>

       <section className="dataSection">
        <h4>DIFERENCIAIS</h4>
        
        <p>Varanda Gourmet:</p>
        <span>Em granito com cuba. </span>

        <p>Smart Food:</p>   
        <span> Mini mercado 24h à disposição dos moradores.</span>
        
        <p>Pranchário:</p>    
        <span> Espaço para guarda de pranchas e área de lavagem.</span>
        
        <p>Possibilidade de interligação: </p>
        <span> Até 3 unidades.</span>

       </section>    
      </section>
    </section>
  );
};

export default GalleryInfra;
