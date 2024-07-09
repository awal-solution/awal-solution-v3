import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Portfolio, portfolio } from '@src/components/data/portfolio';
import { SectionTitle } from '@src/components/sectionTitle/SectionTitle';
import { HeaderSlider } from '@src/pages/singleProject/components/headerSlider/HeaderSlider';
import { ProjectTitle } from '@src/pages/singleProject/components/projectTitle/ProjectTitle';
import { TechStack } from '@src/pages/singleProject/components/techStack/TechStack';
import { ProjectPoints } from './components/projectPoints/ProjectPoints';

export const SingleProject = () => {
  const { projectName } = useParams();
  const [project, setProject] = useState<Portfolio | null>(null);

  useEffect(() => {
    const data = portfolio?.filter((e) => e?.title === projectName);
    setProject(data[0]);
  }, [projectName]);

  return (
    <div className='px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 md:py-8 space-y-8'>
      {project && (
        <HeaderSlider
          title={project?.title}
          image={project?.thumbnail}
          gallery={project?.gallery}
        />
      )}
      <div className='space-y-8 py-8 border-b border-foreground-50/50'>
        <ProjectTitle title={project?.title} />
        <SectionTitle subTitle={project?.short_description} />
        <TechStack techStack={project?.tech_stack} />
      </div>
      <ProjectPoints
        longDescription={project?.description}
        pointsHeading={project?.key_points?.title}
        points={project?.key_points?.points}
      />
    </div>
  );
};
