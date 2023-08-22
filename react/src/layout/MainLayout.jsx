import React from 'react';
import  {Outlet} from  "react-router-dom"


const MainLayout = () => {
    return (
        <div>
         MainLayou
         <Outlet />
        </div>
    );
};

export default MainLayout;