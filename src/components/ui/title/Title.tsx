import { cn } from '@src/utils/functions/cn';

interface TitleProps {
  title: string;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ title, className }) => {
  return (
    <>
      {title && (
        <h1
          className={cn(
            'block font-syne font-bold leading-6 tracking-widest border-2 w-fit py-2 px-4 rounded-full border-primary-200 text-primary',
            className,
          )}
        >
          {title}
        </h1>
      )}
    </>
  );
};
