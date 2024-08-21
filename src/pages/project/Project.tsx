import { OurProjects } from '@src/pages/project/components/Tabs';
import { HeroSection } from '@src/components/heroSection/Herosection';

export const Project = () => {
  return (
    <>
      <HeroSection
        heading='Portfolio'
        subHeading='Projects By Awal Solution 😍'
      />
      <div className='w-full bg-[#E3F0FF]'>
        <OurProjects />
      </div>
    </>
  );
};
