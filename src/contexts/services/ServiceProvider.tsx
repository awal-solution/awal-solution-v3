import { ReactNode, useState } from 'react';
import { ServiceContext } from '@src/contexts/services/ServiceContext';
import { getRecordApi, getRecordsApi } from '@src/api/enpoints';

interface Props {
  children: ReactNode;
}

export const ServiceProvider: React.FC<Props> = ({ children }) => {
  const [serData, setSerData] = useState<any>([]);

  const getAllServices = () => {
    getRecordsApi('/services', { page: 1, perPage: 20 }).then((res: any) => {
      setSerData(res?.data?.data);
    });
  };

  const getSingleService = (id: any) => {
    getRecordApi(`/services/${id}`).then((res: any) => {
      setSerData(res?.data);
    });
  };

  return (
    <ServiceContext.Provider value={{ serData, getAllServices, getSingleService }}>
      {children}
    </ServiceContext.Provider>
  );
};
