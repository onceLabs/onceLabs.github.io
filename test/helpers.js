const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'onceLabs',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | onceLabs',
    heading: 'ABOUT',
  },
  {
    route: '/projects',
    title: 'Projects | Michael D\'Angelo',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Michael D\'Angelo',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Michael D\'Angelo',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
