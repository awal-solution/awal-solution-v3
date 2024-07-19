import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import '@src/components/sliders/style.css';

import { data, images } from '@src/data/testimonial.data';

export const TestimonialSlider = () => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: true,
        pauseOnMouseEnter: true,
      }}
      navigation={{
        enabled: true,
        prevEl: '.swiper_button_prev',
        nextEl: '.swiper_button_next',
      }}
      modules={[Autoplay, Navigation]}
      className='testimonial relative size-full'
    >
      {data?.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='flex h-full flex-col justify-between'>
            <h1 className='text-4xl font-bold text-[#0044EB]'>{item.title}</h1>
            <div className='text-xl'>{item.des}</div>
            <div className='flex justify-between'>
              <div className='flex justify-between gap-8'>
                <div className='h-36 w-32 rounded-xl bg-[#E3F0FF]'>
                  <img
                    src={item.avatar}
                    alt=''
                    className='size-full object-cover'
                  />
                </div>
                <div className='flex h-full flex-col justify-evenly'>
                  <h3 className='text-xl font-bold'>{item.auther}</h3>
                  <div>
                    {item.desiganation} {item.company}
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={item.flag} alt='image' className='size-10' />
                    <div>{item.address}</div>
                  </div>
                </div>
              </div>
              <div>
                <img src={item.company_logo} alt='image' className='w-60' />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <button className='swiper_button_prev right-14'>
        <img src={images.sliderLeftArrow} alt='arrow icon' />
      </button>
      <button className='swiper_button_next right-0'>
        <img src={images.sliderRightArrow} alt='arrow icon' />
      </button>
    </Swiper>
  );
};
