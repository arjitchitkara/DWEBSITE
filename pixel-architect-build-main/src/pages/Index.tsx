
import { useEffect } from 'react';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import TeamMembers from '../components/TeamMembers';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Chitkara Constructions - Premium Construction & Architecture";
  }, []);

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <TeamMembers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
