import React from 'react';
import GalleryInfra from '../components/GalleryInfra';
import PlantsGallery from '../components/PlantsGallery';
import "../styles/components/Gallery.sass"

// Importando as imagens de infra
import img02 from '../assets/img/02.png';
import img03 from '../assets/img/03.png';
import img04 from '../assets/img/06.png';
import img07 from '../assets/img/07.png';
import img09 from '../assets/img/09.png';
import vista01 from '../assets/img/vista01.png';
import vista02 from '../assets/img/vista02.png';
import vista03 from '../assets/img/vista03.png';
import vista04 from '../assets/img/vista04.png';
import img02infra from '../assets/img/02infra.png';
import img03infra from '../assets/img/03infra.png';
import img04infra from '../assets/img/04infra.png';
import img05infra from '../assets/img/05infra.png';
import img06infra from '../assets/img/06infra.png';
// Importando as imagens das Plantas
import Plant01 from '../assets/img/planta01.png'
import Plant02 from '../assets/img/planta02.png'
import Plant03 from '../assets/img/planta03.png'
import Plant04 from '../assets/img/planta04.png'
import Plant05 from '../assets/img/planta05.png'
import Plant06 from '../assets/img/planta06.png'
import Plant07 from '../assets/img/planta07.png'
import Plant08 from '../assets/img/planta08.png'
import Plant09 from '../assets/img/planta09.png'
import Plant10 from '../assets/img/planta10.png'
import Plant11 from '../assets/img/planta11.png'
import Plant12 from '../assets/img/planta12.png'
import Plant13 from '../assets/img/planta13.png'
import Plant14 from '../assets/img/planta14.png'
import Plant15 from '../assets/img/planta15.png'
import Plant16 from '../assets/img/planta16.png'
import Plant17 from '../assets/img/planta17.png'
import Plant18 from '../assets/img/planta18.png'
import Plant19 from '../assets/img/planta19.png'
import Plant20 from '../assets/img/planta20.png'

const Gallery = () => {
    
    const galleryImgs = [
        { img: img02 },
        { img: img03 },
        { img: img04 },
        { img: img09 },
        { img: vista02 },
        
        { img: vista01 },
        { img: img06infra },
       
        { img: img07 },
        { img: img02infra },
        { img: img04infra },
        { img: vista03 },
        { img: img05infra },
        
        { img: img03infra },
       
        { img: vista04 },
        
        
       
    ];

    const plantsGalleryImgs = [
        { img: Plant01 },
        { img: Plant02 },
        { img: Plant03 },
        { img: Plant04 },
        { img: Plant05 },
        { img: Plant06 },
        { img: Plant07 },
        { img: Plant08 },
        { img: Plant09 },
        { img: Plant10 },
        { img: Plant11 },
        { img: Plant12 },
        { img: Plant13 },
        { img: Plant14 },
        { img: Plant15 },
        { img: Plant16 },
        { img: Plant17 },
        { img: Plant18 },
        { img: Plant19 },
        { img: Plant20 },
        
    ]

    return (

        <>
            <section className='galleryContainer'>
                <h2 className='GalleryTitle'>Estrutura <span> 360° </span> </h2>
                <GalleryInfra galleryImgs={galleryImgs} />
            </section>

            <section className='galleryPlantsContainer'>
                
                <PlantsGallery plantsGalleryImgs={plantsGalleryImgs} />
            </section>

        </>
    );
};

export default Gallery;
