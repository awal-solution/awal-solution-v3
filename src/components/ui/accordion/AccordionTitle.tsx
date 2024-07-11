import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@src/utils/functions/cn';

interface Props {
  id: number;
  children: ReactNode;
  handleToggle: (id: number) => void;
  className?: string;
}

export const AccordionTitle: React.FC<Props> = ({
  handleToggle,
  id,
  children,
  className,
}) => {
  return (
    <motion.div
      initial={false}
      onClick={() => handleToggle(id)}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
