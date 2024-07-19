import { Hero } from '@src/pages/home/components/hero/Hero';
import { Brand } from '@src/pages/home/components/brand/Brand';
import { Services } from '@src/pages/home/components/services/Services';
import { About } from '@src/pages/home/components/about/About';
import { CaseStudy } from '@src/pages/home/components/caseStudy/CaseStudy';
import { WorkProcess } from '@src/pages/home/components/workProcess/WorkProcess';
import { OurTech } from '@src/pages/home/components/ourTech/OurTech';
import { Testimonial } from '@src/pages/home/components/testimonial/Testimonial';

export const Home = () => {
  return (
    <>
      <Hero />
      <Brand />
      <Services />
      <About />
      <CaseStudy />
      <WorkProcess />
      <OurTech />
      <Testimonial />
    </>
  );
};
