import { HoveredLink, Menu } from '@src/components/ui';

export const Mobile = ({ isOpen, isSticky }: any) => {
  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } absolute inset-x-0 top-full flex-col bg-white p-4 text-black lg:hidden`}
    >
      <Menu className='flex flex-col gap-4'>
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
