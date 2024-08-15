import { useState } from 'react';
import { tabData, images } from '@src/data/portfolio.data.ts';
import { Tab, TabPanel } from '@src/components/ui';
import {SinglePortfolioCard} from "@src/pages/portfolio/components/SinglePortfolioCard.tsx";

export const OurPortfolio = () => {
    const [activeTab, setActiveTab] = useState(1);

    const onTabClick = (index: any) => {
        setActiveTab(index);
    };
    return (
        <div className='relative bg-[#E3F0FF]'>
            <img
                src={images.rightAngleShape}
                alt='image'
                className='absolute bottom-0 right-0 z-10 max-w-36'
            />
            <div className='mx-auto pt-10 max-w-screen-xl'>

                <ul className='relative z-20 flex mx-10 flex-col sm:grid sm:grid-cols-2  md:grid md:grid-cols-2 lg:flex lg:flex-row rounded bg-white px-5 py-3'>
                    {tabData?.map((item: any) => {
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
                {tabData?.map((item: any) => {
                    return (
                        <TabPanel
                            key={item.id}
                            isOpen={activeTab === item.id}
                            className='md:m-5 lg:my-5'
                        >
                            <div className='relative z-20 mx-10 py-10  md:pt-10 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                {item?.data?.map((subTab: any) => {
                                    return (
                                        <SinglePortfolioCard subTab={subTab.title} />
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
