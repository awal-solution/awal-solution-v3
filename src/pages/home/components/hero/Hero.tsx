import innerCircle from '@src/assets/images/hero/circle_inner.webp';
import middleCircle from '@src/assets/images/hero/circle_mid.webp';
import outerCircle from '@src/assets/images/hero/circle_outer.webp';
import mostOuterCircle from '@src/assets/images/hero/circle_most_outer.png';
import image01 from '@src/assets/images/hero/shape_image_1-scaled.webp';
import image02 from '@src/assets/images/hero/shape_image_2-scaled.webp';
import image03 from '@src/assets/images/hero/shape_image_3.webp';
import image04 from '@src/assets/images/hero/shape_image_4.webp';
import titleUnderLine from '@src/assets/images/title_bar/shape_title_under_line.svg';

export const Hero = () => {
  return (
    <section className='bg-[#020842]  text-white pt-24'>
      <div className='relative h-[100px]'>
        <img
          src={image01}
          alt='image'
          className='max-w-[50%] absolute left-0'
        />
        <img src={image03} alt='image' className='max-w-96 absolute right-0' />
      </div>
      <div className='max-w-screen-2xl mx-auto flex justify-center'>
        <div className='w-1/2 pr-28'>
          <h3>PERFECT COMPANY SOLUTION</h3>
          <img src={titleUnderLine} alt='title under line' />
          <h1 className='text-6xl mt-10'>
            We Help Companies in{' '}
            <span className='text-[#0044EB]'>Digitizing</span> Their Businesses.
          </h1>
          <p className='text-[#B6B8CA] my-8 leading-7'>
            In today's rapidly evolving digital landscape, staying ahead of the
            curve is essential for businesses aiming to thrive and succeed.
          </p>
          <ul className='text-white relative mb-5'>
            <div className='flex items-center gap-3 mb-2'>
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
            <div className='border-l border-[#0044EB] absolute h-10 left-2.5 top-1 -z-0'></div>
          </ul>
          <div className='flex gap-5'>
            <button className='bg-[#0044EB] px-8 py-3 rounded-full flex items-center gap-1 group/btn'>
              <span className='group-hover/btn:animate-out group-hover/btn:slide-out-to-top group-hover/btn:duration-500'>
                Contact Us Today!
              </span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 15 15'
              >
                <path
                  fill='currentColor'
                  fillRule='evenodd'
                  d='M3.646 11.354a.5.5 0 0 1 0-.707L10.293 4H6a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-1 0V4.707l-6.646 6.647a.5.5 0 0 1-.708 0'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='w-1/2 flex justify-end'>
          <div className='relative h-[600px] w-[650px]'>
            <img
              src={innerCircle}
              alt='image'
              className='absolute h-[20%] w-[18%] top-[41.5%] left-[43%] object-cover z-50'
            />
            <img
              src={middleCircle}
              alt='image'
              className='absolute h-[67%] w-[62%] top-[18%] left-[21%] object-cover animate-[spinCW_10s_linear_infinite]'
            />
            <img
              src={outerCircle}
              alt='image'
              className='absolute h-[88%] w-[81%] top-[7.5%] left-[11.5%] object-cover animate-[spinAntiCW_10s_linear_infinite]'
            />
            <img
              src={mostOuterCircle}
              alt='image'
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
      <div className='relative h-[150px]'>
        <img
          src={image02}
          alt='image'
          className='max-w-[50%] absolute left-0 bottom-6'
        />
        <img
          src={image04}
          alt='image'
          className='max-w-96 absolute right-0 bottom-8'
        />
      </div>
    </section>
  );
};
