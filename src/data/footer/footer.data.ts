import topShape from '@src/assets/images/shapes/shape_space_2.svg';
import bottomShape from '@src/assets/images/shapes/shape_space_6.svg';
//
import mailIcon from '@src/assets/images/footer/icon_mail_2.svg';
import facebook from '@src/assets/images/social-icons/facebook.svg';
import twitter from '@src/assets/images/social-icons/twitter.svg';
import linkedin from '@src/assets/images/social-icons/linkedin.svg';
import youtube from '@src/assets/images/social-icons/youtube.svg';
import tickIcon from '@src/assets/images/footer/tick.svg';

export const footerImages = { topShape, bottomShape, tickIcon };
export const footerLinks = [
  {
    title: 'Company',
    links: [
      { link: '#', text: 'About' },
      { link: '#', text: 'Our achievements' },
      { link: '#', text: 'Our partners' },
      { link: '#', text: 'Our locations' },
      { link: '#', text: 'Careers' },
      { link: '#', text: 'Contacts' }
    ]
  },
  {
    title: 'Expertise',
    links: [
      { text: 'Cloud solutions', link: '#' },
      { text: 'Data warehouse', link: '#' },
      { text: 'Data management', link: '#' },
      { text: 'BI services', link: '#' },
      { text: 'Big data', link: '#' },
      { text: 'Data science', link: '#' }
    ]
  },
  {
    title: 'Industries',
    links: [
      { text: 'Insurance', link: '#' },
      { text: 'Banking', link: '#' },
      { text: 'Fintech', link: '#' },
      { text: 'Logistics', link: '#' },
      { text: 'Retail', link: '#' },
      { text: 'HealthCare', link: '#' }
    ]
  }
];

export const newsLetter = {
  title: 'Newsletter',
  text: 'Sign up to Techco weekly newsletter to get the latest updates.',
  mailIcon
};

export const socialLinks = [
  { icon: facebook, link: '#' },
  { icon: twitter, link: '#' },
  { icon: linkedin, link: '#' },
  { icon: youtube, link: '#' }
];

export const footerSlider = [
  'Devops Services',
  'App Development',
  'Web Development',
  'Enterprise Apps',
  'Software Solution',
  'Custom Web Apps'
];
