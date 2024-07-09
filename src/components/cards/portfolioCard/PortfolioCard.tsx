import { Link } from 'react-router-dom';
import { motion as M, MotionValue } from 'framer-motion';

import { Image } from '@src/components/ui/image/Image';
import { Portfolio } from '@src/components/data/portfolio';

interface PortfolioCardProps {
  project: Portfolio;
  translate: MotionValue<number>;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  project,
  translate,
}) => {
  return (
    <M.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.id}
      transition={{ ease: 'easeOut' }}
      className='group/card relative h-[400px] w-[650px] shrink-0 text-clip rounded-lg'
    >
      <Link
        to={`portfolio/${project?.title}`}
        className='block size-full group-hover/card:shadow-2xl'
      >
        <Image
          width={650}
          height={400}
          alt={project?.title}
          src={project?.thumbnail}
          className='inset-0 size-full object-cover object-center'
        />
      </Link>
      <div className='pointer-events-none absolute inset-0 size-full opacity-0 transition-all duration-200 ease-out group-hover/card:opacity-80' />
      <h2 className='absolute bottom-4 left-4 text-xl font-semibold capitalize opacity-0 group-hover/card:opacity-100'>
        {project?.title}
      </h2>
    </M.div>
  );
};
