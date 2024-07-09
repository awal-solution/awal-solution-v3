import { useState } from 'react';
import { AnimatePresence, motion as M } from 'framer-motion';

import { services } from '@src/components/data/services';
import { ServiceObject } from '@src/components/data/services';
import { ServicesSwitcher } from '@src/pages/home/components/services/ServicesSwitcher';

export const ServiceDetail = () => {
  const [selectedService, setSelectedService] = useState<ServiceObject | null>(
    services?.[0],
  );

  return (
    <div className='flex size-full flex-col items-center justify-center gap-8 lg:flex-row'>
      <ServicesSwitcher
        services={services}
        service={selectedService}
        setService={setSelectedService}
      />
      <AnimatePresence mode='wait'>
        <M.div
          key={selectedService?.title}
          exit={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          initial={{ y: 10, opacity: 0 }}
          className='size-full space-y-8'
        >
          <div className='space-y-3.5'>
            <h2 className='text-4xl font-bold'>
              {selectedService?.title}
            </h2>
            <p className='text-lg'>
              {selectedService?.description}
            </p>
          </div>
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold'>
              {selectedService?.sub_title}
            </h3>
            <ul className='space-y-8'>
              {selectedService?.benefits?.map((benefit) => (
                <li key={benefit?.id} className='space-x-2'>
                  <span className='font-semibold' >
                    {benefit?.title}:{' '}
                  </span>
                  <span>{benefit?.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </M.div>
      </AnimatePresence>
    </div>
  );
};
