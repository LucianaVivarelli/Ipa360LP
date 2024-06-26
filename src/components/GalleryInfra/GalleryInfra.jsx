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
    <div className="infraContainer">
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
        Ficha tecnica - <span>Ipanema 360</span>{" "}
      </h3>

      <section className="DataSheet">
       <section className="dataSection">
        <h4>Ipa360</h4>
        <p>Elevadores - 3 Unidades </p>
        <p>Total do Terreno – 1.030,00m2</p>
        <p>Tipologia - Studios & Gardens</p>
        <p>Metragem Unidades - 39m² a 111m²</p>
        
       </section>
       <section className="dataSection">
        <h4>DIFERENCIAIS EMPREENDIMENTO</h4>
        <p>Piso em porcelanato 90x90cm ou formato
        maior.</p>
        <p>Bancada em granito com cuba na varanda.</p>
        <p>Possibilidade de interligação de 2 unidades</p>
        <p>Infraestrutura para comando de voz IOT
        (Internet Of Things)</p>
       </section>
       <section className="dataSection">
        <h4>PAVIMENTOS</h4>
        <p>1° subsolo</p>
        <p>Rooftop</p>
        <p>Pavimento Academia</p>
        <p>Pavimento Técnico</p>
       </section>
      </section>
    </div>
  );
};

export default GalleryInfra;
