import { Link, useLocation } from 'react-router-dom';

export const TeamDetail = () => {
  const { state } = useLocation();

  return (
    <div className='bg-[#E3F0FF] p-3'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='mt-32 grid grid-cols-3 gap-0 rounded-3xl bg-white  p-6 lg:gap-28'>
          <div className='col-span-3 rounded-3xl bg-[#E3F0FF] lg:col-span-1'>
            <img className='' src={state?.profile_picture} alt='Profile' />
          </div>
          <div className='col-span-3 lg:col-span-2'>
            <h2 className='pt-5 text-4xl font-bold text-black'>
              {state?.first_name + ' ' + state?.last_name}
            </h2>
            <p className='pt-7 font-bold text-black'>
              Responsibility: <span className='font-normal'>{state?.role}</span>
            </p>
            <p className='pt-7 font-bold text-black'>
              Experience:{' '}
              <span className='font-normal'>{state?.experience}</span>
            </p>
            <p className='pt-7 font-bold text-black'>
              Email: <span className='font-normal'>{state?.email}</span>
            </p>
            <p className='pt-7 font-bold text-black'>
              Phone: <span className='font-normal'>{state?.phone_number}</span>
            </p>
            <h2 className='pt-5 text-xl font-semibold text-black'>
              Social Media
            </h2>
            <div className='flex  gap-3 pt-3'>
              {state?.social_links?.map((item: any, index: any) => {
                return (
                  <Link
                    key={index}
                    to={item.link}
                    className='group rounded border border-gray-500 bg-white p-1 hover:bg-[#0044EB]'
                  >
                    <img src={item.icon} alt='icon' />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <h2 className='pt-20 text-4xl font-bold'>Professional Skills</h2>
          <p className='pt-5 text-base leading-8 text-[#49515B]'>
            {state?.bio}
          </p>
        </div>
      </div>
    </div>
  );
};
