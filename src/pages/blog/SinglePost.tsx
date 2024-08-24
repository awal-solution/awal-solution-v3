import { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { createRecordApi, getRecordApi, getRecordsApi } from '@src/api/enpoints';
import { Env } from '@src/constants/environments';
import { HeroSection } from '@src/components/heroSection/Herosection';

const { imgUrl } = Env;

const PostMeta = ({ item }: any) => {
  return (
    <div className='grid grid-cols-1 gap-5 py-3 lg:grid-cols-3'>
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
        <div className='text-[#49515B]'>Comments (0)</div>
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
};

const PostTags = ({ tag }: any) => {
  return (
    <Fragment>
      {tag && (
        <Link to='#' className='rounded bg-white px-2 py-1'>
          {tag}
        </Link>
      )}
    </Fragment>
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

const Sidebar = ({ tags }: any) => {
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
      <div className='py-4 text-lg font-bold uppercase text-[#020842]'>Tags</div>
      <div className='flex w-full flex-wrap gap-3'>
        {tags?.map((item: any, index: number) => {
          return (
            <Fragment key={index}>
              <PostTags tag={item?.title} />
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

const CommentForm = () => {
  const initialFormValues = {
    name: '',
    email: '',
    website: '',
    comment: ''
  };

  const [data, setData] = useState(initialFormValues);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    let formIsValid = true;
    const validationErrors = { name: '', email: '', comment: '' };

    if (!data.name) {
      validationErrors.name = 'Name is required';
      formIsValid = false;
    }

    if (!data.email) {
      validationErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!validateEmail(data.email)) {
      validationErrors.email = 'Invalid email format';
      formIsValid = false;
    }

    if (!data.comment) {
      validationErrors.comment = 'Comment is required';
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(validationErrors);
      return;
    }

    createRecordApi(`/posts/comment/${1}`, data).then((res: any) => {
      if (res?.code === 200) {
        window.showToast(res?.message, 'success');
        setData(initialFormValues);
      }
    });
  };

  return (
    <div className='py-14'>
      <h2 className='mb-8 font-serif text-3xl font-bold text-[#020842]'>Leave A Comment</h2>

      <div className='grid grid-cols-2 gap-5'>
        <div className='w-full'>
          <input
            className={`w-full rounded-lg p-4 ${errors.name && 'border border-red-500'}`}
            type='text'
            name='name'
            placeholder='Full Name'
            value={data.name}
            onChange={handleChange}
          />
          {errors.name && <p className='text-red-500'>{errors.name}</p>}
        </div>
        <div className='w-full'>
          <input
            className={`w-full rounded-lg p-4 ${errors.email && 'border border-red-500'}`}
            type='email'
            name='email'
            placeholder='Email'
            value={data.email}
            onChange={handleChange}
          />
          {errors.email && <p className='text-red-500'>{errors.email}</p>}
        </div>
      </div>

      <input
        className='mt-4 w-full rounded-lg p-4'
        type='text'
        name='website'
        placeholder='Website (Optional)'
        value={data.website}
        onChange={handleChange}
      />

      <div className='w-full'>
        <textarea
          className={`mt-4 w-full rounded-lg p-4 ${errors.comment && 'border border-red-500'}`}
          name='comment'
          placeholder='Your Message'
          rows={8}
          value={data.comment}
          onChange={handleChange}
        />
        {errors.comment && <p className='text-red-500'>{errors.comment}</p>}
      </div>

      <button
        className='mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white'
        type='button'
        onClick={handleSubmit}
      >
        Post Comment
      </button>
    </div>
  );
};

const CommentsList = ({ comments }: any) => {
  return (
    <Fragment>
      {comments?.map((item: any, index: number) => {
        return (
          <Fragment key={index}>
            <div className='mb-3 grid grid-cols-12 gap-4 rounded-lg bg-[#cce0f6] p-3'>
              <div className='col-span-12 flex justify-between gap-3 rounded  px-3'>
                <div className='size-16'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='2em'
                    height='2em'
                    viewBox='0 0 15 15'
                    className='size-full object-cover text-[#1C1464]'
                  >
                    <path
                      fill='currentColor'
                      d='M3 13v.5h1V13zm8 0v.5h1V13zm-7 0v-.5H3v.5zm2.5-3h2V9h-2zm4.5 2.5v.5h1v-.5zM8.5 10a2.5 2.5 0 0 1 2.5 2.5h1A3.5 3.5 0 0 0 8.5 9zM4 12.5A2.5 2.5 0 0 1 6.5 10V9A3.5 3.5 0 0 0 3 12.5zM7.5 3A2.5 2.5 0 0 0 5 5.5h1A1.5 1.5 0 0 1 7.5 4zM10 5.5A2.5 2.5 0 0 0 7.5 3v1A1.5 1.5 0 0 1 9 5.5zM7.5 8A2.5 2.5 0 0 0 10 5.5H9A1.5 1.5 0 0 1 7.5 7zm0-1A1.5 1.5 0 0 1 6 5.5H5A2.5 2.5 0 0 0 7.5 8zm0 7A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1z'
                    ></path>
                  </svg>
                </div>
                <div>
                  <div>{item?.name}</div>
                  <div className='mb-2'>{item?.created_at}</div>
                </div>
              </div>
              <div className='col-span-12 px-3'>{item?.comment}</div>
            </div>
            {item?.replies?.map((item: any, index: number) => {
              return (
                <div
                  className='mb-3 ml-16 grid grid-cols-12 gap-4 rounded-lg bg-[#cce0f6] p-3'
                  key={index}
                >
                  <div className='col-span-12 flex justify-between gap-3 rounded  px-3'>
                    <div className='size-16'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='2em'
                        height='2em'
                        viewBox='0 0 15 15'
                        className='size-full object-cover text-[#1C1464]'
                      >
                        <path
                          fill='currentColor'
                          d='M3 13v.5h1V13zm8 0v.5h1V13zm-7 0v-.5H3v.5zm2.5-3h2V9h-2zm4.5 2.5v.5h1v-.5zM8.5 10a2.5 2.5 0 0 1 2.5 2.5h1A3.5 3.5 0 0 0 8.5 9zM4 12.5A2.5 2.5 0 0 1 6.5 10V9A3.5 3.5 0 0 0 3 12.5zM7.5 3A2.5 2.5 0 0 0 5 5.5h1A1.5 1.5 0 0 1 7.5 4zM10 5.5A2.5 2.5 0 0 0 7.5 3v1A1.5 1.5 0 0 1 9 5.5zM7.5 8A2.5 2.5 0 0 0 10 5.5H9A1.5 1.5 0 0 1 7.5 7zm0-1A1.5 1.5 0 0 1 6 5.5H5A2.5 2.5 0 0 0 7.5 8zm0 7A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1z'
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div>{item?.name}</div>
                      <div className='mb-2'>{item?.created_at}</div>
                    </div>
                  </div>
                  <div className='col-span-12 px-3'>{item?.comment}</div>
                </div>
              );
            })}
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export const SinglePost = () => {
  const { imgUrl } = Env;
  const { postId } = useParams();
  const [data, setData] = useState<any>({});

  useEffect(() => {
    getRecordApi(`/posts/${postId}`).then((res: any) => {
      setData(res?.data);
    });
  }, [postId]);

  return (
    <Fragment>
      <HeroSection heading={data?.title} subHeading='Post by Awal Solution 😍' />
      <div className='bg-[#E3F0FF] py-16'>
        <div className='mx-auto max-w-screen-xl px-5'>
          <div className='grid grid-cols-3 gap-5'>
            <div className='col-span-3 lg:col-span-2'>
              <div className='h-[400px] w-full rounded-lg'>
                <img
                  src={imgUrl + data?.thumbnail}
                  alt='image'
                  className='size-full rounded-lg object-cover'
                />
              </div>
              <PostMeta item={data} />
              <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
            </div>
            <div className='col-span-3 lg:col-span-1'>
              <Sidebar tags={data?.post_tags} />
            </div>
          </div>
          <CommentForm />
          <CommentsList comments={data?.post_comments} />
        </div>
      </div>
    </Fragment>
  );
};
