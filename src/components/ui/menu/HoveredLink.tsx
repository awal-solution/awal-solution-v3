import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface HoveredLinkProps {
  href: string;
  children: ReactNode;
  isSticky: boolean;
}

export const HoveredLink: React.FC<HoveredLinkProps> = ({
  href,
  children,
  isSticky,
}) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${
              isSticky ? 'border-[#E3F0FF] text-[#0044EB]' : 'border-[#333a79]'
            } transition-opacity duration-200 ease-out hover:opacity-70 border border-[#333a79] rounded-full px-3 py-1`
          : `${
              isSticky ? 'hover:border-[#E3F0FF]' : 'hover:border-[#333a79]'
            }  whitespace-nowrap transition-opacity duration-200 ease-out hover:opacity-70 px-1 xl:px-3 py-1 hover:rounded-full hover:border`
      }
    >
      {children}
    </NavLink>
  );
};
