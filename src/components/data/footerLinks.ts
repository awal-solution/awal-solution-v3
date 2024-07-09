interface Address {
  id: number;
  title: string;
}
export interface Links extends Address {
  path: string;
}

export interface FooterLinks extends Address {
  links: Links[];
  address?: Address[];
}

export const footerLinks: FooterLinks[] = [
  {
    id: 1,
    title: 'Services-1',
    links: [
      { id: 1, title: 'Link-1', path: '/' },
      { id: 2, title: 'Link-2', path: '/' },
      { id: 3, title: 'Link-3', path: '/' },
      { id: 4, title: 'Link-4', path: '/' },
      { id: 5, title: 'Link-5', path: '/' },
      { id: 6, title: 'Link-6', path: '/' },
    ],
  },
  {
    id: 2,
    title: 'Services-2',
    links: [
      { id: 1, title: 'Link-1', path: '/' },
      { id: 2, title: 'Link-2', path: '/' },
      { id: 3, title: 'Link-3', path: '/' },
      { id: 4, title: 'Link-4', path: '/' },
      { id: 5, title: 'Link-5', path: '/' },
      { id: 6, title: 'Link-6', path: '/' },
    ],
  },
  {
    id: 3,
    title: 'Services-3',
    links: [
      { id: 1, title: 'Link-1', path: '/' },
      { id: 2, title: 'Link-2', path: '/' },
      { id: 3, title: 'Link-3', path: '/' },
      { id: 4, title: 'Link-4', path: '/' },
      { id: 5, title: 'Link-5', path: '/' },
      { id: 6, title: 'Link-6', path: '/' },
    ],
  },
  {
    id: 4,
    title: 'Get In Touch',
    links: [
      { id: 1, title: 'phone', path: '/' },
      { id: 2, title: 'email', path: '/' },
    ],
    address: [
      {
        id: 1,
        title: 'Office # 313 Model Town Block C Lahore, Pakistan ',
      },
    ],
  },
];
