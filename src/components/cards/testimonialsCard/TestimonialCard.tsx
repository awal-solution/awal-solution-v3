import { Star } from 'lucide-react';
import { Image } from '@src/components/ui/image/Image';
import { Testimonials } from '@src/components/data/testimonials';

export const TestimonialCard = ({ data }: { data: Testimonials }) => {
  return (
    <div className='relative flex w-full max-w-xs flex-col gap-0 rounded-lg p-4 sm:gap-2'>
      <div className='relative flex items-center gap-4 overflow-hidden rounded-lg'>
        <Image
          src={data.image}
          alt={data.name}
          className='inline-block size-11 rounded-full object-cover object-center shadow-lg'
        />
        <div className='flex w-full flex-col'>
          <div className='flex items-center gap-1 sm:justify-between sm:gap-0'>
            <h5 className='block whitespace-nowrap text-left text-sm font-semibold tracking-wide antialiased'>
              {data.name}
            </h5>
            <div className='flex items-center gap-0.5'>
              {[1, 2, 3, 4, 5]?.map((rating) => (
                <Star
                  key={rating}
                  className='fill-warning text-yellow-500'
                  size={16}
                />
              ))}
            </div>
          </div>
          <p className='block text-left text-[9px] antialiased sm:text-xs'>
            {data.company}
          </p>
        </div>
      </div>
      <div>
        <p className='mt-3 block text-xs antialiased'>
          <span className='line-clamp-4'>"{data.comment}"</span>
        </p>
      </div>
    </div>
  );
};
