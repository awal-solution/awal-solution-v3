import { TestimonialSlider } from '@src/components/sliders/testimonial/TestimonialSlider';
import { cardData, images } from '@src/data/testimonial.data';

export const Testimonial = () => {
  return (
    <div className='relative bg-[#E3F0FF] py-24'>
      <div className='mx-auto max-w-screen-xl'>
        <img
          src={images.leftAngleShape}
          alt='image'
          className='absolute bottom-5 left-0 z-10'
        />
        <div className='relative z-20 grid grid-cols-3 gap-10 p-2'>
          <div className='col-span-3 rounded bg-white p-10 md:col-span-1'>
            <h1 className='mb-3 text-6xl font-bold text-[#0044EB]'>
              {cardData.noOfClient}
            </h1>
            <h1 className='mb-20 text-5xl font-bold'>{cardData.title}</h1>
            <div className='flex justify-between'>
              <div>
                <img src={cardData.reviewIcon1} alt='image' />
                <div className='flex py-2'>
                  <img src={cardData.starIcon} alt='image' />
                  <img src={cardData.starIcon} alt='image' />
                  <img src={cardData.starIcon} alt='image' />
                  <img src={cardData.starIcon} alt='image' />
                  <img src={cardData.starIcon} alt='image' />
                </div>
                <div>
                  From <span className='font-bold'>200+</span> reviews
                </div>
              </div>
              <div>
                <img src={cardData.reviewIcon2} alt='image' />
                <div className='flex py-2'>
                  <img src={cardData.starIcon} alt='image' />
                  <img src={cardData.starIcon} alt='image' />
                  <img src={cardData.starIcon} alt='image' />
                  <img src={cardData.starIcon} alt='image' />
                  <img src={cardData.starIcon} alt='image' />
                </div>
                <div>
                  From <span className='font-bold'>200+</span> reviews
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3 rounded bg-white p-10 md:col-span-2'>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
};
