import { Link } from 'react-router-dom';
// import { APP_TITLE } from '@src/constants/variables';
import { Image } from '@src/components/ui/image/Image';
// import logoIcon from '@src/assets/images/logo/logo-icon.png';
import logoBlue from '@src/assets/images/logo/logo-blue.png';
import logoWhite from '@src/assets/images/logo/logo-white.png';

interface LogoProps {
  isSticky: boolean;
}

export const Logo: React.FC<LogoProps> = ({ isSticky }) => {
  return (
    <Link to='/' className='flex items-center justify-center gap-0.5 lg:gap-2'>
      <Image
        src={isSticky ? logoBlue : logoWhite}
        alt='Awal-solution-logo-icon'
        className='h-16 w-24'
      />
      {/* <h1 className='font-sans text-2xl font-semibold capitalize text-white'>
        {APP_TITLE}
      </h1> */}
    </Link>
  );
};
