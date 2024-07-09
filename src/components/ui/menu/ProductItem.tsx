import { Link } from 'react-router-dom';
import { Image } from '@src/components/ui/image/Image';

interface ProductItemProps {
  src: string;
  href: string;
  title: string;
  description: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  src,
  href,
  title,
  description,
}) => {
  return (
    <Link to={href} className='flex space-x-2'>
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className='rounded-lg object-cover'
      />
      <div className='space-y-1'>
        <h4 className='font-sans text-xl font-semibold tracking-wide'>
          {title}
        </h4>
        <p className='max-w-40 text-xs '>
          {description}
        </p>
      </div>
    </Link>
  );
};
