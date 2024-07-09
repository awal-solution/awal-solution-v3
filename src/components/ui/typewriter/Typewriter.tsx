import { motion as M } from 'framer-motion';
import { useEffect, useState } from 'react';

import { cn } from '@src/utils/functions/cn';

interface TypewriterProps {
  words: {
    [key: string]: {
      text: string;
      className?: string;
    }[];
  };
  className?: string;
  cursorClassName?: string;
}

interface Words {
  text: string[];
  className?: string | undefined;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  className,
  cursorClassName,
}) => {
  const [currentLine, setCurrentLine] = useState<Words[]>([]);
  const [currentKeyIndex, setCurrentKeyIndex] = useState<number>(0);

  const keys = Object.keys(words);

  useEffect(() => {
    updateStateWithDelay(currentKeyIndex);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateStateWithDelay = (index: number) => {
    const key = keys[index];
    const wordsForKey = words[key].map((word) => ({
      ...word,
      text: word.text.split(''),
    }));

    setCurrentLine(wordsForKey);
  };

  const handleAnimationComplete = () => {
    const nextIndex = (currentKeyIndex + 1) % keys.length;
    setCurrentKeyIndex(nextIndex);
    updateStateWithDelay(nextIndex);
  };

  return (
    <>
      {currentLine.length > 0 && (
        <div className={cn('flex', className)}>
          {currentLine?.map((word, idx) => (
            <div key={`word-${idx}`} className='inline-block'>
              <M.h2
                key={currentKeyIndex}
                className={cn(
                  `overflow-hidden text-base sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-syne tracking-wide whitespace-nowrap`,
                  word.className,
                )}
                initial={{
                  width: '0%',
                }}
                animate={{
                  width: 'fit-content',
                }}
                transition={{
                  delay: 0.5,
                  repeat: 1,
                  duration: 1.5,
                  ease: 'linear',
                  repeatDelay: 5,
                  repeatType: 'reverse',
                  onComplete: handleAnimationComplete,
                }}
              >
                {word.text}
              </M.h2>
            </div>
          ))}
          <M.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className={cn(
              'block rounded-md w-[4px] h-4 sm:h-6 xl:h-16 ml-2 mt-2.5',
              cursorClassName,
            )}
          />
        </div>
      )}
    </>
  );
};
