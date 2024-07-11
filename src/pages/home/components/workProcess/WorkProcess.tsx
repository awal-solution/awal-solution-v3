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
        <div>{sectionHeading.title}</div>
        <h1 className='py-8 text-5xl font-bold'>
          Our <span className='text-[#0044EB]'>Approach</span>
        </h1>
        {workProcessData?.map((item) => {
          const isOpen = activeId === item.id;
          return (
            <Fragment key={item.id}>
              <AccordionTitle
                id={item.id}
                handleToggle={handleToggle}
                className='grid grid-cols-2'
              >
                <div className='flex justify-between border-b border-[#CCE3FF] py-4 text-xl'>
                  {item.no}. {item.title}
                  {isOpen ? <Minus /> : <Plus />}
                </div>
                <div className='bg-slate-400'>{item.title}</div>
              </AccordionTitle>
              <AccordionPanel
                isOpen={activeId === item.id}
                className='w-1/2 bg-[#CCE3FF] p-5'
              >
                {item.des}
              </AccordionPanel>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
