export interface Portfolio {
  id: number;
  title: string;
  description: string;
  short_description: string;
  thumbnail: string;
  gallery: Gallery[];
  site_link: string;
  tech_stack: TechStack[];
  client_name: string;
  client_profile: string;
  client_review: string;
  key_points: { id: number; title: string; points: Points[] };
}
export interface TechStack {
  id: number;
  title: string;
  logo: string;
}
export interface Gallery {
  id: number;
  image: string;
}

export interface Points {
  id: number;
  key: string;
  description: string;
}

export const portfolio: Portfolio[] = [
  {
    id: 1,
    title: 'Wrapsafe',
    description:
      'Poisoning by, adverse effect of and underdosing of antimycobacterial drugs',
    short_description: 'Antimycobacterial drugs',
    thumbnail: 'https://dummyimage.com/650x400png/450A0A',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://cdn.iconscout.com/icon/free/png-256/free-framer-3521436-2944880.png',
      },
    ],
    site_link: 'Zoolab',
    client_name: 'Rachel Johnson',
    client_profile: 'https://robohash.org/eiusautmagni.png?size=50x50&set=set1',
    client_review:
      'Insertion of Endobronchial Valve into Right Main Bronchus, Percutaneous Approach',
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
  },
  {
    id: 2,
    title: 'Latlux',
    description: 'Other dislocation of left foot, initial encounter',
    short_description: 'Other dislocation of left foot, initial encounter',
    thumbnail: 'https://dummyimage.com/650x400png/083344',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://avatars.githubusercontent.com/u/22071735?s=200&v=4',
      },
      {
        id: 7,
        title: 'MUI',
        logo: 'https://mui.com/static/logo.png',
      },
      {
        id: 8,
        title: 'React Router Dom',
        logo: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        id: 9,
        title: 'MySQL',
        logo: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      },
      {
        id: 10,
        title: 'Swiper Slider',
        logo: 'https://admin.pixelstrap.com/viho/assets/images/landing/icon/nuxt/swiper.png',
      },
    ],
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
    site_link: 'Sub-Ex',
    client_name: 'Sean Davis',
    client_profile:
      'https://robohash.org/estquisquamrerum.png?size=50x50&set=set1',
    client_review:
      'Bypass Right Common Iliac Artery to Bilateral Popliteal Arteries with Synthetic Substitute, Open Approach',
  },
  {
    id: 3,
    title: 'Holdlamis',
    description:
      'Corrosion of third degree of left ankle, subsequent encounter',
    short_description:
      'Corrosion of third degree of left ankle, subsequent encounter',
    thumbnail: 'https://dummyimage.com/650x400png/450A0A',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://avatars.githubusercontent.com/u/22071735?s=200&v=4',
      },
      {
        id: 7,
        title: 'MUI',
        logo: 'https://mui.com/static/logo.png',
      },
      {
        id: 8,
        title: 'React Router Dom',
        logo: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        id: 9,
        title: 'MySQL',
        logo: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      },
      {
        id: 10,
        title: 'Swiper Slider',
        logo: 'https://admin.pixelstrap.com/viho/assets/images/landing/icon/nuxt/swiper.png',
      },
    ],
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
    site_link: 'Zoolab',
    client_name: 'Rachel Johnson',
    client_profile: 'https://robohash.org/eiusautmagni.png?size=50x50&set=set1',
    client_review:
      'Insertion of Endobronchial Valve into Right Main Bronchus, Percutaneous Approach',
  },
  {
    id: 4,
    title: 'Ventosanzap',
    description:
      'Burn of second degree of right thumb (nail), subsequent encounter',
    short_description:
      'Burn of second degree of right thumb (nail), subsequent encounter',
    thumbnail: 'https://dummyimage.com/650x400png/0F4A8E',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://avatars.githubusercontent.com/u/22071735?s=200&v=4',
      },
      {
        id: 7,
        title: 'MUI',
        logo: 'https://mui.com/static/logo.png',
      },
      {
        id: 8,
        title: 'React Router Dom',
        logo: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        id: 9,
        title: 'MySQL',
        logo: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      },
      {
        id: 10,
        title: 'Swiper Slider',
        logo: 'https://admin.pixelstrap.com/viho/assets/images/landing/icon/nuxt/swiper.png',
      },
    ],
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
    site_link: 'Zamit',
    client_name: 'Samantha Martin',
    client_profile:
      'https://robohash.org/occaecatiautem.png?size=50x50&set=set1',
    client_review:
      'Replacement of Right Elbow Joint with Nonautologous Tissue Substitute, Open Approach',
  },
  {
    id: 5,
    title: 'Toughjoyfax',
    description:
      'Nondisplaced fracture of navicular [scaphoid] bone of left wrist, subsequent encounter for fracture with routine healing',
    short_description: 'Fracture of left wrist, subsequent encounter',
    thumbnail: 'https://dummyimage.com/650x400png/7F1D1D',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://avatars.githubusercontent.com/u/22071735?s=200&v=4',
      },
      {
        id: 7,
        title: 'MUI',
        logo: 'https://mui.com/static/logo.png',
      },
      {
        id: 8,
        title: 'React Router Dom',
        logo: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        id: 9,
        title: 'MySQL',
        logo: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      },
      {
        id: 10,
        title: 'Swiper Slider',
        logo: 'https://admin.pixelstrap.com/viho/assets/images/landing/icon/nuxt/swiper.png',
      },
    ],
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
    site_link: 'Bamity',
    client_name: 'Harry Johnson',
    client_profile:
      'https://robohash.org/quibusdamrerumtotam.png?size=50x50&set=set1',
    client_review:
      'Drainage of Lumbar Vertebral Disc with Drainage Device, Percutaneous Approach',
  },
  {
    id: 6,
    title: 'Tresom',
    description:
      'Other fracture of lower end of unspecified femur, subsequent encounter for closed fracture with nonunion',
    short_description:
      'Fracture of lower end of unspecified femur, subsequent encounter',
    thumbnail: 'https://dummyimage.com/650x400png/450A0A',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://avatars.githubusercontent.com/u/22071735?s=200&v=4',
      },
      {
        id: 7,
        title: 'MUI',
        logo: 'https://mui.com/static/logo.png',
      },
      {
        id: 8,
        title: 'React Router Dom',
        logo: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        id: 9,
        title: 'MySQL',
        logo: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      },
      {
        id: 10,
        title: 'Swiper Slider',
        logo: 'https://admin.pixelstrap.com/viho/assets/images/landing/icon/nuxt/swiper.png',
      },
    ],
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
    site_link: 'Kanlam',
    client_name: 'John Doe',
    client_profile:
      'https://robohash.org/natusimpeditut.png?size=50x50&set=set1',
    client_review:
      'Bypass Left Common Iliac Artery to Bilateral Popliteal Arteries with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach',
  },
  {
    id: 7,
    title: 'Redhold',
    description: 'Contusion of unspecified foot, subsequent encounter',
    short_description: 'Contusion of unspecified foot, subsequent encounter',
    thumbnail: 'https://dummyimage.com/650x400png/083344',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://avatars.githubusercontent.com/u/22071735?s=200&v=4',
      },
      {
        id: 7,
        title: 'MUI',
        logo: 'https://mui.com/static/logo.png',
      },
      {
        id: 8,
        title: 'React Router Dom',
        logo: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        id: 9,
        title: 'MySQL',
        logo: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      },
      {
        id: 10,
        title: 'Swiper Slider',
        logo: 'https://admin.pixelstrap.com/viho/assets/images/landing/icon/nuxt/swiper.png',
      },
    ],
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
    site_link: 'Latlux',
    client_name: 'Emily Smith',
    client_profile:
      'https://robohash.org/abducimusmollitiaet.png?size=50x50&set=set1',
    client_review:
      'Reposition Left Knee Joint with Internal Fixation Device, Percutaneous Endoscopic Approach',
  },
  {
    id: 8,
    title: 'Transcof',
    description:
      'Nondisplaced fracture of right femur, subsequent encounter for fracture with delayed healing',
    short_description: 'Fracture of right femur, subsequent encounter',
    thumbnail: 'https://dummyimage.com/650x400png/0F4A8E',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://avatars.githubusercontent.com/u/22071735?s=200&v=4',
      },
      {
        id: 7,
        title: 'MUI',
        logo: 'https://mui.com/static/logo.png',
      },
      {
        id: 8,
        title: 'React Router Dom',
        logo: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        id: 9,
        title: 'MySQL',
        logo: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      },
      {
        id: 10,
        title: 'Swiper Slider',
        logo: 'https://admin.pixelstrap.com/viho/assets/images/landing/icon/nuxt/swiper.png',
      },
    ],
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
    site_link: 'Temp',
    client_name: 'John Doe',
    client_profile:
      'https://robohash.org/natusimpeditut.png?size=50x50&set=set1',
    client_review:
      'Drainage of Right Inguinal Lymphatic with Drainage Device, Open Approach',
  },
  {
    id: 9,
    title: 'Voltsillam',
    description:
      'Corrosion of third degree of unspecified thumb (nail), initial encounter',
    short_description:
      'Corrosion of third degree of unspecified thumb (nail), initial encounter',
    thumbnail: 'https://dummyimage.com/650x400png/7F1D1D',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://avatars.githubusercontent.com/u/22071735?s=200&v=4',
      },
      {
        id: 7,
        title: 'MUI',
        logo: 'https://mui.com/static/logo.png',
      },
      {
        id: 8,
        title: 'React Router Dom',
        logo: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        id: 9,
        title: 'MySQL',
        logo: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      },
      {
        id: 10,
        title: 'Swiper Slider',
        logo: 'https://admin.pixelstrap.com/viho/assets/images/landing/icon/nuxt/swiper.png',
      },
    ],
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
    site_link: 'Biodex',
    client_name: 'Emily Smith',
    client_profile:
      'https://robohash.org/abducimusmollitiaet.png?size=50x50&set=set1',
    client_review:
      'Reposition Left Knee Joint with Internal Fixation Device, Percutaneous Endoscopic Approach',
  },
  {
    id: 10,
    title: 'Temp',
    description:
      'Displaced fracture of posterior column [ilioischial] of unspecified acetabulum, initial encounter for closed fracture',
    short_description:
      'Fracture of posterior column of unspecified acetabulum, initial encounter',
    thumbnail: 'https://dummyimage.com/650x400png/450A0A',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://avatars.githubusercontent.com/u/22071735?s=200&v=4',
      },
      {
        id: 7,
        title: 'MUI',
        logo: 'https://mui.com/static/logo.png',
      },
      {
        id: 8,
        title: 'React Router Dom',
        logo: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        id: 9,
        title: 'MySQL',
        logo: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      },
      {
        id: 10,
        title: 'Swiper Slider',
        logo: 'https://admin.pixelstrap.com/viho/assets/images/landing/icon/nuxt/swiper.png',
      },
    ],
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
    site_link: 'Fix San',
    client_name: 'John Doe',
    client_profile:
      'https://robohash.org/natusimpeditut.png?size=50x50&set=set1',
    client_review:
      'Drainage of Right Inguinal Lymphatic with Drainage Device, Open Approach',
  },
  {
    id: 11,
    title: 'Kanlam',
    description:
      'Displaced fracture of lower end of unspecified tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing',
    short_description:
      'Fracture of lower end of unspecified tibia, subsequent encounter',
    thumbnail: 'https://dummyimage.com/650x400png/083344',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://avatars.githubusercontent.com/u/22071735?s=200&v=4',
      },
      {
        id: 7,
        title: 'MUI',
        logo: 'https://mui.com/static/logo.png',
      },
      {
        id: 8,
        title: 'React Router Dom',
        logo: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        id: 9,
        title: 'MySQL',
        logo: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      },
      {
        id: 10,
        title: 'Swiper Slider',
        logo: 'https://admin.pixelstrap.com/viho/assets/images/landing/icon/nuxt/swiper.png',
      },
    ],
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
    site_link: 'Rank',
    client_name: 'Emily Smith',
    client_profile:
      'https://robohash.org/abducimusmollitiaet.png?size=50x50&set=set1',
    client_review:
      'Reposition Left Knee Joint with Internal Fixation Device, Percutaneous Endoscopic Approach',
  },
  {
    id: 12,
    title: 'Tresom',
    description: 'Unspecified sprain of left elbow, subsequent encounter',
    short_description: 'Sprain of left elbow, subsequent encounter',
    thumbnail: 'https://dummyimage.com/650x400png/0F4A8E',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://avatars.githubusercontent.com/u/22071735?s=200&v=4',
      },
      {
        id: 7,
        title: 'MUI',
        logo: 'https://mui.com/static/logo.png',
      },
      {
        id: 8,
        title: 'React Router Dom',
        logo: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        id: 9,
        title: 'MySQL',
        logo: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      },
      {
        id: 10,
        title: 'Swiper Slider',
        logo: 'https://admin.pixelstrap.com/viho/assets/images/landing/icon/nuxt/swiper.png',
      },
    ],
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
    site_link: 'Viva',
    client_name: 'John Doe',
    client_profile:
      'https://robohash.org/natusimpeditut.png?size=50x50&set=set1',
    client_review:
      'Drainage of Right Inguinal Lymphatic with Drainage Device, Open Approach',
  },
  {
    id: 13,
    title: 'Matsoft',
    description:
      'Displaced fracture of neck of unspecified femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion',
    short_description:
      'Fracture of neck of unspecified femur, subsequent encounter',
    thumbnail: 'https://dummyimage.com/650x400png/450A0A',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://avatars.githubusercontent.com/u/22071735?s=200&v=4',
      },
      {
        id: 7,
        title: 'MUI',
        logo: 'https://mui.com/static/logo.png',
      },
      {
        id: 8,
        title: 'React Router Dom',
        logo: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        id: 9,
        title: 'MySQL',
        logo: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      },
      {
        id: 10,
        title: 'Swiper Slider',
        logo: 'https://admin.pixelstrap.com/viho/assets/images/landing/icon/nuxt/swiper.png',
      },
    ],
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
    site_link: 'Trippledex',
    client_name: 'Emily Smith',
    client_profile:
      'https://robohash.org/abducimusmollitiaet.png?size=50x50&set=set1',
    client_review:
      'Reposition Left Knee Joint with Internal Fixation Device, Percutaneous Endoscopic Approach',
  },
  {
    id: 14,
    title: 'Temp',
    description:
      'Nondisplaced fracture of head of unspecified radius, subsequent encounter for fracture with nonunion',
    short_description:
      'Fracture of head of unspecified radius, subsequent encounter',
    thumbnail: 'https://dummyimage.com/650x400png/083344',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://avatars.githubusercontent.com/u/22071735?s=200&v=4',
      },
      {
        id: 7,
        title: 'MUI',
        logo: 'https://mui.com/static/logo.png',
      },
      {
        id: 8,
        title: 'React Router Dom',
        logo: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        id: 9,
        title: 'MySQL',
        logo: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      },
      {
        id: 10,
        title: 'Swiper Slider',
        logo: 'https://admin.pixelstrap.com/viho/assets/images/landing/icon/nuxt/swiper.png',
      },
    ],
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
    site_link: 'Treeflex',
    client_name: 'Emily Smith',
    client_profile:
      'https://robohash.org/abducimusmollitiaet.png?size=50x50&set=set1',
    client_review:
      'Reposition Left Knee Joint with Internal Fixation Device, Percutaneous Endoscopic Approach',
  },
  {
    id: 15,
    title: 'Redhold',
    description:
      'Displaced fracture of medial phalanx of unspecified index finger, subsequent encounter for fracture with delayed healing',
    short_description:
      'Fracture of medial phalanx of unspecified index finger, subsequent encounter',
    thumbnail: 'https://dummyimage.com/650x400png/0F4A8E',
    gallery: [
      { id: 1, image: 'https://dummyimage.com/650x400png/7F1D1D' },
      { id: 2, image: 'https://dummyimage.com/650x400png/991B1B' },
      { id: 3, image: 'https://dummyimage.com/650x400png/B91C1C' },
      { id: 4, image: 'https://dummyimage.com/650x400png/DC2626' },
      { id: 5, image: 'https://dummyimage.com/650x400png/EF4444' },
      { id: 6, image: 'https://dummyimage.com/650x400png/F87171' },
    ],
    tech_stack: [
      {
        id: 1,
        title: 'Vite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      },
      {
        id: 2,
        title: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      },
      {
        id: 3,
        title: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        id: 4,
        title: 'Node',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
      },
      {
        id: 5,
        title: 'Adonis',
        logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
      },
      {
        id: 6,
        title: 'Framer Motion',
        logo: 'https://avatars.githubusercontent.com/u/22071735?s=200&v=4',
      },
      {
        id: 7,
        title: 'MUI',
        logo: 'https://mui.com/static/logo.png',
      },
      {
        id: 8,
        title: 'React Router Dom',
        logo: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        id: 9,
        title: 'MySQL',
        logo: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      },
      {
        id: 10,
        title: 'Swiper Slider',
        logo: 'https://admin.pixelstrap.com/viho/assets/images/landing/icon/nuxt/swiper.png',
      },
    ],
    key_points: {
      id: 1,
      title: 'Key Points',
      points: [
        {
          id: 1,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 2,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 3,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 4,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
        {
          id: 5,
          key: 'Lorem ipsum',
          description:
            'Dolor sit amet consectetur adipisicing elit. Et temporibus maxime excepturi nisi nobis! Voluptates et consectetur soluta autem cum.',
        },
      ],
    },
    site_link: 'Otcom',
    client_name: 'Emily Smith',
    client_profile:
      'https://robohash.org/abducimusmollitiaet.png?size=50x50&set=set1',
    client_review:
      'Reposition Left Knee Joint with Internal Fixation Device, Percutaneous Endoscopic Approach',
  },
];
