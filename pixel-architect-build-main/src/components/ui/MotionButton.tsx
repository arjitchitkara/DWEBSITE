// src/components/ui/motion-button.tsx
import { Button, type ButtonProps } from '@/components/ui/button';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

type MotionButtonProps = ButtonProps & HTMLMotionProps<'button'>;

const MotionButton = forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ children, ...rest }, ref) => (
    <motion.button ref={ref} {...rest}>
      {/* pass only Button props down to Button */ }
      <Button {...(rest as ButtonProps)}>{children}</Button>
    </motion.button>
  )
);
MotionButton.displayName = 'MotionButton';
export default MotionButton;
