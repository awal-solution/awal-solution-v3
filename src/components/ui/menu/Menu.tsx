import { ReactNode } from 'react';
import { cn } from '@src/utils/functions/cn';

interface MenuProps {
  children: ReactNode;
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({ children, className }) => {
  return (
    <nav className={cn('flex items-center justify-center gap-6 py-6', className)}>{children}</nav>
  );
};
