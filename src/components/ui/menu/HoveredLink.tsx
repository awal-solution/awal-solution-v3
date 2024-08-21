import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface HoveredLinkProps {
  href: string;
  children: ReactNode;
}

export const HoveredLink: React.FC<HoveredLinkProps> = ({ href, children }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? 'transition-opacity duration-200 ease-out hover:opacity-70 border border-[#333a79] rounded-full px-3 py-1'
          : 'transition-opacity duration-200 ease-out hover:opacity-70 px-3 py-1 hover:rounded-full hover:border hover:border-[#333a79]'
      }
    >
      {children}
    </NavLink>
  );
};
