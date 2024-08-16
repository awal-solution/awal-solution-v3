import {
  sectionHeading,
  connectImages,
  firstCardData,
  contactFormData,
} from '@src/data/connect.data';

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
          <h1 className='py-4 text-5xl font-bold text-[#020842]'>
            {firstCardData.title}
          </h1>
          <div>{firstCardData.pg}</div>
          <ul className='py-6'>
            {firstCardData.cotactDetail.map((item: any, index: number) => {
              return (
                <li key={index} className='mb-3 flex items-center gap-5'>
                  <div className='w-[12%] rounded-full bg-[#0044EB] p-2 text-white'>
                    <img
                      src={item.icon}
                      alt='icon'
                      className='size-full object-cover'
                    />
                  </div>
                  <div className='w-[88%] '>{item.text}</div>
                </li>
              );
            })}
          </ul>
          <ul>
            {firstCardData.list.map((item: any, index: number) => {
              return (
                <li
                  key={index}
                  className='relative mb-3 flex items-center gap-5'
                >
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
          <div className='grid grid-cols-2 gap-5 pt-4'>
            <div className='col-span-2 flex items-center rounded-lg border p-2 md:col-span-1'>
              <div className=''>
                <img src={contactFormData.userIcons} alt='' />
              </div>
              <input
                type='text'
                name=''
                id=''
                className='w-full px-5 py-2 outline-none'
                placeholder='Your Name'
              />
            </div>
            <div className='col-span-2 flex items-center rounded-lg border p-2 md:col-span-1'>
              <div className=''>
                <img src={contactFormData.mailIcons} alt='' />
              </div>
              <input
                type='text'
                name=''
                id=''
                className='w-full px-5 py-2 outline-none'
                placeholder='Your Email'
              />
            </div>
            <div className='col-span-2 flex items-center rounded-lg border p-2 md:col-span-1'>
              <div className=''>
                <img src={contactFormData.callIcons} alt='' />
              </div>
              <input
                type='text'
                name=''
                id=''
                className='w-full px-5 py-2 outline-none'
                placeholder='Your Phone No.'
              />
            </div>
            <div className='col-span-2 flex items-center rounded-lg border p-2 md:col-span-1'>
              <div className='text-red-500'>
                <img src={contactFormData.globalIcons} alt='' />
              </div>
              <input
                type='text'
                name=''
                id=''
                className='w-full px-5 py-2 outline-none'
                placeholder='Your company Name'
              />
            </div>
            <div className='col-span-2 flex rounded-lg border p-2 md:col-span-2'>
              <div className='mt-1.5'>
                <img src={contactFormData.commentIcons} alt='' />
              </div>
              <textarea
                className='w-full px-5 py-2 outline-none'
                placeholder='How can we help you?'
                rows={4}
              />
            </div>
          </div>
          <div className='mt-14'>
            <button className='group/btn flex items-center gap-1 rounded-full bg-[#0044EB] px-10 py-4 uppercase text-white'>
              <span className='group-hover/btn:animate-out group-hover/btn:slide-out-to-top group-hover/btn:duration-500'>
                Send Request
              </span>
              <img src={contactFormData.arrowIcons} alt='image' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
