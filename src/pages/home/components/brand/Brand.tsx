import BrandMarquee from 'react-fast-marquee';
import { brandData } from '@src/pages/home/components/brand/data';

export const Brand = () => {
  return (
    <section className='relative z-0 bg-[#0132B8] pb-5 pl-[25%] pt-16'>
      <BrandMarquee>
        {brandData?.map((item: { image: string }, i: any) => (
          <div
            className='brand_slider mx-2 h-[80px] w-[180px] rounded bg-white px-3 py-7'
            key={i}
          >
            <img
              src={item.image}
              alt='sample image for showcase'
              className='size-full object-scale-down'
            />
          </div>
        ))}
      </BrandMarquee>
      <div className='absolute inset-y-0 left-[28%] z-10 flex w-[210px] items-center bg-[#0132B8] px-5 pt-10'>
        <h1 className='text-2xl text-white'>Our Featured Partner's</h1>
      </div>
    </section>
  );
};
