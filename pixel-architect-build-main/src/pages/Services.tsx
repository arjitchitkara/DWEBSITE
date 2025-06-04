
import { useEffect } from 'react';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services - Chitkara Constructions";
  }, []);

  return (
    <div className="min-h-screen bg-construction-dark">
      <CustomCursor />
      <Navbar />
      
      <section className="pt-32 pb-20 relative">
        <div className="noise-bg"></div>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="heading-xl text-white mb-8">Our <span className="text-construction-accent">Services</span></h1>
            <p className="text-gray-300 text-lg">
              We provide comprehensive architectural and construction services tailored to meet your specific needs
            </p>
          </div>
        </div>
      </section>
      
      <Services />
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
