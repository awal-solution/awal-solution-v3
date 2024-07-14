import { Fragment, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import {
  workProccesImages,
  workProcessData,
  sectionHeading,
} from '@src/data/work_process';
import { AccordionTitle, AccordionPanel } from '@src/components/ui';

export const WorkProcess = () => {
  const [activeId, setActiveId] = useState<number>(0);

  const handleToggle = (id: number) => {
    setActiveId((prevId) => (prevId === id ? 0 : id));
  };

  return (
    <div className='relative w-full bg-[#E3F0FF]'>
      <div className='flex justify-center'>
        <img
          src={workProccesImages.bannerShape}
          alt='about banner'
          className='w-1/2'
        />
      </div>
      <img
        src={workProccesImages.leftAngleShape}
        alt='image'
        className='absolute top-0'
      />
      <div className='mx-auto max-w-screen-xl py-36'>
        <div className='flex items-center gap-10'>
          <div className='w-1/2'>
            <div>{sectionHeading.title}</div>
            <h1 className='py-8 text-5xl font-bold'>
              Our <span className='text-[#0044EB]'>Approach</span>
            </h1>
            {workProcessData?.map((item: any) => {
              const isOpen = activeId === item.id;
              return (
                <Fragment key={item.id}>
                  <AccordionTitle
                    id={item.id}
                    handleToggle={handleToggle}
                    className='flex justify-between border-b border-[#CCE3FF] py-4 text-xl font-bold hover:text-[#0044EB]'
                  >
                    {item.no}. {item.title}
                    {isOpen ? <Minus /> : <Plus />}
                  </AccordionTitle>
                  <AccordionPanel
                    isOpen={activeId === item.id}
                    className='bg-[#CCE3FF] p-5'
                  >
                    {item.des}
                  </AccordionPanel>
                </Fragment>
              );
            })}
          </div>
          <div className='flex w-1/2 flex-col items-center justify-center'>
            {workProcessData?.map((item: any) => {
              return (
                <button
                  onClick={() => handleToggle(item.id)}
                  key={item.id}
                  className={`-mb-5 h-36 w-[450px] rounded-[100%] text-2xl ${
                    activeId === item.id
                      ? 'z-30 bg-[#0044EB] text-white'
                      : 'z-10 border border-[#020842] bg-transparent text-[#020842]'
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
