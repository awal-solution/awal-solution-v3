import { useEffect, useState } from 'react';
import { MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, HoveredLink } from '@src/components/ui/menu';
import { Logo } from '@src/components/logo/Logo';

export const AppNavbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isSticky ? 'sticky bg-white' : 'absolute'
      } inset-x-0 top-0 z-50 flex w-full items-center justify-between overflow-visible p-4 sm:px-8 sm:py-6 md:px-12 md:py-2 lg:px-16 xl:px-20 2xl:px-24 `}
    >
      <div className='py-4 lg:hidden'>
        <button onClick={() => console.log('menu clicked')}>
          <MenuIcon size={18} />
        </button>
      </div>
      <Logo isSticky={isSticky} />
      <div
        className={`${isSticky ? 'text-black' : 'text-white'} hidden  lg:block`}
      >
        <Menu setActive={setActive}>
          <HoveredLink href='/home'>Home</HoveredLink>
          <MenuItem
            setActive={setActive}
            active={active}
            item='Services'
            link='/services'
          >
            <div className='flex flex-col space-y-4 rounded bg-white p-5 text-sm '>
              <HoveredLink href='/web-dev'>Web Development</HoveredLink>
              <HoveredLink href='/interface-design'>
                Interface Design
              </HoveredLink>
              <HoveredLink href='/seo'>Search Engine Optimization</HoveredLink>
              <HoveredLink href='/branding'>Branding</HoveredLink>
            </div>
          </MenuItem>
          <HoveredLink href='/project'>Portfolio</HoveredLink>
          <HoveredLink href='/about-us'>About Us</HoveredLink>
          <HoveredLink href='/team'>Team</HoveredLink>
          <HoveredLink href='/blog'>Blog</HoveredLink>
          <HoveredLink href='/career'>Careers</HoveredLink>
          <HoveredLink href='/contact-us'>Contact Us</HoveredLink>
        </Menu>
      </div>
      <div className='flex items-center gap-4'>
        <div className='hidden sm:block'>
          <Link
            to='/contact-us'
            className='group/btn flex items-center gap-1 rounded-full bg-[#0044EB] px-8 py-3 text-white'
          >
            <span className='group-hover/btn:animate-out group-hover/btn:slide-out-to-top group-hover/btn:duration-500'>
              Get Started
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 15 15'
            >
              <path
                fill='currentColor'
                fillRule='evenodd'
                d='M3.646 11.354a.5.5 0 0 1 0-.707L10.293 4H6a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-1 0V4.707l-6.646 6.647a.5.5 0 0 1-.708 0'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};
