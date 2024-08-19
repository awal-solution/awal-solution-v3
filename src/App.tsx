import { Router } from '@src/router/Router';
import { ScrollToTop } from '@src/components/scrollToTop/ScrollToTop';
import { toast } from 'react-toastify';

export const App = () => {
  window.showToast = (message: any, type: any) => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    } else if (type === 'warn') {
      toast.warn(message);
    }
  };
  return (
    <>
      <ScrollToTop />
      <Router />
    </>
  );
};
