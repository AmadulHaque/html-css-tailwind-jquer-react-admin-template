import React ,{useEffect, useState} from 'react'
import logo  from '../assets/images/logo/logo.png'
import {Link,useLocation} from 'react-router-dom'
const  Sidebar  = ({ showSidebar, setShowSidebar }) => {
    const [path, setPath] = useState('/');
    const [rootPath, setRootPath] = useState('');
    const { pathname } = useLocation();
    useEffect(()=>{
        setPath(pathname)
    },[pathname])

    const handleLinkClick = (newPath) => {
        if (rootPath==newPath) {
            setRootPath(''); 
        }else{
            setRootPath(newPath);
        }
    };

  return (
    <>
        <div className={`page-sidebar sidebar-dark unique-sidebar ${showSidebar==true ? '' : 'hide-show-sidebar'} `}>
        <aside className="sidebar">
            <div className="logo-wrapper">
            <a href="/">
                {" "}
                <img
                className="w-full full-sidebar"
                src={logo}
                alt="logo"
                />
            </a>
            <button onClick={() => setShowSidebar(false)}  className="sidebar-btn">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                />
                </svg>
            </button>
            </div>
            <div className="search-wrapper">
            <div className="search-box">
                <input className="search" placeholder="Search" type="search" />
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
                </svg>
            </div>
            </div>
            <nav className="sidebar-main">
            <ul className="sidebar-links custom-scroll">

                <li className="title">General</li>
                <li className={`sidebar-list ${path=='/' ? 'active' :'' }`}>
                    <Link to='/' className={`sidebar-link sidebar-title ${path=='/' ? 'active' :'' }`}><span>
                        <svg xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"strokeWidth="1.5"stroke="currentColor"className="w-6 h-6"><path strokeLinecap="round"strokeLinejoin="round"d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>
                        <span className="sidebar-name">Dashboard</span></span>
                    </Link>
                </li>

                <li className={`sidebar-list ${rootPath=='/home' ? 'active' :'' }`}>
                    <a onClick={() => handleLinkClick('/home')} className="sidebar-link sidebar-title h-[15px] cursor-pointer">
                        <span><svg xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"strokeWidth="1.5"stroke="currentColor"className="w-6 h-6"><path strokeLinecap="round"strokeLinejoin="round"d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/></svg><span className="sidebar-name">Forms</span></span>
                        <svg xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"strokeWidth="1.5"stroke="currentColor"className="w-6 h-6"><path strokeLinecap="round"strokeLinejoin="round"d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
                    </a>
                    <ul style={{ display: "none" }} className={`sidebar-submenu  ${rootPath=='/home' ? 's-a-s' : '' }`} >

                        <li>
                            <Link to='/page-one' className={`${path=='/page-one' ? 'active' :'' }`}>Page One</Link>
                        </li>

                        <li>
                            <Link to='/page-two' className={`${path=='/page-two' ? 'active' :'' }`}>Page Two</Link>
                        </li>
                      
                    </ul>
                </li>
             
            </ul>
            </nav>
        </aside>
        </div>
    </>
  );
};

export default Sidebar;