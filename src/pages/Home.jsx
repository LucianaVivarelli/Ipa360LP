import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import NavBar from "../components/NavBar/NavBar";
import Services from "../components/services360/Services";
import About from "../components/About/About";
import ContactForm from "../components/ContactForm/ContactForm";
import Gallery from "../components/Gallery/Gallery";
import Maps from "../components/Maps/Maps";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import VideoGallery from "../components/VideoGallery/VideoGallery";
import 'animate.css/animate.min.css';

const Home = () => {
  // usando aos para a animação de scroll da pagina
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true, 
    });
  }, []);
  return (
    <section className="Home" >
      <NavBar />
      <main>
        <Services />
        <VideoGallery />
        <About />
        <Gallery />
        <section className="contactSec" data-aos = "fade-up">
          <ContactForm  />
        </section>
        <Maps />
      </main>
      <WhatsAppButton />
      <Footer />
    </section>
  );
};

export default Home;
