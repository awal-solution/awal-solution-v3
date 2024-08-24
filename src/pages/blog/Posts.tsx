import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRecordsApi } from '@src/api/enpoints';
import { HeroSection } from '@src/components/heroSection/Herosection';
import { Env } from '@src/constants/environments';

const { imgUrl } = Env;

const PostsCard = ({ item }: any) => {
  return (
    <div className='rounded-2xl bg-white p-7'>
      <div className='h-[400px] overflow-hidden'>
        <img
          className='size-full overflow-hidden object-fill duration-300 ease-linear hover:scale-110'
          src={imgUrl + item?.thumbnail}
          alt='image'
        />
      </div>
      <PostMeta item={item} />
      <h3 className='pb-5 font-sans text-3xl'>
        <Link
          to={`/blog-detail/${item?.id}`}
          className='line-clamp-2 text-[#020842] hover:text-[#0044EB]'
        >
          {item?.title}
        </Link>
      </h3>
      <button className='flex items-center justify-center rounded-full bg-[#020842] px-10 py-3 text-white hover:bg-[#0044EB]'>
        <Link to={`/blog-detail/${item?.id}`}>READ MORE</Link>
        <svg xmlns='http://www.w3.org/2000/svg' width='1.5em' height='1.5em' viewBox='0 0 24 24'>
          <path
            fill='white'
            d='m5.99 16.596 8.192-8.192H7.818v-2h9.778v9.778h-2V9.818L7.403 18.01z'
          />
        </svg>
      </button>
    </div>
  );
};

const PostMeta = ({ item }: any) => (
  <div className='grid-col-1 grid py-5 lg:grid-cols-3'>
    <div className='flex items-center gap-2'>
      <svg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1.2em' viewBox='0 0 24 24'>
        <g fill='none' stroke='#0044EB' strokeWidth='1.5'>
          <circle cx='12' cy='6' r='4' />
          <path d='M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z' />
        </g>
      </svg>
      <div className='text-[#49515B]'>{item?.auther}</div>
    </div>
    <div className='flex items-center gap-2'>
      <svg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1.2em' viewBox='0 0 24 24'>
        <path
          fill='#0044EB'
          fillRule='evenodd'
          d='M4.368 14.632L3 16v-2.8A5.64 5.64 0 0 1 2 10c0-3.314 2.91-6 6.5-6 3.254 0 5.95 2.207 6.425 5.088A6.57 6.57 0 0 1 16 9c3.314 0 6 2.462 6 5.5 0 1.125-.368 2.17-1 3.041V20l-1.225-1.225A6.32 6.32 0 0 1 16 20c-2.825 0-5.194-1.79-5.831-4.2-.533.13-1.092.2-1.669.2a6.81 6.81 0 0 1-4.132-1.368M8.5 14c2.52 0 4.5-1.828 4.5-4 0-2.172-1.98-4-4.5-4S4 7.828 4 10c0 2.172 1.98 4 4.5 4m3.546 1.03C12.336 16.687 13.972 18 16 18c2.24 0 4-1.6 4-3.5S18.24 11 16 11c-.389 0-.763.048-1.117.138-.338 1.626-1.387 3.018-2.837 3.891'
        />
      </svg>
      <a className='text-[#49515B]' href='#'>
        Comments (0)
      </a>
    </div>
    <div className='flex items-center gap-2'>
      <svg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1.2em' viewBox='0 0 24 24'>
        <g
          fill='none'
          stroke='#0044EB'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        >
          <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0' />
          <path d='M12 7v5l3 3' />
        </g>
      </svg>
      <div className='text-[#49515B]'>{item?.created_at}</div>
    </div>
  </div>
);

const SearchInput = () => {
  return (
    <div className='relative flex pt-3'>
      <input className='w-full rounded-l-full bg-white p-3' type='text' placeholder='Search...' />
      <div className='flex items-center justify-center rounded-r-full bg-[#0044EB] px-3 text-white'>
        <svg xmlns='http://www.w3.org/2000/svg' width='1.5em' height='1.5em' viewBox='0 0 24 24'>
          <path
            fill='currentColor'
            d='M15.096 5.904a6.5 6.5 0 1 0-9.192 9.192a6.5 6.5 0 0 0 9.192-9.192M4.49 4.49a8.5 8.5 0 0 1 12.686 11.272l5.345 5.345l-1.414 1.414l-5.345-5.345A8.501 8.501 0 0 1 4.49 4.49'
          ></path>
        </svg>
      </div>
    </div>
  );
};

const RecentPostCard = ({ item }: any) => {
  return (
    <div className='mb-5 grid grid-cols-3 gap-5 rounded-2xl bg-white p-4 shadow-md transition-shadow hover:shadow-lg'>
      <div className='col-span-1 size-full'>
        <img
          className='size-full rounded-lg object-cover'
          src={imgUrl + item?.thumbnail}
          alt='image'
        />
      </div>
      <div className='col-span-2 flex flex-col'>
        <div className='text-sm text-gray-500'>{item?.created_at}</div>
        <Link
          to={`/blog-detail/${item?.id}`}
          className='mt-2 line-clamp-2 text-lg font-medium text-[#1A202C]'
        >
          {item?.title}
        </Link>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRecordsApi('/posts/recent-posts', { page: 1, perPage: 5 }).then((res: any) => {
      setData(res?.data);
    });
  }, []);

  return (
    <Fragment>
      <div className='text-lg font-bold uppercase text-[#020842]'>Search</div>
      <SearchInput />
      <div className='py-4 text-lg font-bold uppercase text-[#020842]'>Recent Post</div>
      <div className='w-full'>
        {data?.map((item: any, index) => {
          return (
            <Fragment key={index}>
              <RecentPostCard item={item} />
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRecordsApi('/posts', { page: 1, perPage: 5 }).then((res: any) => {
      console.log(res);
      setData(res?.data?.data);
    });
  }, []);

  return (
    <Fragment>
      <HeroSection heading='Blog' subHeading='Awal Solution 😍' />
      <div className='bg-[#E3F0FF]'>
        <div className='mx-auto grid max-w-screen-xl grid-cols-3 gap-5 px-5 pt-20'>
          <div className='col-span-3 lg:col-span-2'>
            {data?.map((item: any, index: number) => {
              return (
                <div key={index} className='mb-5'>
                  <PostsCard item={item} />
                </div>
              );
            })}
          </div>
          <div className='col-span-3 lg:col-span-1'>
            <Sidebar />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
