import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface HoveredLinkProps {
  href: string;
  children: ReactNode;
}

export const HoveredLink: React.FC<HoveredLinkProps> = ({ href, children }) => {
  return (
    <Link
      to={href}
      className='transition-opacity duration-200 ease-out hover:opacity-70'
    >
      {children}
    </Link>
  );
};
