import { portfolio } from '@src/components/data/portfolio';
import { Parallax } from '@src/components/ui/parallax/Parallax';
import { SectionTitle } from '@src/components/sectionTitle/SectionTitle';

export const Portfolio = () => {
  return (
    <div className='min-h-svh md:min-h-lvh py-4 sm:py-12 lg:py-16 space-y-12'>
      <div className='px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        <SectionTitle title='Portfolio' subTitle='Some Of Our Work' />
      </div>
      <Parallax data={portfolio} />;
    </div>
  );
};
