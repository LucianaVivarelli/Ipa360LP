import React from "react";
import { useState, useEffect, useRef } from "react";
import "./PlantsGallery.sass";
import { RiCloseCircleLine } from "react-icons/ri";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { motion } from "framer-motion";

const PlantsGallery = ({ plantsGalleryImgs }) => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
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
      ? setSlideNumber(plantsGalleryImgs.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber + 1 === plantsGalleryImgs.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  });
  return (
    <section className="plantasContainer">
      
      {openModal && 
        <section className="sliderWrap">
          <RiCloseCircleLine className='btnClose' onClick={handleCloseModal}/>
          <CiCircleChevLeft className='btnPrev' onClick={prevSlide} />
          <CiCircleChevRight className='btnNext' onClick={nextSlide} />
          
          <section className="fullScreenImage">
            <img src={plantsGalleryImgs[slideNumber].img} alt="" />
          </section>
        
        </section>
      }

      <section className="PlantsInner"> 
        {/* Usei motion para fazer a animação da galeria de plantas
         e dar um efeito mais moderno e sofisticado*/}
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <h2 className="GalleryTitle">Plantas</h2>
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {plantsGalleryImgs &&
              plantsGalleryImgs.map((slide, index) => {
                return (
                  <motion.div
                    className="item"
                    key={index}
                    onClick={() => handleOpenModal(index)}
                  >
                    <img src={slide.img} alt="" />
                  </motion.div>
                );
              })}
          </motion.div>
        </motion.div>
      </section>
    </section>
  );
};

export default PlantsGallery;
