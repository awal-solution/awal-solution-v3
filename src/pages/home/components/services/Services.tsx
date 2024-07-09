import {
  serviceImages,
  sectionHeading,
  servicesCard,
} from '@src/data/services.data';

export const Services = () => {
  return (
    <section className='relative bg-[#E3F0FF] pb-12'>
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
        className='absolute left-0 top-1/3'
      />
      <img
        src={serviceImages.rightCircleShape}
        alt='left side circle image'
        className='absolute right-0 top-1/4'
      />
      <img
        src={serviceImages.rightAngleShape}
        alt='left side circle image'
        className='absolute bottom-0 right-0 h-[400px]'
      />
      <div className='flex justify-center pb-5 pt-24'>
        <div className='mx-auto w-[136px] bg-[url(../../../src/assets/images/title_bar/shape_title_under_line.svg)] bg-right-bottom bg-no-repeat pb-2 pr-4 text-black'>
          {sectionHeading.title}
        </div>
      </div>
      <h1 className='pb-8 text-center text-5xl font-bold text-[#020842]'>
        How We Can <span className='text-[#0044EB]'>Help</span> You
      </h1>
      <div className='mx-auto grid max-w-screen-xl grid-cols-3 gap-8'>
        {servicesCard?.map((item, index) => {
          return (
            <div
              key={index}
              className='shadow-card service_card_clip_path rounded-xl bg-white p-10'
            >
              <img src={item.icon} alt='card icon' className='pb-8' />
              <h2 className='pb-9 text-2xl text-[#020842]'>{item.title}</h2>
              <ul className='flex flex-col gap-3'>
                {item?.list?.map((subItem, index) => {
                  return (
                    <li
                      key={index}
                      className='bg-list-gradient flex items-center gap-2 rounded-md py-2'
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
