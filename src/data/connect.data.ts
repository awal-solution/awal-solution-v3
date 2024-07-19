import title_bar from '@src/assets/images/title_bar/shape_title_under_line.svg';
import topShape from '@src/assets/images/shapes/shape_space_5.svg';
import leftShape from '@src/assets/images/shapes/shape_line_5.png';
import rightShape from '@src/assets/images/shapes/shape_line_6.png';

// icons
import phoneIcon from '@src/assets/images/contact-icon/phone.svg';
import emailIcon from '@src/assets/images/contact-icon/email.svg';
import locationIcon from '@src/assets/images/contact-icon/location.svg';
import envelop from '@src/assets/images/contact-icon/envelop.svg';
import userIcons from '@src/assets/images/contact-icon/user.svg';
import mailIcons from '@src/assets/images/contact-icon/mail.svg';
import callIcons from '@src/assets/images/contact-icon/contact.svg';
import globalIcons from '@src/assets/images/contact-icon/global.svg';
import commentIcons from '@src/assets/images/contact-icon/comment.svg';
import arrowIcons from '@src/assets/images/contact-icon/arrow.svg';

// section title
export const sectionHeading = { title: 'YOU ARE HERE', image: title_bar };
export const connectImages = { topShape, leftShape, rightShape };

export const firstCardData = {
  title: "Let's Start",
  pg: 'Initiating Your Journey to Success and Growth.',
  cotactDetail: [
    {
      icon: phoneIcon,
      text: '1234567890',
    },
    {
      icon: emailIcon,
      text: 'techco@gmail.com',
    },
    {
      icon: locationIcon,
      text: 'Sunshine Business Park',
    },
  ],
  list: [
    'Share your requirements',
    'Discuss them with our experts',
    'Get a free quote',
    'Start the project',
  ],
};

export const contactFormData = {
  arrowIcons,
  userIcons,
  mailIcons,
  callIcons,
  globalIcons,
  commentIcons,
  envelop,
  subTitle: "LET'S CONNECT!",
  title: "Send us a message, and we'll promptly discuss your project with you.",
};
