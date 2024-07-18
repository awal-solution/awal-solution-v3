import { useState } from 'react';
import { tabData } from '@src/data/tech.data';
import { Tab, TabPanel } from '@src/components/ui';

export const OurTech = () => {
  const [activeTab, setActiveTab] = useState(1);

  const onTabClick = (index: any) => {
    setActiveTab(index);
  };
  return (
    <>
      <ul className='flex gap-10 bg-[#CCE3FF] px-2 py-3'>
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
            <div className='grid grid-cols-5'>
              {item?.data?.map((subTab: any, index: any) => {
                return (
                  <img
                    src={subTab}
                    alt='image'
                    key={index}
                    className='size-[100px]'
                  />
                );
              })}
            </div>
          </TabPanel>
        );
      })}
    </>
  );
};
