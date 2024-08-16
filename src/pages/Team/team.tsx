import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { dedicateTeam, teamCards, globalTeam } from '@src/data/team.data';
import { HeroSection } from '@src/components/heroSection/Herosection';
import { TeamCard } from '@src/pages/team/TeamCard';

export const Team = () => {
  return (
    <>
      <div className='bg-[#E3F0ff] '>
        <HeroSection subHeading={'Members 😍 Team'} heading={'Team Member'} />
        <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-10 px-5 py-20 lg:flex-row'>
          <div>
            <div className='flex gap-2'>
              <span>{dedicateTeam.title}</span>
              <p className='rounded bg-[#F44380] px-2'>{dedicateTeam.tg}</p>
            </div>
            <h1 className='pt-5 text-3xl font-semibold'>
              {dedicateTeam.subTitle}
            </h1>
            <p className='pt-5 text-lg leading-8'>{dedicateTeam.des}</p>
            <Link
              to='/contact-us'
              className='my-5 flex w-fit items-center justify-center gap-3 rounded-full bg-[#0044EB] px-6 py-2 text-base text-white sm:px-10 sm:py-3 sm:text-lg'
            >
              <span className='whitespace-nowrap'>TALK TO AN EXPERT</span>
              <ArrowUpRight />
            </Link>
          </div>
          <div className='md:pt-10'>
            <img src={dedicateTeam.img} alt='Team Cartoon' />
          </div>
        </div>
        <div className='bg-white pb-20'>
          <div className='flex justify-center gap-3 pt-20'>
            <p className='rounded bg-[#F44380] px-2 text-white'>Our Expert</p>
            <span>Team Members 😍</span>
          </div>
          <h1 className='py-5 pb-20 text-center text-4xl font-bold'>
            Top Skilled Experts
          </h1>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:mx-auto lg:grid-cols-3'>
            {teamCards.map((item, index) => {
              return (
                <Fragment key={index}>
                  <TeamCard data={item} />
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className='bg-[#E3F0FF]'>
          <div className='flex justify-center gap-3 pt-20'>
            <p className='rounded bg-[#F44380] px-2 text-white'>
              {globalTeam.tg}
            </p>
            <span>{globalTeam.title}</span>
          </div>
          <h1 className='py-5 pb-20 text-center text-4xl font-bold'>
            {globalTeam.subTitle}
          </h1>
          <img src={globalTeam.img} className='mx-auto' alt='Team Map' />
        </div>
      </div>
    </>
  );
};
