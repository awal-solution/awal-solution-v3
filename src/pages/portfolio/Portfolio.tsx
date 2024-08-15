import { OurPortfolio } from '@src/pages/portfolio/components/Tabs';
import { HeroSection } from '@src/components/HeroSection/Herosection';

export const Portfolio = () => {
  return (
    <div className='w-full bg-[#E3F0FF]'>
      <HeroSection subHeading={'Projects By Awal Solution'} heading={'Our Portfolio'} />
      <div className='container mx-auto'>
        <OurPortfolio />
      </div>
    </div>
  );
};
