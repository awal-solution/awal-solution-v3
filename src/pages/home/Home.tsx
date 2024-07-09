import { Hero } from '@src/pages/home/components/hero/Hero';
import { Brand } from '@src/pages/home/components/brand/Brand';
import { Services } from '@src/pages/home/components/services/Services';
import { About } from '@src/pages/home/components/about/About';
import { CaseStudy } from '@src/pages/home/components/caseStudy/CaseStudy';
// import { Portfolio } from './components/Portfolio/Portfolio';
// import { Testimonials } from '@src/pages/home/components/testimonials/Testimonials';

export const Home = () => {
  return (
    <>
      <Hero />
      <Brand />
      <Services />
      <About />
      <CaseStudy />
      {/* <Portfolio />
      <Testimonials /> */}
    </>
  );
};
