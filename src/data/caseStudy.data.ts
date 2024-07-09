import title_bar from '@src/assets/images/title_bar/shape_title_under_line.svg';
import image01 from '@src/assets/images/case_image_1.webp';
import image02 from '@src/assets/images/case_image_2.webp';
import image03 from '@src/assets/images/case_image_3.webp';
// icons
import htmlIcon from '@src/assets/images/icons/html-1.svg';
import css3 from '@src/assets/images/icons/css3.svg';
import tailwind from '@src/assets/images/icons/tailwind-css-2.svg';
import javascript from '@src/assets/images/icons/javascript.svg';
import typescript from '@src/assets/images/icons/typescript.svg';
import react from '@src/assets/images/icons/react.svg';
import vue from '@src/assets/images/icons/vuejs.svg';
import mysql from '@src/assets/images/icons/mysql-3.svg';
import postgres from '@src/assets/images/icons/elephent.svg';
import laravel from '@src/assets/images/icons/laravel.svg';
import redux from '@src/assets/images/icons/redux.svg';
import node from '@src/assets/images/icons/nodejs-3.svg';

export const sectionHeading = { title: 'CASE STUDIES', image: title_bar };

export const caseData = [
  {
    title: 'Astarte Medical',
    subtitle: 'COMPUTER SOFTWARE',
    des: 'Creating software for Astarte Medical involves a meticulous process aimed at addressing their specific needs and objectives. It begins with thorough research and planning to understand the requirements goals of the project.',
    industry: 'Computer software',
    country: 'Germany, Issum',
    tech: [htmlIcon, css3, javascript, react, redux, laravel, mysql],
    btnText: 'Read Case',
    btnLink: '/',
    image: image01,
    start: 0,
    end: 1,
  },
  {
    title: 'CAE Blue Phantom',
    subtitle: 'HEALTHCARE',
    des: 'CAE Blue Phantom is a cutting-edge simulation technology designed to revolutionize medical training and education. Utilizing advanced virtual reality and artificial intelligence, CAE Blue Phantom provides.',
    industry: 'Wellness & Fitness',
    country: 'Germany, Issum',
    tech: [htmlIcon, css3, tailwind, typescript, react, node, mysql],
    btnText: 'Read Case',
    btnLink: '/',
    image: image02,
    start: 0.55,
    end: 1,
  },
  {
    title: 'Liberkeys',
    subtitle: 'REAL ESTATE',
    des: 'Liberkeys is a modern real estate platform that is revolutionizing the way people buy, sell, and rent properties. With a focus on transparency, efficiency, and customer satisfaction, Liberkeys streamlines.',
    industry: 'Real estate',
    country: 'France, Paris',
    tech: [htmlIcon, css3, tailwind, typescript, vue, node, postgres],
    btnText: 'Read Case',
    btnLink: '/',
    image: image03,
    start: 1.1,
    end: 1,
  },
];
