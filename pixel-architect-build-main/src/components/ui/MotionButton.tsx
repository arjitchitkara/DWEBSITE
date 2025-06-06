// src/components/ui/motion-button.tsx
import { Button, type ButtonProps } from '@/components/ui/button';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

type MotionButtonProps = ButtonProps & Omit<HTMLMotionProps<'div'>, 'as'>;

const MotionButton = forwardRef<HTMLDivElement, MotionButtonProps>(
  ({ children, ...rest }, ref) => (
    <motion.div ref={ref} {...rest}>
      <Button {...(rest as ButtonProps)}>{children}</Button>
    </motion.div>
  )
);
MotionButton.displayName = 'MotionButton';
export default MotionButton;
