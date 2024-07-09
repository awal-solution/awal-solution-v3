import { TechStack as TechStackType } from '@src/components/data/portfolio';
import { Image } from '@src/components/ui/image/Image';
interface TechStackProps {
  techStack: TechStackType[] | undefined;
}
export const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
  return (
    <div className='max-w-screen-md overflow-x-auto mx-auto flex items-center justify-between'>
      {techStack?.map((i) => (
        <div
          key={i.id}
          className='flex items-center justify-center p-2 aspect-square w-16 rounded-lg bg-background-200/20'
        >
          <Image src={i?.logo} alt={i?.title} className='w-full object-cover' />
        </div>
      ))}
    </div>
  );
};
