import about1 from '@src/assets/images/about/about_image_1.webp';
import about2 from '@src/assets/images/about/about_image_2.webp';
import icon1 from '@src/assets/icons-svg/first.svg';
import icon2 from '@src/assets/icons-svg/scnd.svg';
import icon3 from '@src/assets/icons-svg/third.svg';
import BrandMarquee from 'react-fast-marquee';
import { brandData } from '@src/data/home/brand.data';
import crd1 from '@src/assets/icons-svg/AboutCard1.svg';
import crd2 from '@src/assets/icons-svg/AboutCard2.svg';
import crd3 from '@src/assets/icons-svg/AboutCard3.svg';
import crd4 from '@src/assets/icons-svg/aboutCard4.svg';
import crdimg from '@src/assets/images/about/about_image_card.webp';
import whyChoseUs from '@src/assets/images/services/about_image_5-1024x929.webp';
//
import iconOne from '@src/assets/images/services/icons/icon1.svg';
import iconTwo from '@src/assets/images/services/icons/icon2.svg';
import iconThree from '@src/assets/images/services/icons/icon3.svg';
import icon4 from '@src/assets/images/services/icons/icon4.svg';
import icon5 from '@src/assets/images/services/icons/icon5.svg';
import icon6 from '@src/assets/images/services/icons/icon6.svg';

const data: any = [
  {
    icon: icon1,
    title: 'Our History',
    des: 'Since 1997 we have been a visionary and a reliable software engineering partner for world-class brands. abbreviated as co.'
  },
  {
    icon: icon2,
    title: 'Our Mission',
    des: 'A mission statement clarifies what the company wants to achieve, who they want to support, and why they want to support them. On the other hand'
  },
  {
    icon: icon3,
    title: 'Our Vision',
    des: "A vision statement for a company or organization focuses on the potential inherent in the company's future; it's about what they intend to be how you"
  }
];
const cardData: any = [
  {
    icon: crd1,
    title: '25+',
    des: 'Years of experience'
  },
  {
    icon: crd2,
    title: '280+',
    des: 'Success Stories'
  },
  {
    icon: crd3,
    title: '56K',
    des: 'Companies Trust Us'
  },
  {
    icon: crd4,
    title: '100%',
    des: 'Results Guaranteed'
  }
];

interface Props {
  subHeading: string;
  heading: string;
}

const HeroSection: React.FC<Props> = ({ subHeading, heading }) => {
  return (
    <div className="w-full bg-[#020842] bg-[url('https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/06/bg_pattern_4.svg')] bg-cover bg-no-repeat px-16  py-20 text-center text-white sm:py-16 md:p-24 lg:pb-80 lg:pt-32">
      <h2 className='mt-12 sm:mt-16 md:mt-24'>
        <span className='rounded bg-[#F44380] px-4 text-center sm:px-6 md:px-8 lg:px-10'>
          {subHeading}
        </span>
      </h2>
      <h1 className='mt-4 text-3xl font-bold sm:text-4xl md:mt-6 md:text-5xl lg:text-6xl'>
        {heading}
      </h1>
    </div>
  );
};

