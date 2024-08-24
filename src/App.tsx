import { Router } from '@src/router/Router';
import { ScrollToTop } from '@src/components/scrollToTop/ScrollToTop';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer position='bottom-right' />
      <ScrollToTop />
      <Router />
    </>
  );
};
