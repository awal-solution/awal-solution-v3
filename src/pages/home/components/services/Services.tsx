import {
  serviceImages,
  sectionHeading,
  servicesCard,
} from '@src/data/services.data';

export const Services = () => {
  return (
    <section className='bg-[#E3F0FF] relative pb-12'>
      <div className='flex justify-end'>
        <img
          className='w-3/5'
          src={serviceImages.bannerShape}
          alt='banner shap'
        />
      </div>
      <img
        src={serviceImages.leftAngleShape}
        alt='left side banner'
        className='absolute top-0 h-[270px]'
      />
      <img
        src={serviceImages.leftCircleShape}
        alt='left side circle image'
        className='absolute top-1/3 left-0'
      />
      <img
        src={serviceImages.rightCircleShape}
        alt='left side circle image'
        className='absolute top-1/4 right-0'
      />
      <img
        src={serviceImages.rightAngleShape}
        alt='left side circle image'
        className='absolute bottom-0 right-0 h-[400px]'
      />
      <div className='flex justify-center pt-24 pb-5'>
        <div className='text-black bg-[url(../../../src/assets/images/title_bar/shape_title_under_line.svg)] bg-no-repeat bg-right-bottom pr-4 pb-2 w-[136px] mx-auto'>
          {sectionHeading.title}
        </div>
      </div>
      <h1 className='text-5xl text-center text-[#020842] font-bold pb-8'>
        How We Can <span className='text-[#0044EB]'>Help</span> You
      </h1>
      <div className='max-w-screen-xl mx-auto grid grid-cols-3 gap-8'>
        {servicesCard?.map((item, index: any) => {
          return (
            <div
              key={index}
              className='bg-white p-10 rounded-xl shadow-card service_card_clip_path'
            >
              <img src={item.icon} alt='card icon' className='pb-8' />
              <h2 className='text-[#020842] text-2xl pb-9'>{item.title}</h2>
              <ul className='flex flex-col gap-3'>
                {item?.list?.map((subItem, index) => {
                  return (
                    <li
                      key={index}
                      className='flex items-center gap-2 bg-list-gradient py-2 rounded-md'
                    >
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
                          <circle
                            cx='12'
                            cy='12'
                            r='1'
                            strokeWidth='5'
                          ></circle>
                        </g>
                      </svg>
                      <div className='text-[#49515B]'>{subItem}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
