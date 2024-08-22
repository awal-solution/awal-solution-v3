import { Fragment, useEffect, useState } from 'react';
import { images } from '@src/data/projects/projects.data.ts';
import { Tab, TabPanel } from '@src/components/ui';
import { ProjectCard } from '@src/pages/project/components/ProjectCard.tsx';
import { getRecordsApi } from '@src/api/enpoints';

export const OurProjects = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  const onTabClick = (index: any) => {
    setActiveTab(index);
  };

  useEffect(() => {
    getRecordsApi('/project-category').then((res: any) => {
      setData(res?.data);
    });
  }, []);

  return (
    <div className='relative bg-[#E3F0FF]'>
      <img
        src={images.rightAngleShape}
        alt='image'
        className='absolute bottom-0 right-0 z-10 '
      />
      <div className='mx-auto max-w-screen-xl pt-10'>
        <ul className='relative z-20 mx-10 flex flex-col rounded bg-white  px-5 py-3 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:flex lg:flex-row'>
          {data?.map((item: any) => {
            const isOpen = activeTab === item.id;
            return (
              <Tab
                key={item.id}
                id={item.id}
                onTabClick={onTabClick}
                className={`${
                  isOpen ? 'active bg-blue-700 text-white' : ''
                } cursor-pointer rounded px-10 py-2 font-bold`}
              >
                {item.name}
              </Tab>
            );
          })}
        </ul>
        {data?.map((item: any) => {
          return (
            <TabPanel
              key={item.id}
              isOpen={activeTab === item.id}
              className='md:m-5 lg:my-5'
            >
              <div className='relative z-20 mx-10 grid  grid-cols-1 gap-6 py-10 md:pt-10 lg:grid-cols-2'>
                {item?.projects?.map((item: any, index: any) => {
                  return (
                    <Fragment key={index}>
                      <ProjectCard data={item} />
                    </Fragment>
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
