import { useState } from 'react';
import { Image } from '@src/components/ui/image/Image';
import { Gallery } from '@src/components/data/portfolio';

interface HeaderSliderProps {
  title: string;
  image: string;
  gallery: Gallery[];
}
export const HeaderSlider: React.FC<HeaderSliderProps> = ({
  title,
  image,
  gallery,
}) => {
  const [thumbnail, setThumbnail] = useState<string>(image);

  return (
    <div className='flex items-start justify-center gap-8'>
      <div className='w-full rounded-lg overflow-clip max-h-[750px] h-full'>
        <Image
          src={thumbnail}
          alt={title}
          className='w-full object-cover aspect-video'
        />
      </div>
      <ul className='max-w-xs w-full space-y-6 max-h-[750px] h-full overflow-y-auto'>
        <li
          className='relative w-full rounded-lg overflow-clip cursor-pointer'
          onClick={() => setThumbnail(image)}
        >
          {thumbnail === image && (
            <div className='absolute inset-0 w-full h-full bg-background-50/30 backdrop-blur-[1px]' />
          )}
          <Image
            src={image}
            alt={title}
            className='w-full object-cover aspect-video'
          />
        </li>
        {gallery?.map((image) => (
          <li
            key={image?.id}
            className='relative w-full rounded-lg overflow-clip cursor-pointer'
            onClick={() => setThumbnail(image?.image)}
          >
            {thumbnail === image?.image && (
              <div className='absolute inset-0 w-full h-full bg-background-50/30 backdrop-blur-[1px]' />
            )}
            <Image
              src={image?.image}
              alt={title}
              className='w-full object-cover aspect-video'
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
