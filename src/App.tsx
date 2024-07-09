import { Router } from '@src/router/Router';
import { ScrollToTop } from '@src/components/scrollToTop/ScrollToTop';

export const App = () => {
  return (
    <>
      <ScrollToTop />
      <Router />
    </>
  );
};
