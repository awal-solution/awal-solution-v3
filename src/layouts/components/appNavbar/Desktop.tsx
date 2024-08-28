import { HoveredLink, Menu } from '@src/components/ui';

export const Desktop = ({ isSticky }: any) => {
  return (
    <div className={`hidden items-center gap-8 lg:flex ${isSticky ? 'text-black' : 'text-white'}`}>
      <Menu className='flex flex-row gap-8'>
        <HoveredLink href='/home' isSticky={isSticky}>
          Home
        </HoveredLink>
        <HoveredLink href='/services' isSticky={isSticky}>
          Services
        </HoveredLink>
        <HoveredLink href='/project' isSticky={isSticky}>
          Portfolio
        </HoveredLink>
        <HoveredLink href='/about-us' isSticky={isSticky}>
          About Us
        </HoveredLink>
        <HoveredLink href='/team' isSticky={isSticky}>
          Team
        </HoveredLink>
        <HoveredLink href='/blog' isSticky={isSticky}>
          Blog
        </HoveredLink>
        <HoveredLink href='/contact-us' isSticky={isSticky}>
          Contact Us
        </HoveredLink>
      </Menu>
    </div>
  );
};
