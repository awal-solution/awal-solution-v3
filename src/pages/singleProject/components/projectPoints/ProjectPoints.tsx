import { Points } from '@src/components/data/portfolio';

interface ProjectPointsProps {
  longDescription: string | undefined;
  pointsHeading: string | undefined;
  points: Points[] | undefined;
}

export const ProjectPoints: React.FC<ProjectPointsProps> = ({
  longDescription,
  pointsHeading,
  points,
}) => {
  return (
    <div className='space-y-4'>
      <h2>{longDescription}</h2>
      <div className='space-y-4'>
        <h2 className='font-syne text-xl font-semibold tracking-widest'>
          {pointsHeading}
        </h2>
        <ul className='list-outside list-decimal space-y-2'>
          {points?.map((point) => (
            <li key={point?.id}>
              <p className=''>
                <span className='mr-2 font-semibold tracking-wider'>
                  {point?.key}:
                </span>
                {point?.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
