import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { APP_TITLE } from '@src/constants/variables';
// import { Image } from '@src/components/ui/image/Image';
// import logoIcon from '@src/assets/images/logo/logo-icon.png';

export const Logo = forwardRef(() => {
  return (
    <Link to='/' className='flex items-center justify-center gap-0.5 lg:gap-2'>
      {/* <Image
        src={logoIcon}
        alt='Awal-solution-logo-icon'
        className='w-8 lg:w-10'
      /> */}
      <h1 className='capitalize text-2xl font-sans font-semibold'>
        {APP_TITLE}
      </h1>
    </Link>
  );
});
