import NavBar from "../components/NavBar/NavBar";
import Services from "../components/services360/Services";
import About from "../components/About/About";
import ContactForm from "../components/ContactForm/ContactForm";
import Gallery from "../components/Gallery/Gallery";
import Maps from "../components/Maps/Maps";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import VideoGallery from "../components/VideoGallery/VideoGallery";

const Home = () => {
  return (
    <section className="Home">
      <NavBar />
      <main>
        <Services />
        <VideoGallery />
        <About />
        <Gallery />
        <section className="contactSec">
          <ContactForm />
        </section>
        <Maps />
      </main>
      <WhatsAppButton />
      <Footer />
    </section>
  );
};

export default Home;
