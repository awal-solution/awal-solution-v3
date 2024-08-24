import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { HeroSection } from '@src/components/heroSection/Herosection';
import { Env } from '@src/constants/environments';

//
import fb from '@src/assets/images/social-black-icons/facebook.svg';
import tw from '@src/assets/images/social-black-icons/twitter.svg';
import linkedin from '@src/assets/images/social-black-icons/linkedin.svg';
import insta from '@src/assets/images/social-black-icons/insta.svg';

export const TeamDetail = () => {
  const { imgUrl } = Env;
  const { state } = useLocation();
  const { slug } = useParams();
  const [data, setData] = useState<any>({});

  useEffect(() => {
    setData(state);
  }, [slug, state]);

  return (
    <>
      <HeroSection subHeading={'Members 😍 Team'} heading={'Team Member Dtails'} />
      <div className='bg-[#E3F0FF] p-3'>
        <div className='mx-auto max-w-screen-xl'>
          <div className='mt-10 grid grid-cols-3 gap-0 rounded-3xl bg-white  p-6 lg:gap-28'>
            <div className='col-span-3 rounded-3xl bg-[#E3F0FF] lg:col-span-1'>
              <img className='' src={imgUrl + data?.profile_picture} alt='Profile' />
            </div>
            <div className='col-span-3 text-black lg:col-span-2'>
              <h2 className='pt-5 text-4xl font-bold capitalize'>
                {data?.first_name + ' ' + data?.last_name}
              </h2>
              <p className='pt-7 font-bold uppercase'>
                Responsibility: <span className='font-normal'>{data?.role}</span>
              </p>
              <p className='pt-7 font-bold'>
                Experience: <span className='font-normal'>{data?.experience}</span>
              </p>
              <p className='pt-7 font-bold'>
                Email: <span className='font-normal'>{data?.email}</span>
              </p>
              <p className='pt-7 font-bold'>
                Phone: <span className='font-normal'>{data?.phone_number}</span>
              </p>
              <h2 className='pt-5 text-xl font-semibold'>Social Media</h2>
              <div className='flex gap-3 pt-3'>
                <Link to={data.facebook} className='group rounded bg-white p-2 hover:bg-blue-500'>
                  <img src={fb} alt='icon' />
                </Link>
                <Link to={data.linkedin} className='group rounded bg-white p-2 hover:bg-blue-500'>
                  <img src={linkedin} alt='icon' />
                </Link>
                <Link to={data.twitter} className='group rounded bg-white p-2 hover:bg-blue-500'>
                  <img src={tw} alt='icon' />
                </Link>
                <Link to={data.instagram} className='group rounded bg-white p-2 hover:bg-blue-500'>
                  <img src={insta} alt='icon' />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h2 className='pt-20 text-4xl font-bold'>Professional Skills</h2>
            <p className='pt-5 text-base leading-8 text-[#49515B]'>{data?.bio}</p>
          </div>
          <div className='mt-7 flex gap-5'>
            {data?.skills?.map((item: any, index: number) => {
              return (
                <div key={index} className='rounded-xl bg-white p-3'>
                  <img src={imgUrl + item.thumbnail} alt='' className='size-24' />
                  <div className='mt-3 text-center'>{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
