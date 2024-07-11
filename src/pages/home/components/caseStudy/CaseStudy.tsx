import { Link } from 'react-router-dom';
import { caseData, sectionHeading } from '@src/data/caseStudy.data';
import {  Parallax, ParallaxLayer, } from '@react-spring/parallax';

export const CaseStudy = () => {
  return (
    <section className='bg-[#020842] pt-10'>
      <div className='mx-auto w-[136px] bg-[url(../../../src/assets/images/title_bar/shape_title_under_line.svg)] bg-right-bottom bg-no-repeat pb-2 pr-4 text-white'>
        {sectionHeading.title}
      </div>
      <h1 className='py-8 text-center text-5xl font-bold text-white'>
        Our latest <span className='text-[#0044EB]'>Case</span> Studies
      </h1>
      <div
        className='relative'
        style={{ width: '100%',  height: '900px' }}
      >
        <Parallax pages={1}>
          {caseData?.map((item, index) => {
            return (
              <ParallaxLayer
                sticky={{ start: item.start, end: item.end }}
                key={index}
                className='mx-auto max-w-screen-xl'
              >
                <div className='grid grid-cols-3'>
                  <div className='col-span-2 rounded-l bg-white py-12 pl-20 pr-36'>
                    <h3 className='text-base text-[#49515B]'>
                      {item.subtitle}
                    </h3>
                    <h1 className='py-4 text-4xl text-black'>{item.title}</h1>
                    <p className='mb-5 text-[#49515B]'>{item.des}</p>
                    <div className='flex justify-between pb-10'>
                      <div>
                        <span className='font-bold text-black'>Industry: </span>
                        <span className='text-[#49515B]'>{item.industry}</span>
                      </div>
                      <div>
                        <span className='font-bold text-black'>Country: </span>
                        <span className='text-[#49515B]'>{item.country}</span>
                      </div>
                    </div>
                    <div className='flex items-center gap-5'>
                      <span className='whitespace-nowrap font-bold text-black'>
                        Core Technologies:
                      </span>
                      <div className='flex items-center gap-3'>
                        {item.tech?.map((subitem, index) => {
                          return (
                            <div className='inline-flex rounded-full bg-white p-4 shadow-icon' key={index}>
                              <img
                                src={subitem}
                                alt='tech logo'
                                height={40}
                                width={40}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <Link to={item.btnLink}>{item.btnText}</Link>
                  </div>
                  <div className='h-[450px] w-full '>
                    <img
                      src={item.image}
                      alt='image'
                      className='size-full rounded-e object-cover'
                    />
                  </div>
                </div>
              </ParallaxLayer>
            );
          })}
        </Parallax>
      </div>
    </section>
  );
};
