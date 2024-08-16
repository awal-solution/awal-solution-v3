import { OurPortfolio } from '@src/pages/project/components/Tabs';
import { HeroSection } from '@src/components/heroSection/Herosection';

export const Project = () => {
  return (
    <div className='w-full bg-[#E3F0FF]'>
      <HeroSection
        subHeading='Projects By Awal Solution'
        heading='Our Portfolio'
      />
      <div className='container mx-auto'>
        <OurPortfolio />
      </div>
    </div>
  );
};