const AboutHero = () => {
  return (
    <div>
      <div className='mt-10 grid grid-cols-3 gap-8 lg:-mt-64'>
        <img className=' col-span-3 rounded-md lg:col-span-2' src={about1} alt='image' />
        <img className=' col-span-3 rounded-xl lg:col-span-1' src={about2} alt='' />
      </div>
      <div className=' my-10 grid grid-cols-1 lg:my-20 lg:grid-cols-2'>
        <div>
          <h2 className=''>
            About
            <span className='ml-2 rounded bg-[#F44380] px-2 py-1 text-center text-white'>
              Awal solution 😍
            </span>
          </h2>
          <h1 className='mt-4 text-xl font-bold text-[#020842] sm:text-3xl md:mt-6 md:text-4xl lg:text-6xl'>
            We Provide You Flexible Services
          </h1>
        </div>
        <div className='text-lg font-medium text-[#54595F]'>
          At Techco, we pride ourselves on offering dynamic and IT to suit your specific
          requirements. Our flexible approach means we can adjust our offerings to accommodate your
          evolving needs, whether you require comprehensive IT infrastructure support, strategic
          consultancy, software development
        </div>
      </div>
      <div className='grid grid-cols-1 gap-5 py-7 lg:grid-cols-3 lg:py-14'>
        {data?.map((item: any, index: number) => {
          return (
            <div key={index} className='rounded-2xl bg-white px-6 py-8'>
              <div className='mb-2 mr-2 h-[16%] w-[22%] rounded-full bg-[#E3F0FF] md:h-[26%] md:w-[7%] lg:h-[22%] lg:w-[23%]'>
                <img
                  src={item.icon}
                  alt='image'
                  className='my-2 mb-5 ml-1 size-10 pt-4 md:size-11 lg:ml-3 lg:size-12 '
                />
              </div>

              <h3 className='mt-6 text-2xl font-semibold text-[#020842] '>{item.title}</h3>
              <p className='py-5 text-lg text-[#54595F]'>{item.des}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AboutBrand = () => {
  return (
    <div className='pb-14'>
      <h2 className='mt-12 pb-12 text-center sm:mt-16 md:my-12'>
        <span className='mr-2 rounded bg-[#F44380] px-5 py-1 text-center text-white sm:px-6 md:px-8 lg:px-3'>
          Brand we
        </span>
        Work With
      </h2>
      <BrandMarquee>
        {brandData?.map((item: { image: string }, i: any) => (
          <div className='brand_slider mx-2 h-[80px] w-[180px] rounded bg-white px-3 py-7' key={i}>
            <img
              src={item.image}
              alt='sample image for showcase'
              className='size-full object-scale-down'
            />
          </div>
        ))}
      </BrandMarquee>
    </div>
  );
};

const AboutCard = () => {
  return (
    <>
      <div className=' my-12 grid grid-cols-3 gap-24 lg:pb-14 '>
        <div className=' col-span-3 lg:col-span-2'>
          <div className='grid grid-cols-1 gap-5 py-0 lg:grid-cols-2 lg:py-9'>
            {cardData?.map((item: any, index: number) => {
              return (
                <div key={index} className='rounded-2xl bg-white px-6 py-8'>
                  <div>
                    <img src={item.icon} alt='image' className='my-2 ml-3 size-24 pt-4 ' />
                  </div>

                  <h1 className='mt-6 text-5xl font-bold text-[#020842] '>{item.title}</h1>
                  <p className='py-5 text-lg text-[#54595F]'>{item.des}</p>
                </div>
              );
            })}
          </div>
        </div>

        <img
          className=' col-span-3 mt-1 h-[90%] rounded-xl lg:col-span-1 lg:mt-[38px]'
          src={crdimg}
          alt=''
        />
      </div>
    </>
  );
};
const AboutChoose = () => {
  return (
    <section className='bg-[#E3F0FF] px-2 py-0 lg:px-8 lg:py-28'>
      <div className='mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-7 lg:grid-cols-2 '>
        <div className=''>
          <img src={whyChoseUs} alt='Services' className='w-full rounded-xl lg:w-auto' />
        </div>
        <div className='flex flex-col gap-6'>
          <div>
            <span className='rounded-md bg-[#F44380]  px-[6px] pb-0.5 text-white'>Better</span>
            <span className='ml-1 text-base font-semibold text-[#4F5761]'>Why Us</span>
          </div>
          <h2 className='w-[70%] text-[40px] font-bold leading-[50px] tracking-[-1px] text-[#020842]'>
            Why Our Services are Better Than Others?
          </h2>
          <div className='grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-2'>
            <div className='flex items-center space-x-4 rounded-lg bg-white p-4 py-6 text-base font-semibold text-[#020842]  duration-200 ease-linear hover:-translate-y-1 hover:text-[#0044EB]   hover:shadow-2xl'>
              <div className='icon flex size-10 items-center justify-center rounded-md bg-[#E5ECFD] p-1'>
                <img src={iconOne} alt='' className='size-7' />
              </div>
              <h4>Quality Comes First</h4>
            </div>

            <div className='font-s flex items-center  space-x-4 rounded-lg bg-white p-4 py-6 text-base font-semibold  text-[#020842] duration-200 ease-linear hover:-translate-y-1 hover:text-[#0044EB] hover:shadow-2xl'>
              <div className='icon flex size-10 items-center justify-center rounded-md bg-[#E5ECFD] p-1'>
                <img src={iconTwo} alt='' className='size-7' />
              </div>
              <h4>Flexible Cooperation</h4>
            </div>

            <div className='font-s flex items-center space-x-4 rounded-lg bg-white p-4 py-6 text-base font-semibold  text-[#020842] duration-200 ease-linear hover:-translate-y-1 hover:text-[#0044EB] hover:shadow-2xl'>
              <div className='icon flex size-10 items-center justify-center rounded-md bg-[#E5ECFD] p-1'>
                <img src={iconThree} alt='' className='size-7' />
              </div>
              <h4>On-time Delivery</h4>
            </div>

            <div className='font-s flex items-center space-x-4 rounded-lg bg-white p-4 py-6 text-base font-semibold  text-[#020842] duration-200 ease-linear hover:-translate-y-1 hover:text-[#0044EB] hover:shadow-2xl'>
              <div className='icon flex size-10 items-center justify-center rounded-md bg-[#E5ECFD] p-1'>
                <img src={icon4} alt='' className='size-7' />
              </div>
              <h4>Transparent Costs</h4>
            </div>

            <div className='font-s flex items-center space-x-4 rounded-lg bg-white p-4 py-6 text-base font-semibold  text-[#020842] duration-200 ease-linear hover:-translate-y-1 hover:text-[#0044EB] hover:shadow-2xl'>
              <div className='icon flex size-10 items-center justify-center rounded-md bg-[#E5ECFD] p-1'>
                <img src={icon5} alt='' className='size-7' />
              </div>
              <h4>Qualified Developers</h4>
            </div>

            <div className='font-s flex items-center space-x-4 rounded-lg bg-white p-4 py-6 text-base font-semibold  text-[#020842] duration-200 ease-linear hover:-translate-y-1 hover:text-[#0044EB] hover:shadow-2xl'>
              <div className='icon flex size-10 items-center justify-center rounded-md bg-[#E5ECFD] p-1'>
                <img src={icon6} alt='' className='size-7' />
              </div>
              <h4> Quick Scale-up</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const About = () => {
  return (
    <div className='bg-[#E3F0FF]'>
      <HeroSection heading='About Us' subHeading='Awal Solution 😍' />
      <div className='mx-auto max-w-screen-xl px-5'>
        <AboutHero />
        <AboutBrand />
        <AboutCard />
        <AboutChoose />
      </div>
    </div>
  );
};
