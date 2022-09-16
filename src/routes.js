import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import Blog from './pages/Blog';
import DashboardApp from './pages/DashboardApp';
import DetailSurah from './pages/DetailSurah';
import NotFound from './pages/Page404';
import Products from './pages/Products';
import User from './pages/User';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: 'jadwal-sholat', element: <DashboardApp /> },
        { path: 'al-quran', element: <Blog /> },
        { path: 'al-quran/detail-surah/:slug', element: <DetailSurah /> },
        { path: 'doa-doa', element: <Products /> },
        { path: 'user', element: <User /> },
        { path: '404', element: <NotFound /> },
        { path: '', element: <Navigate to="/jadwal-sholat" /> },
      ],
    },
    // {
    //   path: 'login',
    //   element: <Login />,
    // },
    // {
    //   path: 'register',
    //   element: <Register />,
    // },
    // {
    //   path: '/',
    //   element: <LogoOnlyLayout />,
    //   children: [
    //     { path: '/', element: <Navigate to="/dashboard/app" /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
