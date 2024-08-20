import { HeroSection } from '@src/components/heroSection/Herosection';

export const Services = () => {
  return (
    <>
      <HeroSection subHeading='Our Main Services 😍' heading='Our Services' />
      <div className=''>
        <section className='bg-[#E3F0FF] px-2 py-28 lg:px-8'>
          <div className='mx-auto flex max-w-screen-xl flex-col lg:flex-row'>
            <div className='mb-8 lg:mb-0 lg:mr-28 lg:pt-10'>
              <div className='pb-5 text-base font-semibold text-[#4F5761]'>
                We Are
                <span className='ml-1  rounded-md bg-[#F44380] px-[6px] py-[2px] pb-1 text-center text-white'>
                  IT Guidance 🙂
                </span>
              </div>
              <h2 className='pb-7 text-[40px] font-bold leading-[50px] tracking-[-1px] text-[#020842]'>
                Tailored IT Solutions for Your Success
              </h2>
              <p className='pb-8 text-[18px] font-medium leading-[30px] text-[#020842]'>
                We understand that every business is unique, with its own set of
                challenges, goals, and aspirations. Thats why we offer tailored
                IT solutions designed.
              </p>
              <button className='rounded-full border-none bg-[#0044EB] px-7 py-4 text-lg font-bold tracking-[1px] text-white '>
                Talk To An Expert ↗
              </button>
            </div>
            <div>
              <img
                src='https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/06/service_image_8.webp'
                alt='Services'
                className='w-full lg:w-auto'
              />
            </div>
          </div>
        </section>
        <section className='bg-white px-2 py-28 lg:px-8'>
          <div className='mx-auto max-w-screen-xl'>
            <div className='pb-5 text-center text-base font-semibold text-[#4F5761]'>
              We Are
              <span className='ml-1  rounded-md bg-[#F44380] px-[6px] py-[2px] pb-1 text-center text-white'>
                IT Guidance 🙂
              </span>
            </div>
            <h2 className='pb-7 text-center text-[40px] font-bold leading-[50px] tracking-[-1px] text-[#020842]'>
              Featured Services
            </h2>

            <div className=' flex flex-col gap-7'>
              <div className='flex flex-col gap-7 lg:flex-row'>
                <div className='group relative flex flex-col overflow-hidden rounded-[20px] transition-all duration-300 ease-linear hover:scale-[0.98]'>
                  <img
                    src='https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/05/service_image_1.webp'
                    alt='Services'
                    className='w-full object-contain transition-transform duration-300 ease-linear group-hover:scale-[1.11] '
                  />
                  <div className='absolute bottom-0 flex w-full flex-col gap-5 p-5 lg:gap-10 lg:p-10'>
                    <h2
                      className="relative max-w-fit text-[32px] font-bold  leading-[40px] tracking-[-1px] 
                  text-white  transition-all duration-200 after:absolute after:bottom-0  after:left-0 
                  after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full"
                    >
                      IT Management Services
                    </h2>
                    <div className='flex w-full flex-col-reverse gap-5 lg:flex-row lg:items-center lg:gap-20'>
                      <a
                        href='#'
                        className='flex size-12 -rotate-45 items-center justify-center rounded-full border-[0.5px] border-white/25 bg-white p-4 text-2xl text-black duration-300 hover:bg-[#0145EB] hover:text-white'
                      >
                        <span>➔</span>
                      </a>
                      <ul className='flex gap-2'>
                        <li>
                          <button className='rounded-md border-[0.5px] border-white/25 bg-white/10 px-3 py-1 text-white backdrop-blur transition-all duration-500 ease-linear hover:bg-white hover:text-black'>
                            Consultation
                          </button>
                        </li>
                        <li>
                          <button className='rounded-md border-[0.5px] border-white/25 bg-white/10 px-3 py-1 text-white backdrop-blur transition-all duration-500 ease-linear hover:bg-white hover:text-black'>
                            Strategy
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='group relative flex flex-col overflow-hidden rounded-[20px] transition-all duration-300 ease-linear hover:scale-[0.98]'>
                  <img
                    src='https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/05/service_image_2.webp'
                    alt='Services'
                    className='w-full object-contain transition-transform duration-300 ease-linear group-hover:scale-[1.11] '
                  />

                  <div className='absolute bottom-0 flex w-full flex-col gap-5 p-5 lg:gap-10 lg:p-10'>
                    <h2
                      className="relative max-w-fit text-[32px] font-bold  leading-[40px] tracking-[-1px] 
                  text-white  transition-all duration-200 after:absolute after:bottom-0  after:left-0 
                after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full"
                    >
                      Data Tracking and Security
                    </h2>
                    <div className='flex w-full flex-col-reverse gap-5 lg:flex-row lg:items-center lg:gap-20'>
                      <a
                        href='#'
                        className='flex size-12 -rotate-45 items-center justify-center rounded-full border-[0.5px] border-white/25 bg-white p-4 text-2xl text-black duration-300 hover:bg-[#0145EB] hover:text-white'
                      >
                        <span>➔</span>
                      </a>
                      <ul className='flex gap-2'>
                        <li>
                          <button className='rounded-md border-[0.5px] border-white/25 bg-white/10 px-3 py-1 text-white backdrop-blur transition-all duration-500 ease-linear hover:bg-white hover:text-black'>
                            Management
                          </button>
                        </li>
                        <li>
                          <button className='rounded-md border-[0.5px] border-white/25 bg-white/10 px-3 py-1 text-white backdrop-blur transition-all duration-500 ease-linear hover:bg-white hover:text-black'>
                            Transfer
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='group relative flex flex-col overflow-hidden rounded-[20px] transition-all duration-300 ease-linear hover:scale-[0.98]'>
                  <img
                    src='https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/05/service_image_3.webp'
                    alt='Services'
                    className='w-full transition-transform duration-300 ease-linear group-hover:scale-[1.11] '
                  />
                  <div className='lg:gap-10s absolute bottom-0 flex w-full flex-col gap-5 p-5 md:p-10'>
                    <h2
                      className="relative max-w-fit text-[32px] font-bold  leading-[40px] tracking-[-1px] 
                  text-white  transition-all duration-200 after:absolute after:bottom-0  after:left-0 
                after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full"
                    >
                      Website Development
                    </h2>
                    <div className='flex w-full flex-col-reverse  gap-5 lg:flex-row lg:items-center lg:gap-10'>
                      <a
                        href='#'
                        className='flex size-12 -rotate-45 items-center justify-center rounded-full border-[0.5px] border-white/25 bg-white p-4 text-2xl text-black duration-300 hover:bg-[#F3A338] hover:text-white'
                      >
                        <span>➔</span>
                      </a>
                      <ul className='flex gap-2'>
                        <li>
                          <button className='rounded-md border-[0.5px] border-white/25 bg-white/10 px-3 py-1 text-white backdrop-blur transition-all duration-500 ease-linear hover:bg-white hover:text-black'>
                            Strategy
                          </button>
                        </li>
                        <li>
                          <button className='rounded-md border-[0.5px] border-white/25 bg-white/10 px-3 py-1 text-white backdrop-blur transition-all duration-500 ease-linear hover:bg-white hover:text-black'>
                            Transfer
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='group relative flex flex-col overflow-hidden rounded-[20px] transition-all duration-300 ease-linear hover:scale-[0.98]'>
                  <img
                    src='https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/05/service_image_4.webp'
                    alt='Services'
                    className='w-full transition-transform duration-300 ease-linear group-hover:scale-[1.11] '
                  />
                  <div className='lg:gap-10s absolute bottom-0 flex w-full flex-col gap-5 p-5 md:p-10'>
                    <h2
                      className="relative max-w-fit text-[32px] font-bold  leading-[40px] tracking-[-1px] 
                  text-white  transition-all duration-200 after:absolute after:bottom-0  after:left-0 
                after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full"
                    >
                      Modern Technology Solution
                    </h2>
                    <div className='flex w-full flex-col-reverse  gap-5 lg:flex-row lg:items-center lg:gap-10'>
                      <a
                        href='#'
                        className='flex size-12 -rotate-45 items-center justify-center rounded-full border-[0.5px] border-white/25 bg-white p-4 text-2xl text-black duration-300 hover:bg-[#F3A338] hover:text-white'
                      >
                        <span>➔</span>
                      </a>
                      <ul className='flex gap-2'>
                        <li>
                          <button className='rounded-md border-[0.5px] border-white/25 bg-white/10 px-3 py-1 text-white backdrop-blur transition-all duration-500 ease-linear hover:bg-white hover:text-black'>
                            Consultation
                          </button>
                        </li>
                        <li>
                          <button className='rounded-md border-[0.5px] border-white/25 bg-white/10 px-3 py-1 text-white backdrop-blur transition-all duration-500 ease-linear hover:bg-white hover:text-black'>
                            solution
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='group relative flex flex-col overflow-hidden rounded-[20px] transition-all duration-300 ease-linear hover:scale-[0.98]'>
                  <img
                    src='https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/05/service_image_5.webp'
                    alt='Services'
                    className='w-full transition-transform duration-300 ease-linear group-hover:scale-[1.11]'
                  />
                  <div className='lg:gap-10s absolute bottom-0 flex w-full flex-col gap-5 p-5 md:p-10'>
                    <h2
                      className="relative max-w-fit text-[32px] font-bold  leading-[40px] tracking-[-1px] 
                text-white  transition-all duration-200 after:absolute after:bottom-0  after:left-0 
              after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full"
                    >
                      UI/UX Design Services
                    </h2>
                    <div className='flex w-full flex-col-reverse  gap-5 lg:flex-row lg:items-center lg:gap-10'>
                      <a
                        href='#'
                        className='flex size-12 -rotate-45 items-center justify-center rounded-full border-[0.5px] border-white/25 bg-white p-4 text-2xl text-black duration-300 hover:bg-[#F3A338] hover:text-white'
                      >
                        <span>➔</span>
                      </a>
                      <ul className='flex gap-2'>
                        <li>
                          <button className='rounded-md border-[0.5px] border-white/25 bg-white/10 px-3 py-1 text-white backdrop-blur transition-all duration-500 ease-linear hover:bg-white hover:text-black'>
                            Mobile App
                          </button>
                        </li>
                        <li>
                          <button className='rounded-md border-[0.5px] border-white/25 bg-white/10 px-3 py-1 text-white backdrop-blur transition-all duration-500 ease-linear hover:bg-white hover:text-black'>
                            solution
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-[#E3F0FF] px-2 py-28 lg:px-8'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-7 lg:grid-cols-2 '>
            <div className=''>
              <img
                src='https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/06/about_image_5-1024x929.webp'
                alt='Services'
                className='w-full rounded-xl lg:w-auto'
              />
            </div>
            <div className='flex flex-col gap-6'>
              <div>
                <span className='rounded-md bg-[#F44380]  px-[6px] pb-0.5 text-white'>
                  Better
                </span>
                <span className='ml-1 text-base font-semibold text-[#4F5761]'>
                  Why Us
                </span>
              </div>
              <h2 className='w-[70%] text-[40px] font-bold leading-[50px] tracking-[-1px] text-[#020842]'>
                Why Our Services are Better Than Others?
              </h2>
              <div className='grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-2'>
                <div className='flex items-center space-x-4 rounded-lg bg-white p-4 py-6 text-base font-semibold text-[#020842]  duration-200 ease-linear hover:-translate-y-1 hover:text-[#0044EB]   hover:shadow-2xl'>
                  <div className='icon flex size-10 items-center justify-center rounded-md bg-[#E5ECFD] p-1'></div>
                  <h4>Quality Comes First</h4>
                </div>

                <div className='font-s flex items-center  space-x-4 rounded-lg bg-white p-4 py-6 text-base font-semibold  text-[#020842] duration-200 ease-linear hover:-translate-y-1 hover:text-[#0044EB] hover:shadow-2xl'>
                  <div className='icon flex size-10 items-center justify-center rounded-md bg-[#E5ECFD] p-1'></div>
                  <h4>Flexible Cooperation</h4>
                </div>

                <div className='font-s flex items-center space-x-4 rounded-lg bg-white p-4 py-6 text-base font-semibold  text-[#020842] duration-200 ease-linear hover:-translate-y-1 hover:text-[#0044EB] hover:shadow-2xl'>
                  <div className='icon flex size-10 items-center justify-center rounded-md bg-[#E5ECFD] p-1'></div>
                  <h4>On-time Delivery</h4>
                </div>

                <div className='font-s flex items-center space-x-4 rounded-lg bg-white p-4 py-6 text-base font-semibold  text-[#020842] duration-200 ease-linear hover:-translate-y-1 hover:text-[#0044EB] hover:shadow-2xl'>
                  <div className='icon flex size-10 items-center justify-center rounded-md bg-[#E5ECFD] p-1'></div>
                  <h4>Transparent Costs</h4>
                </div>

                <div className='font-s flex items-center space-x-4 rounded-lg bg-white p-4 py-6 text-base font-semibold  text-[#020842] duration-200 ease-linear hover:-translate-y-1 hover:text-[#0044EB] hover:shadow-2xl'>
                  <div className='icon flex size-10 items-center justify-center rounded-md bg-[#E5ECFD] p-1'></div>
                  <h4>Qualified Developers</h4>
                </div>

                <div className='font-s flex items-center space-x-4 rounded-lg bg-white p-4 py-6 text-base font-semibold  text-[#020842] duration-200 ease-linear hover:-translate-y-1 hover:text-[#0044EB] hover:shadow-2xl'>
                  <div className='icon flex size-10 items-center justify-center rounded-md bg-[#E5ECFD] p-1'></div>
                  <h4> Quick Scale-up</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
