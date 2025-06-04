
import { useEffect } from 'react';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    document.title = "About Us - Chitkara Constructions";
  }, []);

  return (
    <div className="min-h-screen bg-construction-dark">
      <CustomCursor />
      <Navbar />
      
      <section className="pt-32 pb-20 relative">
        <div className="noise-bg"></div>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl text-white mb-8">About <span className="text-white font-bold">Chitkara Constructions</span></h1>
            
            <div className="space-y-6 text-gray-300">
              <p>
                Founded in 1995, Chitkara Constructions has established itself as a leading architectural and construction firm, 
                delivering exceptional projects across residential, commercial, institutional, and industrial sectors.
              </p>
              
              <p>
                Our multidisciplinary team of architects, engineers, draughtsmen, valuers, and landscape architects 
                brings diverse expertise to every project. This collaborative approach enables us to provide comprehensive 
                solutions that address all aspects of the built environment.
              </p>
              
              <p>
                At Chitkara Constructions, we believe that great design goes beyond aesthetics. It's about creating spaces that 
                enhance human experience, optimize functionality, and promote sustainability. Every project we undertake 
                is guided by these principles, ensuring outcomes that exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-construction-muted relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_10%)] opacity-[0.03] pointer-events-none"></div>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg text-white mb-6">Our Vision & Mission</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  <strong className="text-white">Vision:</strong> To be the foremost architectural and construction firm, 
                  known for design excellence, technical innovation, and client satisfaction.
                </p>
                
                <p>
                  <strong className="text-white">Mission:</strong> To create meaningful spaces that inspire, function 
                  effectively, and stand the test of time through collaborative design, technical excellence, and unwavering 
                  commitment to quality.
                </p>
              </div>
            </div>
            
            <div className="relative h-80">
              <div className="absolute inset-0 border border-white/10 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-construction-dark to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800" 
                  alt="Architecture Concept" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
