import { createContext } from 'react';

export const ServiceContext = createContext<any>({
  serData: [],
  getAllServices: () => {},
  getSingleService: () => {}
});
