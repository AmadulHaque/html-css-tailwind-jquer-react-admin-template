import React,{useState} from 'react';
import  {Outlet} from  "react-router-dom"
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    return (
        <>
        <main className="page-wrapper">
            <div className={showSidebar==true ?  'page-body-wrapper xl:w-full 4xl:w-[calc(100%_-_14.375rem)] w-[calc(100%_-_15.8125rem)] ml-auto transition-all duration-300': ' page-body-wrapper xl:w-full 4xl:w-[calc(100%_-_14.375rem)]  ml-auto transition-all duration-300 !w-full'} >
        
                <Header showSidebar={showSidebar}  setShowSidebar = {setShowSidebar}  />
                <Sidebar showSidebar={showSidebar}  setShowSidebar = {setShowSidebar}  />

                <div className="page-body">
                    <div className="grid grid-cols-12 gap-card-gap">
                    <Outlet/>
                    </div>
                </div>
                
            </div>
        </main>

         
         
        </>
    );
};

export default MainLayout;