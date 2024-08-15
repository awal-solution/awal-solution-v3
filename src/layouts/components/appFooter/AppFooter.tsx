import { Link } from 'react-router-dom';
import BrandMarquee from 'react-fast-marquee';
import {
  footerImages,
  footerLinks,
  newsLetter,
  socialLinks,
  footerSlider,
} from '@src/data/footer.data';

export const AppFooter = () => {
  return (
    <footer className='relative bg-[#020842] bg-[url(./src/assets/images/footer/bg_pattern_3-1.svg)] bg-cover bg-center bg-no-repeat'>
      <div className='flex justify-center'>
        <img className='w-4/5' src={footerImages.topShape} alt='banner shap' />
      </div>
      <div className='mx-auto max-w-screen-xl'>
        <div className='mt-24 text-white'>
          <BrandMarquee
            gradient={true}
            gradientWidth={50}
            gradientColor='#020842'
          >
            {footerSlider?.map((item, index) => (
              <div
                key={index}
                className='mx-3 flex items-center gap-3 rounded-full border border-[#1B2155] p-1.5'
              >
                <div className='rounded-full  bg-[#282D5E] p-2'>
                  <img src={footerImages.tickIcon} alt='image' />
                </div>
                <div className='pr-3'>{item}</div>
              </div>
            ))}
          </BrandMarquee>
        </div>
        <div className='py-20 text-center md:grid md:grid-cols-5 md:text-left'>
          {footerLinks?.map((item, index) => {
            return (
              <div key={index} className='text-white'>
                <h3 className='mb-6 text-lg font-bold'>{item.title}</h3>
                {item?.links?.map((subItem, index) => {
                  return (
                    <div key={index} className='my-2'>
                      <Link to={subItem.link}>{subItem.text}</Link>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className='col-span-2 text-white'>
            <h3 className='mb-6'>{newsLetter.title}</h3>
            <div>{newsLetter.text}</div>
            <div className='my-8 flex items-center rounded-full bg-[#1B2155] p-1'>
              <div>
                <img
                  src={newsLetter.mailIcon}
                  alt='img'
                  className='ml-1 size-6'
                />
              </div>
              <input
                type='email'
                name=''
                id=''
                className='w-full  bg-transparent pl-4 outline-none'
                placeholder='Enter Your Email'
              />
              <button
                type='submit'
                className='rounded-full bg-[#0044EB] px-8 py-3 uppercase text-white '
              >
                Send
              </button>
            </div>
            <div className='flex items-center gap-5'>
              {socialLinks?.map((item, index) => {
                return (
                  <div key={index} className='rounded-full border p-2'>
                    <Link to={item.link}>
                      <img src={item.icon} alt='image' />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='relative flex justify-center'>
        <img
          className='w-4/5'
          src={footerImages.bottomShape}
          alt='banner shap'
        />
        <div className='absolute inset-y-0 flex w-9/12 items-center justify-between'>
          <div className='flex w-full justify-between '>
            <div>
              Copyright © 2024{' '}
              <Link to='/' className='text-[#0044EB]'>
                Awal Solution
              </Link>
              , All rights reserved.
            </div>
            <ul className='flex list-disc gap-8 marker:text-[#0044EB]'>
              <li>
                <Link to='#'>Terms of Up</Link>
              </li>
              <li>
                <Link to='#'>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
