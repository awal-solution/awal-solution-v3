import { Fragment, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import {
  needSupportImages,
  sectionHeading,
  needSupportData,
} from '@src/data/need_support';
import { AccordionTitle, AccordionPanel } from '@src/components/ui';

export const NeedSupport = () => {
  const [activeId, setActiveId] = useState<number>(0);

  const handleToggle = (id: number) => {
    setActiveId((prevId) => (prevId === id ? 0 : id));
  };

  return (
    <section className='relative bg-white pb-12'>
      <div className='flex justify-start'>
        <img
          className='w-4/5'
          src={needSupportImages.upperShape}
          alt='banner shap'
        />
      </div>
      <img
        src={needSupportImages.rightShape}
        alt='banner'
        className='absolute right-0 top-0 h-[270px]'
      />
      <div className='flex justify-center pb-5 pt-24'>
        <div className='mx-auto w-[136px] bg-[url(/src/assets/images/title_bar/shape_title_under_line.svg)] bg-right-bottom bg-no-repeat pb-2 pr-4 text-black'>
          {sectionHeading.title}
        </div>
      </div>
      <h1 className='pb-12 text-center text-5xl font-bold text-[#020842]'>
        Need a <span className='text-[#0044EB]'>Support?</span>
      </h1>
      <div className='mx-auto max-w-screen-xl'>
        {needSupportData?.map((item: any) => {
          const isOpen = activeId === item.id;
          return (
            <Fragment key={item.id}>
              <AccordionTitle
                id={item.id}
                handleToggle={handleToggle}
                className='flex items-center justify-between border-b border-[#CCE3FF] py-7 text-2xl hover:text-[#0044EB]'
              >
                {item.title}
                {isOpen ? (
                  <div className='rounded border border-gray-300 bg-[#0044EB] p-1 text-white'>
                    <Minus />
                  </div>
                ) : (
                  <div className='rounded border border-gray-300 p-1'>
                    <Plus />
                  </div>
                )}
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
    </section>
  );
};
