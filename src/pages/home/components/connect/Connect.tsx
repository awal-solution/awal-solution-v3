import {
  sectionHeading,
  connectImages,
  firstCardData,
  contactFormData
} from '@src/data/home/connect.data';
import { ContactForm } from '@src/pages/home/components/connect/ContactForm';

export const Connect = () => {
  return (
    <section className='relative bg-[#E3F0FF] pb-12'>
      <div className='flex justify-center'>
        <img className='w-4/5' src={connectImages.topShape} alt='banner shap' />
      </div>
      <img
        src={connectImages.leftShape}
        alt='banner'
        className='absolute left-0 top-[20%] z-10 h-[500px]'
      />
      <img
        src={connectImages.rightShape}
        alt='banner'
        className='absolute right-0 top-[40%] z-10'
      />

      <div className='relative z-20 mx-auto grid max-w-screen-xl grid-cols-3 gap-5 px-2 py-24'>
        <div className='col-span-3 rounded-lg bg-white p-10 shadow-lg md:col-span-1'>
          <div className='w-[136px] bg-[url(/src/assets/images/title_bar/shape_title_under_line.svg)] bg-right-bottom bg-no-repeat pb-2 pr-4 text-black'>
            {sectionHeading.title}
          </div>
          <h1 className='py-4 text-5xl font-bold text-[#020842]'>{firstCardData.title}</h1>
          <div>{firstCardData.pg}</div>
          <ul className='py-6'>
            {firstCardData.cotactDetail.map((item: any, index: number) => {
              return (
                <li key={index} className='mb-3 flex items-center gap-5'>
                  <div className='w-[12%] rounded-full bg-[#0044EB] p-2 text-white'>
                    <img src={item.icon} alt='icon' className='size-full object-cover' />
                  </div>
                  <div className='w-[88%] '>{item.text}</div>
                </li>
              );
            })}
          </ul>
          <ul>
            {firstCardData.list.map((item: any, index: number) => {
              return (
                <li key={index} className='relative mb-3 flex items-center gap-5'>
                  <div className='size-10 rounded-full border border-[#0044EB] p-2'>
                    0{index + 1}
                  </div>
                  <div
                    className={`absolute bottom-[-7px] left-[13px] w-[12px] rotate-90 border border-[#0044EB] ${
                      index >= 3 ? 'hidden' : ''
                    }`}
                  ></div>
                  <div>{item}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='col-span-3 rounded-lg bg-white p-10 shadow-lg md:col-span-2'>
          <div className='flex gap-2'>
            <img src={contactFormData.envelop} alt='image' className='size-5' />
            <div>{contactFormData.subTitle}</div>
          </div>
          <h1 className='py-2 text-4xl'>{contactFormData.title}</h1>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
