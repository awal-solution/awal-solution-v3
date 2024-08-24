import { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandMarquee from 'react-fast-marquee';
import {
  footerImages,
  footerLinks,
  newsLetter,
  socialLinks,
  footerSlider
} from '@src/data/footer/footer.data';
import { createRecordApi } from '@src/api/enpoints';

const NewLetterForm = () => {
  const initialFormValues = {
    email: ''
  };

  const [data, setData] = useState(initialFormValues);
  const [errors, setErrors] = useState<any>({ email: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ email: null });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    let formIsValid = true;
    const validationErrors: any = { email: null };

    if (!data.email) {
      validationErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!validateEmail(data.email)) {
      validationErrors.email = 'Invalid email format';
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(validationErrors);
      return;
    }

    createRecordApi(`/contacts/news-letter`, data).then((res: any) => {
      if (res?.code === 200) {
        window.showToast(res?.message, 'success');
        setData(initialFormValues);
      }
    });
  };

  return (
    <>
      <div
        className={`flex items-center rounded-full bg-[#1B2155] p-1 ${errors.email ? 'border border-red-500' : ''}`}
      >
        <div>
          <img src={newsLetter.mailIcon} alt='img' className='ml-1 size-6' />
        </div>
        <input
          type='email'
          name='email'
          value={data.email}
          onChange={handleChange}
          className='w-full bg-transparent pl-4 outline-none'
          placeholder='Enter Your Email'
        />
        <button
          type='button'
          onClick={handleSubmit}
          className='rounded-full bg-[#0044EB] px-8 py-3 uppercase text-white'
        >
          Send
        </button>
      </div>
      {errors.email && <p className='text-red-500'>{errors.email}</p>}
    </>
  );
};

export const AppFooter = () => {
  return (
    <footer className='relative bg-[#020842] bg-[url(/src/assets/images/footer/bg_pattern_3-1.svg)] bg-cover bg-center bg-no-repeat'>
      <div className='flex justify-center'>
        <img className='w-4/5' src={footerImages.topShape} alt='banner shap' />
      </div>
      <div className='mx-auto max-w-screen-xl'>
        <div className='mt-24 text-white'>
          <BrandMarquee gradient={true} gradientWidth={50} gradientColor='#020842'>
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
          <div className='col-span-2 px-2 text-white'>
            <h3 className='mb-6'>{newsLetter.title}</h3>
            <div className='pb-4'>{newsLetter.text}</div>
            <NewLetterForm />
            <div className='flex items-center justify-center gap-5 pt-4'>
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
        <img className='hidden w-4/5 lg:block' src={footerImages.bottomShape} alt='banner shap' />
        <div className='absolute inset-y-0 flex w-full items-center justify-between lg:w-9/12'>
          <div className='flex w-full flex-col items-center justify-between gap-2 bg-[#E3F0FF] py-2 lg:flex-row lg:bg-transparent'>
            <div>
              Copyright © 2024{' '}
              <Link to='/' className='text-[#0044EB]'>
                Awal Solution
              </Link>
              , All rights reserved.
            </div>
            <ul className='flex list-inside list-disc gap-8 marker:text-[#0044EB]'>
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
