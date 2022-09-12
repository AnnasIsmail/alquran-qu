// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'jadwal sholat',
    path: '/jadwal-sholat',
    icon: getIcon('ic:baseline-watch-later'),
  },
  {
    title: "al qur'an",
    path: '/al-quran',
    icon: getIcon('fa-solid:quran'),
  },
  {
    title: 'user',
    path: '/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'product',
    path: '/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
