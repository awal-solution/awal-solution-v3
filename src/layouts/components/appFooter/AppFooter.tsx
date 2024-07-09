import { Link } from 'react-router-dom';
import { Logo } from '@src/components/logo/Logo';
import { footerLinks } from '@src/components/data/footerLinks';
import { FooterLink } from '@src/layouts/components/appFooter/FooterLink';

export const AppFooter = () => {
  return (
    <footer className='relative z-[1] pt-12 lg:pt-20'>
      <div className='mx-auto w-[calc(100%_-_2.5rem)] max-w-7xl lg:w-[calc(100%_-_4rem)]'>
        <div className='grid grid-cols-12 gap-y-8 lg:gap-12'>
          <div className='col-span-12 xl:col-span-3 '>
            <Logo />
          </div>

          <nav className='col-span-12 xl:order-1 xl:col-span-9'>
            <ul className='grid grid-cols-12 gap-y-8 sm:gap-8 lg:gap-12'>
              {footerLinks?.map((links) => (
                <FooterLink
                  key={links.id}
                  title={links?.title}
                  links={links?.links}
                />
              ))}
            </ul>
          </nav>
        </div>

        <div className='mt-8 flex flex-col border-t py-2 lg:mt-12 lg:flex-row lg:items-center lg:justify-between lg:py-3'>
          <div className='mb-3 lg:mb-0'>
            <div className='flex flex-wrap gap-2 text-sm lg:gap-3 lg:text-xs'>
              <span>&copy; Awal Solution</span>
              <Link to='/terms-and-condition' className=''>
                Terms
              </Link>
              <Link to='privacy-policy' className=''>
                Privacy
              </Link>
            </div>
          </div>

          <div className='flex items-center gap-2 lg:gap-3'>
            <a href='#0' className='main-footer__social'>
              <svg
                className='icon block size-[1em] shrink-0 fill-current leading-none text-inherit'
                viewBox='0 0 16 16'
              >
                <title>Follow us on Twitter</title>
                <g>
                  <path d='M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1 C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7 c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3 c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z'></path>
                </g>
              </svg>
            </a>

            <a href='#0' className='main-footer__social'>
              <svg
                className='icon block size-[1em] shrink-0 fill-current leading-none text-inherit'
                viewBox='0 0 16 16'
              >
                <title>Follow us on Youtube</title>
                <g>
                  <path d='M15.8,4.8c-0.2-1.3-0.8-2.2-2.2-2.4C11.4,2,8,2,8,2S4.6,2,2.4,2.4C1,2.6,0.3,3.5,0.2,4.8C0,6.1,0,8,0,8 s0,1.9,0.2,3.2c0.2,1.3,0.8,2.2,2.2,2.4C4.6,14,8,14,8,14s3.4,0,5.6-0.4c1.4-0.3,2-1.1,2.2-2.4C16,9.9,16,8,16,8S16,6.1,15.8,4.8z M6,11V5l5,3L6,11z'></path>
                </g>
              </svg>
            </a>

            <a href='#0' className='main-footer__social'>
              <svg
                className='icon block size-[1em] shrink-0 fill-current leading-none text-inherit'
                viewBox='0 0 16 16'
              >
                <title>Follow us on Github</title>
                <g>
                  <path d='M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z'></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
