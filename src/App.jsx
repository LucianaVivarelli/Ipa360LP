
import NavBar  from './components/NavBar';
import Services from './components/Services';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Gallery from './components/Gallery';
import Maps from './components/Maps';
import Footer from './components/Footer'
import Arte01 from './assets/img/arte01.png'

const App = () => {

  return (
    <>
      <NavBar />
      <main>
      <Services />
      <About />
      <Gallery />
      <ContactForm />
      <Maps />
      </main>
      
      <Footer />

    </>
  )
}

export default App;
