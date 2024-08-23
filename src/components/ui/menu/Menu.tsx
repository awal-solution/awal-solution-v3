import { ReactNode } from 'react';

interface MenuProps {
  children: ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ children }) => {
  return (
    <nav className='flex items-center justify-center gap-6 py-6'>
      {children}
    </nav>
  );
};
