import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding bg-site-base">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="heading-lg text-center text-site-text mb-12"
          >
            About <span className="text-site-accent">Us</span>
          </motion.h2>
          
          <div className="space-y-6 text-site-text/80">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Founded in 1995, Chitkara Constructions has established itself as a leading architectural and construction firm, 
              delivering exceptional projects across residential, commercial, institutional, and industrial sectors.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our multidisciplinary team of architects, engineers, draughtsmen, valuers, and landscape architects 
              brings diverse expertise to every project. This collaborative approach enables us to provide comprehensive 
              solutions that address all aspects of the built environment.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At Chitkara Constructions, we believe that great design goes beyond aesthetics. It's about creating spaces that 
              enhance human experience, optimize functionality, and promote sustainability. Every project we undertake 
              is guided by these principles, ensuring outcomes that exceed client expectations.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-site-panel p-6 rounded-lg border border-site-line">
              <h3 className="text-xl font-semibold text-site-text mb-4">Our Vision</h3>
              <p className="text-site-text/80">
                To be the foremost architectural and construction firm, known for design excellence, 
                technical innovation, and client satisfaction.
              </p>
            </div>
            
            <div className="bg-site-panel p-6 rounded-lg border border-site-line">
              <h3 className="text-xl font-semibold text-site-text mb-4">Our Mission</h3>
              <p className="text-site-text/80">
                To create meaningful spaces that inspire, function effectively, and stand the test of time 
                through collaborative design, technical excellence, and unwavering commitment to quality.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 