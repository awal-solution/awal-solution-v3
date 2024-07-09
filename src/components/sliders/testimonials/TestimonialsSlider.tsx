import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@src/components/sliders/testimonials/styles/style.css';

import { testimonials } from '@src/components/data/testimonials';
import { TestimonialCard } from '@src/components/cards/testimonialsCard/TestimonialCard';

export const TestimonialsSlider = () => {
  return (
    <Swiper
      loop={true}
      keyboard={true}
      navigation={true}
      mousewheel={true}
      speed={1000}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 15,
        stretch: 50,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: true,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
        417: {
          slidesPerView: 'auto',
          spaceBetween: -28,
          centeredSlides: true,
        },
        0: {
          slidesPerView: 1,
        },
      }}
      modules={[
        Autoplay,
        Pagination,
        Navigation,
        Mousewheel,
        EffectCoverflow,
        Keyboard,
      ]}
      className='testimonial_slider'
    >
      {testimonials?.map((item) => (
        <SwiperSlide key={item.id}>
          <TestimonialCard data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
