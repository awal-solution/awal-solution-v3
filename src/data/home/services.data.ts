import bannerShape from '@src/assets/images/shapes/shape_space_1.svg';
import leftAngleShape from '@src/assets/images/shapes/shape_angle_2.webp';
import rightAngleShape from '@src/assets/images/shapes/shape_angle_1.webp';
import leftCircleShape from '@src/assets/images/shapes/shape_line_5.png';
import rightCircleShape from '@src/assets/images/shapes/shape_line_6.png';
import title_bar from '@src/assets/images/title_bar/shape_title_under_line.svg';
// cards icons
import wd from '@src/assets/images/icons/html.svg';
import consult from '@src/assets/images/icons/consult.svg';
import laptop from '@src/assets/images/icons/laptop.svg';
import mb from '@src/assets/images/icons/mobile.svg';
import ui from '@src/assets/images/icons/ui.svg';
import support from '@src/assets/images/icons/support.svg';

// sides banners
export const serviceImages = {
  bannerShape,
  leftAngleShape,
  rightAngleShape,
  leftCircleShape,
  rightCircleShape,
};

// section title
export const sectionHeading = { title: 'OUR SERVICES', image: title_bar };

// cards data
export const servicesCard = [
  {
    icon: wd,
    title: 'Custom Software Development',
    list: [
      'Software architecture design',
      'System integration services',
      'Data migration services',
      'Legacy app modernization',
    ],
  },
  {
    icon: consult,
    title: 'Audit & IT Consulting Services',
    list: [
      'TechGuard Audit',
      'CyberSafe Audit & IT Consulting',
      'AssuranceEdge & IT Consulting',
      'IT Sentry Audit & IT Consulting',
    ],
  },
  {
    icon: laptop,
    title: 'Web Application Design and Development',
    list: [
      'Web app development services',
      'Web portal development services',
      'Website development services',
      'Offshore web development',
    ],
  },
  {
    icon: mb,
    title: 'Mobile App Design and Development',
    list: [
      'Android development services',
      'iOS app development services',
      'Mobile application design services',
      'Enterprise mobile app development',
    ],
  },
  {
    icon: ui,
    title: 'Best UI/UX Design Services',
    list: [
      'PixelPerfection UI/UX Design',
      'DesignCraft UI/UX Design',
      'CreativeWave UI/UX Design',
      'InterfaceGenius UI/UX Design',
    ],
  },
  {
    icon: support,
    title: 'Maintenance and Customer Support',
    list: [
      'CareCraft Maintenance',
      'FixItPro Maintenance',
      'TechCare Maintenance',
      'AssistEdge Maintenance',
    ],
  },
];
