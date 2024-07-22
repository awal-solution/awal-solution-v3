import title_bar from '@src/assets/images/title_bar/shape_title_under_line.svg';
import leftShape from '@src/assets/images/shapes/shape_angle_4.webp';
import rightShape from '@src/assets/images/shapes/shape_line_7.png';
//
import userLockIcon from '@src/assets/images/contact-icon/user-lock.svg';
import dateIcon from '@src/assets/images/contact-icon/calender.svg';
import commentIcon from '@src/assets/images/contact-icon/comment.svg';
//
import post01 from '@src/assets/images/posts/post_04-800x600.jpg';
import post02 from '@src/assets/images/posts/post_05-800x600.jpg';
import post03 from '@src/assets/images/posts/post_06-800x600.jpg';

// section title
export const sectionHeading = { title: 'OUR ARTICLES', image: title_bar };

export const articalsShapes = { leftShape, rightShape };

export const articalData = [
  {
    id: 1,
    image: post01,
    title: 'The Next Big Thing: Quantum Computing and Its',
    auther: 'admin',
    userIcon: userLockIcon,
    date: '06/07/2024',
    dateIcon: dateIcon,
    commentCount: 0,
    commentIcon: commentIcon,
  },
  {
    id: 2,
    image: post02,
    title: 'Seamless Integration of Hybrid and Multi-Cloud Environments',
    auther: 'admin',
    userIcon: userLockIcon,
    date: '06/08/2024',
    dateIcon: dateIcon,
    commentCount: 0,
    commentIcon: commentIcon,
  },
  {
    id: 3,
    image: post03,
    title: 'Harnessing the Power of AI and Machine Learning',
    auther: 'admin',
    userIcon: userLockIcon,
    date: '06/08/2024',
    dateIcon: dateIcon,
    commentCount: 0,
    commentIcon: commentIcon,
  },
];
