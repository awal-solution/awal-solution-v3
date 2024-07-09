import { SectionTitle } from '@src/components/sectionTitle/SectionTitle';
import { TestimonialsSlider } from '@src/components/sliders/testimonials/TestimonialsSlider';

export const Testimonials = () => {
  return (
    <div className='space-y-14 bg-background-50 py-16'>
      <div className='px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        <SectionTitle title='Testimonial' subTitle='Our Client Words' />
      </div>
      <div className='max-w-3xl mx-auto overflow-x-clip'>
        <TestimonialsSlider />
      </div>
    </div>
  );
};
