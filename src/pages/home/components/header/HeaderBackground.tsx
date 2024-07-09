import { Image } from '@src/components/ui/image/Image';
import { Marquee } from '@src/components/ui/marquee/Marquee';
import projectPlaceholder from '@src/assets/images/Image container.png';

interface HeaderBackgroundProps {
  backgrounds: any[];
}

export const HeaderBackground: React.FC<HeaderBackgroundProps> = ({
  backgrounds,
}) => {
  return (
    <div className='w-full h-full -rotate-[10deg] absolute inset-0 -top-32'>
      {backgrounds
        ?.reduce(
          (acc: any, _curr: number, index: number, array: number[] | never) => {
            if (index % 5 === 0) {
              acc.push(array.slice(index, index + 5));
            }
            return acc;
          },
          [],
        )
        .map((chunk: number[], chunkIndex: any) => (
          <Marquee
            key={chunkIndex}
            diraction={chunkIndex % 2 === 0 ? 'left' : 'right'}
          >
            {chunk.map((i) => (
              <div
                key={i}
                className=' max-w-2xl max-h-[350px] rounded-lg shadow-lg shadow-foreground/25 overflow-clip'
              >
                <Image
                  src={projectPlaceholder}
                  alt='sample image for showcase'
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </Marquee>
        ))}
    </div>
  );
};
