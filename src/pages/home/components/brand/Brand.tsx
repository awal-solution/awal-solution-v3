import BrandMarquee from 'react-fast-marquee';
import { brandData } from '@src/pages/home/components/brand/data';

export const Brand = () => {
  return (
    <section className='bg-[#0132B8] pt-16 pb-5 pl-[25%] relative z-0'>
      <BrandMarquee>
        {brandData?.map((item: { image: string }, i: any) => (
          <div
            className='h-[80px] bg-white mx-2 w-[180px] py-7 px-3 brand_slider rounded'
            key={i}
          >
            <img
              src={item.image}
              alt='sample image for showcase'
              className='h-full w-full object-scale-down'
            />
          </div>
        ))}
      </BrandMarquee>
      <div className='bg-[#0132B8] absolute top-0 bottom-0 left-[28%] w-[210px] z-10 px-5 flex items-center pt-10'>
        <h1 className='text-2xl'>Our Featured Partner's</h1>
      </div>
    </section>
  );
};
