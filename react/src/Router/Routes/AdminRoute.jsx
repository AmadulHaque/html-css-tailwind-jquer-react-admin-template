import { lazy } from 'react';

const Dashboard = lazy(() => import('../../view/page/Dashboard.jsx'));

export  const  adminRoutes = [
    {
        path:"/",
        element : <Dashboard/>,
        role: 'admin',
    }
 

]