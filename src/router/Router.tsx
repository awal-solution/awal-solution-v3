import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@src/layouts/AppLayout';
// Pages
import { Home } from '@src/pages/home/Home';
import { NotFound } from '@src/pages/404/NotFound';
import ContactUs from '@src/pages/contact/ContactUs';
// import { SingleProject } from '@src/pages/singleProject/SingleProject';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='contact' element={<ContactUs />} />
        {/* <Route path='portfolio/:projectName' element={<SingleProject />} /> */}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};
