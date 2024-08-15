import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@src/layouts/AppLayout';

// Pages
import { Home } from '@src/pages/home/Home';
import { NotFound } from '@src/pages/404/NotFound';
import ContactUs from '@src/pages/contact/ContactUs';
import Blog from '../pages/Blog/Blog';
import BlogDetails from '../pages/Blog/BlogDetail'
import Portfolio from "@src/pages/portfolio/Portfolio.tsx";
import {PortfolioDetails} from "@src/pages/portfolio/components/PortfolioDetails.tsx";
import {Team} from "@src/pages/Team/team.tsx";
import TeamDetail from '@src/pages/Team/TeamDetails';
// import { SingleProject } from '@src/pages/singleProject/SingleProject';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='portfoliodetails' element={<PortfolioDetails />} />
        <Route path='team' element={<Team/>} />
        <Route path='teamdetails' element={<TeamDetail />} />
        
        <Route path='contact' element={<ContactUs />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blogdetails' element={<BlogDetails />} />
        {/* <Route path='portfolio/:projectName' element={<SingleProject />} /> */}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};
