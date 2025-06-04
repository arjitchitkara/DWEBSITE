//  src/components/AnimatedLogo.tsx
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo = ({ className }: AnimatedLogoProps) => {
  return (
    <motion.img
      src="/images/logo.png"
      alt="Chitkara Constructions"
      className={clsx('select-none pointer-events-none', className)}
      draggable={false}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{
        opacity: 1,
        scale: [1, 1.06, 1],
        y:     [0, -6, 0, 6, 0],
        filter:[
          'drop-shadow(0 0 0px #ffffff00)',
          'drop-shadow(0 4px 12px #ffffff33)',
          'drop-shadow(0 0 0px #ffffff00)'
        ],
      }}
      transition={{
        // base fade-in
        opacity: { duration: .9, ease: 'easeOut' },
        scale:   { duration: 6, ease: 'easeInOut', repeat: Infinity },
        y:       { duration: 10, ease: 'easeInOut', repeat: Infinity },
        filter:  { duration: 4, ease: 'easeInOut', repeat: Infinity },
      }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    />
  );
};

export default AnimatedLogo;
