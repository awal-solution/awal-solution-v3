import { Links } from '@src/components/data/footerLinks';
import { Link } from 'react-router-dom';

interface FooterLinkProps {
  title: string;
  links: Links[];
}

export const FooterLink: React.FC<FooterLinkProps> = ({ title, links }) => {
  return (
    <li className='col-span-12 sm:col-span-6 lg:col-span-3'>
      <h4 className='font-syne mb-3 font-bold lg:mb-5 lg:text-xl'>{title}</h4>
      <ul className='grid grid-cols-12 gap-2 lg:gap-3 lg:text-base'>
        {links?.map((link) => (
          <li key={link?.id} className='col-span-12'>
            <Link to={link?.path} className=''>
              {link?.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
