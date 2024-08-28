import { useEffect, useState } from 'react';
import { MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '@src/components/logo/Logo';
import { Mobile } from '@src/layouts/components/appNavbar/Mobile';
import { Desktop } from '@src/layouts/components/appNavbar/Desktop';

export const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`inset-x-0 top-0 z-50 flex w-full items-center justify-between p-4 ${isSticky ? 'sticky bg-white' : 'absolute'}`}
    >
      <Logo isSticky={isSticky} />
      <Desktop isSticky={isSticky} />
      <Mobile isOpen={isOpen} isSticky={isSticky} />
      <Link
        to='/contact-us'
        className='group/btn hidden items-center gap-2 rounded-full bg-[#0044EB] px-8 py-3 text-white lg:flex'
      >
        <span className='group-hover/btn:animate-out group-hover/btn:slide-out-to-top'>
          Get Started
        </span>
        <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 15 15'>
          <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3.646 11.354a.5.5 0 0 1 0-.707L10.293 4H6a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-1 0V4.707l-6.646 6.647a.5.5 0 0 1-.708 0'
            clipRule='evenodd'
          />
        </svg>
      </Link>

      <div className='py-4 lg:hidden'>
        <button onClick={() => menuToggle()}>
          <MenuIcon size={18} color={isSticky ? 'black' : 'white'} />
        </button>
      </div>
    </header>
  );
};
