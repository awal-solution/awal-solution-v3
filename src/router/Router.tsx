import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@src/layouts/AppLayout';

// Pages
import { Home } from '@src/pages/home/Home';
import { NotFound } from '@src/pages/404/NotFound';
import { ContactUs } from '@src/pages/contact/ContactUs';
import { Posts } from '../pages/blog/Posts';
import { SinglePost } from '../pages/blog/SinglePost';
import { Project } from '@src/pages/project/Project';
import { SingleProject } from '@src/pages/project/SingleProject';
import { Team } from '@src/pages/team/Team';
import { TeamDetail } from '@src/pages/team/TeamDetail';
import { Services } from '@src/pages/services/Services';
import { ServicesDetail } from '@src/pages/services/ServicesDetail';
import { About } from '@src/pages/about-us/About';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='service-detail/:slug' element={<ServicesDetail />} />
        <Route path='project' element={<Project />} />
        <Route path='project-detail/:slug' element={<SingleProject />} />
        <Route path='team' element={<Team />} />
        <Route path='team-detail/:slug' element={<TeamDetail />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='about-us' element={<About />} />
        <Route path='blog' element={<Posts />} />
        <Route path='blog-detail/:slug' element={<SinglePost />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};
