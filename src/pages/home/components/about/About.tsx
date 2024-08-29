import { aboutData, aboutImages, sectionHeading } from '@src/data/home/about.data';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <section className='bg-[#020842] pb-36'>
      <div className='flex justify-center'>
        <img src={aboutImages.angleShape} alt='about banner' className='w-1/2' />
      </div>
      <div className='mx-auto grid max-w-screen-xl grid-cols-5 gap-14 px-2 pt-32'>
        <div className='col-span-5 flex flex-col md:col-span-2'>
          <div className='w-[106px] bg-[url(../../../src/assets/images/title_bar/shape_title_under_line.svg)] bg-right-bottom bg-no-repeat pb-2 pr-4 text-white'>
            {sectionHeading.title}
          </div>
          <h1 className='py-8 text-5xl font-bold text-white'>
            Awal Solution <span className='text-[#0044EB]'>Mission & Goal</span>
          </h1>
          <p className='text-white'>{aboutData.des}</p>
        </div>
        <div className='relative col-span-5 flex flex-col gap-5 md:col-span-3 md:flex-row'>
          <div className='my-auto w-full lg:ml-auto lg:max-w-96'>
            <img src={aboutImages.aboutMissionPic2} alt='man image' className='rounded-xl' />
          </div>
          <div className='absolute bottom-0 left-10 hidden max-w-96 lg:block'>
            <img src={aboutImages.aboutMissionPic1} alt='man image' className='rounded-xl' />
          </div>
        </div>
        <div className='col-span-5 flex flex-col items-center gap-20 md:flex-row'>
          <div className='flex gap-16 text-white'>
            <div>
              <h3 className='mb-3 text-5xl font-bold'>{aboutData.title1}</h3>
              <p>{aboutData.p1}</p>
            </div>
            <div>
              <h3 className='mb-3 text-5xl font-bold'>{aboutData.title2}</h3>
              <p>{aboutData.p2}</p>
            </div>
          </div>
          <Link
            to='/about-us'
            className='group/btn flex items-center justify-center gap-1 rounded-xl bg-[#0044EB] px-4 py-5 text-white'
          >
            <span className='group-hover/btn:animate-out group-hover/btn:slide-out-to-top text-lg group-hover/btn:duration-500'>
              Learn More
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1.5em'
              height='1.5em'
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
    </section>
  );
};
