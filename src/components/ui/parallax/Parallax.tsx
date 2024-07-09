import React from 'react';
import { motion as M, useScroll, useTransform, useSpring } from 'framer-motion';

import { Portfolio } from '@src/components/data/portfolio';
import { PortfolioCard } from '@src/components/cards/portfolioCard/PortfolioCard';

interface ParallaxProps {
  data: Portfolio[];
}

export const Parallax: React.FC<ParallaxProps> = ({ data }) => {
  const ref = React.useRef(null);
  const firstRow = data.slice(0, 5);
  const secondRow = data.slice(5, 10);
  const thirdRow = data.slice(10, 15);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 100, damping: 50, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, -1000]),
    springConfig,
  );

  return (
    <div
      ref={ref}
      className='overflow-hidden antialiased relative flex flex-col self-auto [perspective:1350px] [transform-style:preserve-3d]'
    >
      <M.div className='flex flex-row-reverse space-x-reverse space-x-8 mb-8'>
        {firstRow.map((project) => (
          <PortfolioCard
            key={project?.id}
            project={project}
            translate={translateX}
          />
        ))}
      </M.div>
      <M.div className='flex flex-row space-x-8 mb-8'>
        {secondRow.map((project) => (
          <PortfolioCard
            key={project?.id}
            project={project}
            translate={translateXReverse}
          />
        ))}
      </M.div>
      <M.div className='flex flex-row-reverse space-x-reverse space-x-8'>
        {thirdRow.map((project) => (
          <PortfolioCard
            key={project?.id}
            project={project}
            translate={translateX}
          />
        ))}
      </M.div>
    </div>
  );
};
