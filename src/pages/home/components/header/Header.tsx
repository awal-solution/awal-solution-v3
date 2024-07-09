import { Section } from '@src/components/ui';
import { HeaderBackground } from '@src/pages/home/components/header/HeaderBackground';
import { HeaderContent } from '@src/pages/home/components/header/HeaderContent';

export const Header = () => {
  const backgrounds = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <Section name='header' className='relative w-full h-svh sm:h-lvh '>
      <HeaderBackground backgrounds={backgrounds} />
      <HeaderContent />
    </Section>
  );
};
