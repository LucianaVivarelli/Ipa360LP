import React from "react";
import videoSrc from "../../assets/video/video.mp4";
import "./About.sass";
import ContactForm from "../../components/ContactForm/ContactForm";

const About = () => {
  return (
    <section className="aboutContainer">     
      <section className="about">
        <section className="aboutTexts">
          <p>
            <span>O IPA Studios Design</span> oferece o que há de melhor em estrutura,
            facilities e diferenciais exclusivos para uma vida 360°. Um
            destino em que o mundo inteiro sonha estar. Projetamos tudo para
            você ter mais conforto e espaço para viver e trabalhar.
          </p>

          <p>
            Cada detalhe, uma inspiração. E todos esses detalhes se encontram
            no novo e emblemático empreendimento em Ipanema:
            <span> O IPA STUDIOS DESIGN.</span>
          </p>
        </section>

        <section className="aboutImg">
          <video className="videoAbout" src={videoSrc} autoPlay loop muted playsInline />
        </section>

        <section className="contactFormWrapper">
          <ContactForm />
        </section>
      </section>
    </section>
  );
};

export default About;
