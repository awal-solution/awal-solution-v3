import { cn } from '@src/utils/functions/cn';
import { ElementType, ReactNode } from 'react';

interface SectionProps {
  name?: string;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  name,
  children,
  className,
  as: Component = 'section',
}) => {
  return (
    <Component
      id={name}
      className={cn('block w-full overflow-hidden', className)}
    >
      {children}
    </Component>
  );
};
