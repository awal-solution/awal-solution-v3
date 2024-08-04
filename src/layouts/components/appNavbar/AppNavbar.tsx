import { useState } from 'react';
import { MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Menu,
  MenuItem,
  HoveredLink,
  // ProductItem,
} from '@src/components/ui/menu';
import { Logo } from '@src/components/logo/Logo';
import { Button, Section } from '@src/components/ui';
// import placeholder from '@src/assets/images/Image container.png';

export const AppNavbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Section
      as='nav'
      name='navbar'
      className='absolute inset-x-0 top-0 z-50 flex w-full items-center justify-between overflow-visible bg-transparent p-4 sm:px-8 sm:py-6 md:px-12 md:py-2 lg:px-16 xl:px-20 2xl:px-24'
    >
      <div className='py-4 lg:hidden'>
        <Button onClick={() => console.log('menu clicked')} size='xs'>
          <MenuIcon size={18} />
        </Button>
      </div>
      <Logo />
      <div className='hidden text-white lg:block'>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item='Services'>
            <div className='flex flex-col space-y-4 rounded bg-white p-5 text-sm text-black'>
              <HoveredLink href='/web-dev'>Web Development</HoveredLink>
              <HoveredLink href='/interface-design'>
                Interface Design
              </HoveredLink>
              <HoveredLink href='/seo'>Search Engine Optimization</HoveredLink>
              <HoveredLink href='/branding'>Branding</HoveredLink>
            </div>
          </MenuItem>
          {/* <MenuItem setActive={setActive} active={active} item='Products'>
            <div className='grid grid-cols-3 gap-10 p-4 text-sm'>
              {[1, 2, 3, 4, 5, 6]?.map((product) => (
                <ProductItem
                  key={product}
                  title={`Project ${product} Title`}
                  href='/'
                  src={placeholder}
                  description={`This is the simple product ${product} description`}
                />
              ))}
            </div>
          </MenuItem> */}
          <HoveredLink href='/Portfolio'>Portfolio</HoveredLink>
          <MenuItem setActive={setActive} active={active} item='Company'>
            <div className='flex flex-col space-y-4 rounded bg-white p-5 text-sm text-black'>
              <HoveredLink href='/about-us'>About</HoveredLink>
              <HoveredLink href='/team'>Team</HoveredLink>
              <HoveredLink href='/life-at-awal-solution'>
                Life at awal solution
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item='Resource'>
            <div className='flex flex-col space-y-4 rounded bg-white p-5 text-sm text-black'>
              <HoveredLink href='/blogs'>Blogs</HoveredLink>
              <HoveredLink href='/gallery'>Gallery</HoveredLink>
              <HoveredLink href='/careers'>Careers</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
      <div className='flex items-center gap-4'>
        {/* <ThemeToggler /> */}
        <div className='hidden sm:block'>
          <Link
            to='/contact'
            className='group/btn flex items-center gap-1 rounded-full bg-[#0044EB] px-8 py-3'
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
    </Section>
  );
};
