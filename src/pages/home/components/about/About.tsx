import { aboutData, aboutImages, sectionHeading } from '@src/data/about.data';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <section className='bg-[#020842] pb-36'>
      <div className='flex justify-center'>
        <img
          src={aboutImages.angleShape}
          alt='about banner'
          className='w-1/2'
        />
      </div>
      <div className='max-w-screen-xl mx-auto grid grid-cols-5 gap-14 pt-32'>
        <div className='flex flex-col col-span-2'>
          <div className='bg-[url(../../../src/assets/images/title_bar/shape_title_under_line.svg)] bg-no-repeat bg-right-bottom pr-4 pb-2 w-[106px]'>
            {sectionHeading.title}
          </div>
          <h1 className='text-5xl text-white font-bold py-8'>
            Techco <span className='text-[#0044EB]'>Mission & Goal</span>
          </h1>
          <p>{aboutData.des}</p>
        </div>
        <div className='col-span-3 flex gap-5'>
          <div>
            <img
              src={aboutImages.manPicture}
              alt='man image'
              className='max-w-48 rounded-xl'
            />
          </div>
          <div className='relative flex-grow rounded-lg'>
            <img
              src={aboutImages.customerShape}
              alt='image'
              className='h-full w-full object-fill z-20 relative'
            />
            <img
              src={aboutImages.globe}
              alt='globe'
              className='absolute left-6 bottom-10'
            />
            <img
              src={aboutImages.shapeLine}
              alt='bottom'
              className='absolute -bottom-12 w-3/4 z-10'
            />
            <div className='text-black flex justify-around h-full items-end pl-20 absolute bottom-0 right-0 left-0 z-20'>
              <div>
                <h3 className='text-5xl font-bold mb-3'>{aboutData.title1}</h3>
                <p className='text-[#49515B]'>{aboutData.p1}</p>
              </div>
              <div>
                <h3 className='text-5xl font-bold mb-3'>{aboutData.title2}</h3>
                <p className='text-[#49515B]'>{aboutData.p2}</p>
              </div>
            </div>
            <Link
              to='/about'
              className='bg-[#0044EB] px-9 py-5 rounded-xl flex items-center gap-1 group/btn absolute right-5 top-0'
            >
              <span className='group-hover/btn:animate-out group-hover/btn:slide-out-to-top group-hover/btn:duration-500'>
                Learn More
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
