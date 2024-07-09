import { Link } from 'react-router-dom';
import { caseData, sectionHeading } from '@src/data/caseStudy.data';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export const CaseStudy = () => {
  return (
    <section className='bg-[#020842] pt-10'>
      <div className='bg-[url(../../../src/assets/images/title_bar/shape_title_under_line.svg)] bg-no-repeat bg-right-bottom pr-4 pb-2 w-[136px] mx-auto'>
        {sectionHeading.title}
      </div>
      <h1 className='text-5xl text-center text-white font-bold py-8'>
        Our latest <span className='text-[#0044EB]'>Case</span> Studies
      </h1>
      <div
        className='max-w-screen-xl mx-auto relative '
        style={{ width: '100%', height: '900px' }}
      >
        <Parallax pages={1}>
          {caseData?.map((item, index) => {
            return (
              <ParallaxLayer
                sticky={{ start: item.start, end: item.end }}
                key={index}
              >
                <div className='grid grid-cols-3'>
                  <div className='bg-white col-span-2 py-12 pr-36 pl-20 rounded-l'>
                    <h3 className='text-[#49515B] text-base'>
                      {item.subtitle}
                    </h3>
                    <h1 className='text-black text-4xl py-4'>{item.title}</h1>
                    <p className='text-[#49515B] mb-5'>{item.des}</p>
                    <div className='flex justify-between pb-10'>
                      <div>
                        <span className='text-black font-bold'>Industry: </span>
                        <span className='text-[#49515B]'>{item.industry}</span>
                      </div>
                      <div>
                        <span className='text-black font-bold'>Country: </span>
                        <span className='text-[#49515B]'>{item.country}</span>
                      </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                      <span className='text-black font-bold whitespace-nowrap'>
                        Core Technologies:
                      </span>
                      <div className='flex gap-3 items-center'>
                        {item.tech?.map((subitem, index) => {
                          return (
                            <div className='bg-white inline-flex p-4 shadow-icon rounded-full'>
                              <img
                                src={subitem}
                                alt='tech logo'
                                key={index}
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
                      className='h-full w-full object-cover rounded-e'
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
