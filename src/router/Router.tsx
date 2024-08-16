import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@src/layouts/AppLayout';

// Pages
import { Home } from '@src/pages/home/Home';
import { NotFound } from '@src/pages/404/NotFound';
import { ContactUs } from '@src/pages/contact/ContactUs';
import { Blog } from '../pages/blog/Blog';
import { BlogPost } from '../pages/blog/BlogDetail';
import { Project } from '@src/pages/project/Project';
import { SingleProject } from '@src/pages/project/SingleProject';
import { Team } from '@src/pages/team/Team';
import { TeamDetail } from '@src/pages/team/TeamDetail';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='project' element={<Project />} />
        <Route path='project-detail/:id' element={<SingleProject />} />
        <Route path='team' element={<Team />} />
        <Route path='team-detail/:id' element={<TeamDetail />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog-detail/:id' element={<BlogPost />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};
