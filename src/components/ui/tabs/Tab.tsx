import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@src/utils/functions/cn';

interface Props {
  id: number;
  children: ReactNode;
  onTabClick: (id: number) => void;
  className?: string;
}

export const Tab: React.FC<Props> = ({
  onTabClick,
  id,
  children,
  className,
}) => {
  return (
    <motion.li
      initial={false}
      onClick={() => onTabClick(id)}
      className={cn(className)}
    >
      {children}
    </motion.li>
  );
};
