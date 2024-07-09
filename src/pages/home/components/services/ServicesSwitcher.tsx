import { ServiceObject } from '@src/components/data/services';
import { Button } from '@src/components/ui/button/Button';

interface ServicesSwitcherProps {
  services: ServiceObject[];
  service: ServiceObject | null;
  setService: (item: ServiceObject) => void;
}

export const ServicesSwitcher: React.FC<ServicesSwitcherProps> = ({
  services,
  service,
  setService,
}) => {
  return (
    <div className='hidden lg:block w-[330px] bg-background-100 h-fit p-8 space-y-4 shadow-sm shadow-foreground/15 rounded-lg'>
      {services?.map((item) => (
        <Button
          size='sm'
          fullWidth
          key={item?.id}
          onClick={() => setService(item)}
          shadow={item?.title === service?.title}
          variant={item?.title === service?.title ? 'solid' : 'default'}
        >
          {item?.title}
        </Button>
      ))}
    </div>
  );
};
