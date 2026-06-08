import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import SpecialOffer from './components/SpecialOffer';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <Services />
        <About />
        <Reviews />
        <Gallery />
        <SpecialOffer />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
