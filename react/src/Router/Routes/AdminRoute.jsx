import { lazy } from 'react';

import PageOne from '../../view/page/PageOne.jsx';
import PageTwo from '../../view/page/PageTwo.jsx';
const Dashboard = lazy(() => import('../../view/page/Dashboard.jsx'));

export  const  adminRoutes = [
    {
        path:"/",
        element : <Dashboard/>,
        role: 'admin',
    },
    {
        path:"/page-one",
        element : <PageOne/>,
        role: 'admin',
    },
    {
        path:"/page-two",
        element : <PageTwo/>,
        role: 'admin',
    }
  
 
]