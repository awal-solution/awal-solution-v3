import { useState } from 'react';
import { tabData, sectionHeading, images } from '@src/data/tech.data';
import { Tab, TabPanel } from '@src/components/ui';

export const OurTech = () => {
  const [activeTab, setActiveTab] = useState(1);

  const onTabClick = (index: any) => {
    setActiveTab(index);
  };
  return (
    <div className='relative bg-[#E3F0FF]'>
      <img
        src={images.rightAngleShape}
        alt='image'
        className='absolute bottom-0 right-0'
      />
      <div className='mx-auto max-w-screen-xl'>
        <div className='mx-auto w-[185px] bg-[url(/src/assets/images/title_bar/shape_title_under_line.svg)] bg-right-bottom bg-no-repeat pb-2 pr-4'>
          {sectionHeading.title}
        </div>
        <h1 className='py-10 text-center text-5xl font-bold'>
          We Use <span className='text-[#0044EB]'>Technologies</span>
        </h1>
        <ul className='flex justify-between rounded bg-[#CCE3FF] px-2 py-3 '>
          {tabData?.map((item: any) => {
            const isOpen = activeTab === item.id;
            return (
              <Tab
                key={item.id}
                id={item.id}
                onTabClick={onTabClick}
                className={`${
                  isOpen ? 'active' : ''
                } cursor-pointer rounded px-10 py-2 font-bold`}
              >
                {item.name}
              </Tab>
            );
          })}
        </ul>
        {tabData?.map((item: any) => {
          return (
            <TabPanel
              key={item.id}
              isOpen={activeTab === item.id}
              className='p-5'
            >
              <div className='grid grid-cols-5 gap-6'>
                {item?.data?.map((subTab: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className='flex flex-col items-center gap-5'
                    >
                      <div className='flex size-24 items-center justify-center bg-[url(/src/assets/images/shapes/shape_polygon.webp)] bg-cover'>
                        <img
                          src={subTab.icon}
                          alt='image'
                          className='max-w-10'
                        />
                      </div>
                      <div>{subTab.name}</div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          );
        })}
      </div>
    </div>
  );
};
