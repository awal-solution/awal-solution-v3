import { ReactNode } from 'react';
import { motion as M } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface MenuItemProps {
  link?: any;
  item: string;
  children?: ReactNode;
  active: string | null;
  setActive: (item: string) => void;
}

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001
};

export const MenuItem: React.FC<MenuItemProps> = ({ link, item, active, children, setActive }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative'>
      <Link to={link}>
        <M.div
          transition={{ duration: 0.3 }}
          className={`flex cursor-pointer items-center px-3 py-1 tracking-widest transition-opacity duration-200 ease-out hover:rounded-full hover:border hover:border-[#333a79] hover:opacity-70`}
        >
          <div>{item}</div>
          {active === item ? <ChevronUp /> : <ChevronDown />}
        </M.div>
      </Link>
      {active !== null && (
        <M.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className='absolute left-1/2 top-[calc(100%_+_1.6rem)] -translate-x-1/2'>
              <M.div
                transition={transition}
                layoutId='active'
                className='shadow-foreground/10 overflow-hidden rounded-lg shadow-xl'
              >
                <M.div layout className='h-full w-max p-4'>
                  {children}
                </M.div>
              </M.div>
            </div>
          )}
        </M.div>
      )}
    </div>
  );
};
