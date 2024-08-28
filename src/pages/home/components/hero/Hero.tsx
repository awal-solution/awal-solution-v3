import innerCircle from '@src/assets/images/hero/circle_inner.webp';
import middleCircle from '@src/assets/images/hero/circle_mid.webp';
import outerCircle from '@src/assets/images/hero/circle_outer.webp';
import mostOuterCircle from '@src/assets/images/hero/circle_most_outer.png';
import image01 from '@src/assets/images/hero/shape_image_1-scaled.webp';
import image02 from '@src/assets/images/hero/shape_image_2-scaled.webp';
import image03 from '@src/assets/images/hero/shape_image_3.webp';
import image04 from '@src/assets/images/hero/shape_image_4.webp';
import titleUnderLine from '@src/assets/images/title_bar/shape_title_under_line.svg';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className='bg-[#020842]  pt-24 text-white'>
      <div className='relative h-[100px]'>
        <img src={image01} alt='image' className='absolute left-0 max-w-[50%]' />
        <img src={image03} alt='image' className='absolute right-0 max-w-80' />
      </div>
      <div className='mx-auto flex max-w-screen-xl flex-col justify-center gap-5 overflow-hidden px-3 lg:flex-row'>
        <div className='w-full pr-28 lg:w-1/2'>
          <h3>PERFECT COMPANY SOLUTION</h3>
          <img src={titleUnderLine} alt='title under line' />
          <h1 className='mt-10 text-3xl md:text-6xl'>
            We Help Companies in <span className='text-[#0044EB]'>Digitizing</span> Their
            Businesses.
          </h1>
          <p className='my-8 leading-7 text-[#B6B8CA]'>
            In today's rapidly evolving digital landscape, staying ahead of the curve is essential
            for businesses aiming to thrive and succeed.
          </p>
          <ul className='relative mb-5 text-white'>
            <div className='mb-2 flex items-center gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
                className='text-xl text-[#0044EB]'
              >
                <g
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <circle cx='12' cy='12' r='1' strokeWidth='5'></circle>
                </g>
              </svg>
              <li>Focus on quality first</li>
            </div>
            <div className='flex items-center gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
                className='text-xl text-[#0044EB]'
              >
                <g
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <circle cx='12' cy='12' r='1' strokeWidth='5'></circle>
                </g>
              </svg>
              <li>Get to the market on time</li>
            </div>
            <div className='absolute left-2.5 top-1 -z-0 h-10 border-l border-[#0044EB]'></div>
          </ul>
          <div className='flex gap-5'>
            <Link
              to='/contact-us'
              className='group/btn flex items-center gap-1 rounded-full bg-[#0044EB] px-6 py-3 md:px-8'
            >
              <span className='group-hover/btn:animate-out group-hover/btn:slide-out-to-top group-hover/btn:duration-500'>
                Contact Us Today!
              </span>

              <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 15 15'>
                <path
                  fill='currentColor'
                  fillRule='evenodd'
                  d='M3.646 11.354a.5.5 0 0 1 0-.707L10.293 4H6a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-1 0V4.707l-6.646 6.647a.5.5 0 0 1-.708 0'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className='flex w-full justify-center lg:w-1/2'>
          <div className='circle_container relative overflow-hidden'>
            <img
              src={innerCircle}
              alt='image'
              className='absolute left-[43%] top-[41.5%] z-40 h-1/5 w-[18%] overflow-hidden object-cover'
            />
            <img
              src={middleCircle}
              alt='image'
              className='absolute left-[21%] top-[18%] h-[67%] w-[62%] animate-[spinCW_10s_linear_infinite] overflow-hidden object-cover'
            />
            <img
              src={outerCircle}
              alt='image'
              className='absolute left-[11.5%] top-[7.5%] h-[88%] w-[81%] animate-[spinAntiCW_10s_linear_infinite] overflow-hidden object-cover'
            />
            <img
              src={mostOuterCircle}
              alt='image'
              className='size-full overflow-hidden object-cover'
            />
          </div>
        </div>
      </div>
      <div className='relative h-[150px]'>
        <img src={image02} alt='image' className='absolute bottom-6 left-0 max-w-[50%]' />
        <img src={image04} alt='image' className='absolute bottom-8 right-0 max-w-80' />
      </div>
    </section>
  );
};
