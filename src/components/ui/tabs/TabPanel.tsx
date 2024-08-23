import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@src/utils/functions/cn';

interface Props {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

export const TabPanel: React.FC<Props> = ({ isOpen, children, className }) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.section
          initial='collapsed'
          animate='open'
          exit='collapsed'
          variants={{
            open: { height: 'auto' },
            collapsed: { height: 0 }
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='overflow-hidden'
        >
          <div className={cn(className)}>{children}</div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
