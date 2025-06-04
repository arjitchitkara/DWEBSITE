//  src/components/Hero.tsx
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import MotionButton from '@/components/ui/MotionButton';
import Slideshow from '@/components/Slideshow';
import AnimatedLogo from '@/components/AnimatedLogo';
import { Link } from 'react-router-dom';

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: .8, ease: 'easeOut' } }
};

export default function Hero() {
  const headlines = ['Innovative Design', 'Building the Future', 'Expert Construction'];
  const [current, setCurrent] = useState(0);

  // rotate headline every 3.5 s
  useEffect(() => {
    const id = setInterval(() => setCurrent(i => (i + 1) % headlines.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 1️⃣ background slideshow */}
      <Slideshow />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black10" />

      {/* 2️⃣ foreground content */}
      <div className="container-custom relative z-10 flex flex-col items-center">

        {/* ─── animated logo ─── */}
        <AnimatedLogo className="h-32 md:h-40 mx-auto mb-10" />

        {/* headline */}
        <motion.h1
          key={headlines[current]}
          variants={headingVariants}
          initial="hidden"
          animate="show"
          className="heading-xl text-white mb-4"
        >
          {headlines[current]} <br />
          <span className="font-light">
            with <b>Excellence&nbsp;&amp; Innovation</b>
          </span>
        </motion.h1>

        {/* sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0, transition: { delay: .4 } }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-10"
        >
          A team of architects, engineers, draughtsmen, valuers and landscape architects
          dedicated to turning your vision into reality with precision and expertise.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: .75 } }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link to="/projects">
            <MotionButton whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }} className="btn-primary">
              Explore Our Projects <ArrowRight className="ml-2 h-4 w-4" />
            </MotionButton>
          </Link>

          <Link to="/services">
            <MotionButton
              variant="outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
            >
              Our Services
            </MotionButton>
          </Link>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
          className="grid grid-cols-3 gap-6 mt-20 text-white"
        >
          <Stat value="25+" label="Years Experience" />
          <Stat value="350+" label="Projects Completed" />
          <Stat value="45+" label="Expert Professionals" />
        </motion.div>
      </div>
    </section>
  );
}

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="text-4xl font-bold font-display">{value}</p>
    <p className="text-sm text-gray-300">{label}</p>
  </div>
);
