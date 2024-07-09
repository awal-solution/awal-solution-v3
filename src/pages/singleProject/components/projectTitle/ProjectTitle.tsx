import { Button } from '@src/components/ui/button/Button';
import { Link } from 'react-router-dom';

interface ProjectTitleProps {
  title: string | undefined;
}
export const ProjectTitle: React.FC<ProjectTitleProps> = ({ title }) => {
  return (
    <div className='flex items-center justify-between'>
      <h2 className='font-syne text-4xl font-bold tracking-widest hover:underline hover:underline-offset-2 underline-offset-[15px] transition-all ease-out duration-200 cursor-pointer'>
        {title}
      </h2>
      <Button size='sm' as={Link} to='/'>
        Live Preview
      </Button>
    </div>
  );
};
