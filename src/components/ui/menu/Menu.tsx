import { ReactNode } from 'react';

interface MenuProps {
  setActive: (item: string | null) => void;
  children: ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className='flex justify-center items-center gap-6 py-6'
    >
      {children}
    </nav>
  );
};
