
import NavBar  from '../components/NavBar/NavBar';
import Services from '../components/services360/Services';
import About from '../components/About/About';
import ContactForm from '../components/ContactForm/ContactForm';
import Gallery from '../components/Gallery/Gallery';
import Maps from '../components/Maps/Maps';
import Footer from '../components/Footer/Footer'


const Home = () => {

  return (
    <>
      <NavBar />
      <main>
      <Services />
      <About />
      <Gallery />
      <section className='contactSec'>
        <ContactForm />
      </section>
      
      <Maps />
      </main>
      
      <Footer />

    </>
  )
}

export default Home;
