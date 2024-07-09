import { Title, Button, Typewriter, Section } from '@src/components/ui';

export const HeaderContent = () => {
  const words = {
    'line-1': [
      {
        text: 'Your Digital Partners',
      },
    ],
    'line-2': [
      {
        text: 'Trusted IT & Tech Solution',
        // className: 'text-primary',
      },
    ],
    'line-4': [
      {
        text: 'Come Build With Us',
      },
    ],
  };

  return (
    <Section className='absolute bg-foreground/20 h-full inset-0 flex justify-center flex-col'>
      <div className='space-y-10 pl-24'>
        <Title title='Best IT solutions' />
        <Typewriter words={words} />
        <div className='flex items-center gap-4 flex-wrap'>
          <Button
            size='lg'
            onClick={() => console.log('header lets talk clicked')}
          >
            Lets Talk
          </Button>
          <Button
            size='lg'
            onClick={() => console.log('header View services clicked')}
          >
            View Services
          </Button>
        </div>
      </div>
    </Section>
  );
};
