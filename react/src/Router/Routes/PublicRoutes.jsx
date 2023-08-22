import { lazy } from 'react';

const Page404 = lazy(() => import('../../view/page/error/Page404.jsx'));

const publicRoutes = [
  {
    path: '/404',
    element : <Page404/>,
  },

]

export default publicRoutes;