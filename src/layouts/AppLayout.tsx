import { Outlet } from 'react-router-dom';
import { AppNavbar } from './components/appNavbar/AppNavbar';
import { AppFooter } from '@src/layouts/components/appFooter/AppFooter';

export const AppLayout = () => {
  return (
    <>
      <AppNavbar />
      <Outlet />
      <AppFooter />
    </>
  );
};
