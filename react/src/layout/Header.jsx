import React, { useState } from 'react'
const Header = ({ showSidebar, setShowSidebar }) => {
    const [showNoti,setNoti] = useState(false)

    const ThemeAdd =()=> {
        let mode = localStorage.getItem("theme");
        if (mode=='dark') {
            localStorage.setItem("theme", ""); 
        }else{
            localStorage.setItem("theme", "dark");  
        }
        location.reload()
    }

  return (
    <>
        <header className={showSidebar==true ? 'fixed top-0 z-[6] xl:w-full 4xl:w-[calc(100%_-_14.375rem)]  ml-auto' : 'fixed top-0 z-[6] xl:w-full 4xl:w-[calc(100%_-_14.375rem)]  ml-auto !w-full'}>
            <div className="page-header transition-all bg-white shadow-header dark:bg-sidebar-dark">
                <div className="py-[11px] flex items-center xl:relative justify-between px-body-space gap-4">
                    <div className="left-header flex items-center gap-2">
                        <button onClick={() => setShowSidebar(true)} className={ showSidebar==true ?  'sidebar-toggle hide  ' : 'sidebar-toggle 11'}>
                            <svg xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"strokeWidth="1.5"stroke="currentColor"className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"/>
                            </svg>
                        </button>
                        <h1 className="flex items-center gap-1 text-xl font-extrabold leading-none sm:hidden dark:text-white 4xl:text-lg">Admin</h1>
                    </div>

                    <div className="right-header flex items-center flex-1 sm:gap-[calc(7px_+_(14_-_7)_*_((100vw_-_320px)_/_(1920_-_320)))] gap-[calc(16px_+_(20_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))]  justify-end">
                        <div className="icon-menu">
                            <ul className="flex items center">
                                
                                <li className="cursor-pointer flex items-center justify-center px-[calc(7px_+_(14_-_7)_*_((100vw_-_320px)_/_(1920_-_320)))] first:pl-0 last:pr-0  last:border-r-none border-r border-border-light dark:border-border-dark rtl:border-l rtl:border-r-0">
                                    {/* Notification Start */}
                                    <div className={`dropdown ${showNoti==true ? 'show' : ''}`}>
                                        <div onClick={()=> setNoti(!showNoti)}  className="indicator flex">
                                            <span className="indicator-item badge bg-success p-0 right-[4px] top-0 border-[2px] border-white w-[8px] h-[8px] rounded-full"/>
                                            <svg xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"strokeWidth="1.5"stroke="currentColor"className="w-6 h-6">
                                                <path strokeLinecap="round"strokeLinejoin="round"d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                                            </svg>
                                        </div>
                                        <div className="dropdown-menu !min-w-[280px] sm:!-right-[163px] rtl:sm:!-left-[163px] rtl:sm:!right-unset">
                                        <div className="flex items-center justify-between pb-[15px] border-b border-border-light">
                                            <h4 className="text-base font-bold text-title">
                                            Notification
                                            </h4>
                                            <button className="font-medium text-primary text-3xs">
                                            Mark All As Read
                                            </button>
                                        </div>
                                        <div className="search-box relative mt-4">
                                            <input
                                            className="bg-gray-light border dark:bg-sidebar-dark2  dark:border-border-dark border-border-light  w-full py-[8px] pl-[15px] pr-[30px] rounded-5 text-xs font-medium text-title"
                                            placeholder="Type to Search..."
                                            type="search"
                                            />
                                        </div>
                                        <ul className="mt-4 flex flex-col max-h-[214px] overflow-auto custom-scroll">
                                            <li className="flex items-center gap-3 px-2 py-3 transition-all duration-300 border-b last:border-b-0 dark:hover:bg-sidebar-dark2 border-border-light hover:bg-gray-light rounded-5">
                                            <a
                                                className="flex items-center gap-[12px]"
                                                href="./email.html"
                                            >
                                                <div className="indicator">
                                                {" "}
                                                <span className="chat-status status-online" />
                                                <div className="avatar">
                                                    <div className="w-10 rounded-full h-10 xl:w-9 xl:h-9">
                                                    <img
                                                        src="../../assets/images/avatar/2.jpg"
                                                        alt="Dmitriy Groshev"
                                                    />
                                                    </div>
                                                </div>
                                                </div>
                                                <div>
                                                <h4 className="text-xs font-semibold line-clamp-1 text-title">
                                                    Dmitriy Groshev
                                                </h4>
                                                <p className="text-xs font-semibold line-clamp-1 text-content">
                                                    Hi, i am josephin. How are you...{" "}
                                                </p>
                                                </div>
                                            </a>
                                            <div className="flex flex-col items-end gap-1 ml-auto">
                                                <span className="font-normal text-3xs text-content">
                                                17:12
                                                </span>
                                                <span className="leading-none p-1 badge bg-primary rounded-full text-3xs flex items-center justify-center min-w-[22px] min-h-[22px]">
                                                3
                                                </span>
                                            </div>
                                            </li>
                                            <li className="flex items-center gap-3 px-2 py-3 transition-all duration-300 border-b last:border-b-0 dark:hover:bg-sidebar-dark2 border-border-light hover:bg-gray-light rounded-5">
                                            <a
                                                className="flex items-center gap-[12px]"
                                                href="./email.html"
                                            >
                                                <div className="indicator">
                                                {" "}
                                                <span className="chat-status status-offline" />
                                                <div className="avatar">
                                                    <div className="w-10 rounded-full h-10 xl:w-9 xl:h-9">
                                                    <img
                                                        src="../../assets/images/avatar/3.jpg"
                                                        alt="Sufiya Elija"
                                                    />
                                                    </div>
                                                </div>
                                                </div>
                                                <div>
                                                <h4 className="text-xs font-semibold line-clamp-1 text-title">
                                                    Sufiya Elija
                                                </h4>
                                                <p className="text-xs font-semibold line-clamp-1 text-content">
                                                    I need job, Please help me.
                                                </p>
                                                </div>
                                            </a>
                                            <div className="flex flex-col items-end gap-1 ml-auto">
                                                <span className="font-normal text-3xs text-content">
                                                Fri
                                                </span>
                                                <span className="leading-none p-1 badge bg-primary rounded-full text-3xs flex items-center justify-center min-w-[22px] min-h-[22px]">
                                                32
                                                </span>
                                            </div>
                                            </li>
                                            <li className="flex items-center gap-3 px-2 py-3 transition-all duration-300 border-b last:border-b-0 dark:hover:bg-sidebar-dark2 border-border-light hover:bg-gray-light rounded-5">
                                            <a
                                                className="flex items-center gap-[12px]"
                                                href="./email.html"
                                            >
                                                <div className="indicator">
                                                {" "}
                                                <span className="chat-status status-online" />
                                                <div className="avatar">
                                                    <div className="w-10 rounded-full h-10 xl:w-9 xl:h-9">
                                                    <img
                                                        src="../../assets/images/avatar/5.jpg"
                                                        alt="Janis Evans"
                                                    />
                                                    </div>
                                                </div>
                                                </div>
                                                <div>
                                                <h4 className="text-xs font-semibold line-clamp-1 text-title">
                                                    Janis Evans
                                                </h4>
                                                <p className="text-xs font-semibold line-clamp-1 text-content">
                                                    Good Morning!
                                                </p>
                                                </div>
                                            </a>
                                            <div className="flex flex-col items-end gap-1 ml-auto">
                                                <span className="font-normal text-3xs text-content">
                                                8:22
                                                </span>
                                                <span className="leading-none p-1 badge bg-primary rounded-full text-3xs flex items-center justify-center min-w-[22px] min-h-[22px]">
                                                12
                                                </span>
                                            </div>
                                            </li>
                                            <li className="flex items-center gap-3 px-2 py-3 transition-all duration-300 border-b last:border-b-0 dark:hover:bg-sidebar-dark2 border-border-light hover:bg-gray-light rounded-5">
                                            <a
                                                className="flex items-center gap-[12px]"
                                                href="./email.html"
                                            >
                                                <div className="indicator">
                                                {" "}
                                                <span className="chat-status status-online" />
                                                <div className="avatar">
                                                    <div className="w-10 rounded-full h-10 xl:w-9 xl:h-9">
                                                    <img
                                                        src="../../assets/images/avatar/4.jpg"
                                                        alt="Mukrani Pabelo"
                                                    />
                                                    </div>
                                                </div>
                                                </div>
                                                <div>
                                                <h4 className="text-xs font-semibold line-clamp-1 text-title">
                                                    Mukrani Pabelo
                                                </h4>
                                                <p className="text-xs font-semibold line-clamp-1 text-content">
                                                    Hi, i am josephin. How are you...
                                                </p>
                                                </div>
                                            </a>
                                            <div className="flex flex-col items-end gap-1 ml-auto">
                                                <span className="font-normal text-3xs text-content">
                                                03:14
                                                </span>
                                                <span className="leading-none p-1 badge bg-primary rounded-full text-3xs flex items-center justify-center min-w-[22px] min-h-[22px]">
                                                10
                                                </span>
                                            </div>
                                            </li>
                                            <li className="flex items-center gap-3 px-2 py-3 transition-all duration-300 border-b last:border-b-0 dark:hover:bg-sidebar-dark2 border-border-light hover:bg-gray-light rounded-5">
                                            <a
                                                className="flex items-center gap-[12px]"
                                                href="./email.html"
                                            >
                                                <div className="indicator">
                                                {" "}
                                                <span className="chat-status status-offline" />
                                                <div className="avatar">
                                                    <div className="w-10 rounded-full h-10 xl:w-9 xl:h-9">
                                                    <img
                                                        src="../../assets/images/avatar/2.jpg"
                                                        alt="Josephin Water"
                                                    />
                                                    </div>
                                                </div>
                                                </div>
                                                <div>
                                                <h4 className="text-xs font-semibold line-clamp-1 text-title">
                                                    Josephin Water
                                                </h4>
                                                <p className="text-xs font-semibold line-clamp-1 text-content">
                                                    You’ve got some kind of a stom...
                                                </p>
                                                </div>
                                            </a>
                                            <div className="flex flex-col items-end gap-1 ml-auto">
                                                <span className="font-normal text-3xs text-content">
                                                Thu
                                                </span>
                                                <span className="leading-none p-1 badge bg-primary rounded-full text-3xs flex items-center justify-center min-w-[22px] min-h-[22px]">
                                                2
                                                </span>
                                            </div>
                                            </li>
                                            <li className="flex items-center gap-3 px-2 py-3 transition-all duration-300 border-b last:border-b-0 dark:hover:bg-sidebar-dark2 border-border-light hover:bg-gray-light rounded-5">
                                            <a
                                                className="flex items-center gap-[12px]"
                                                href="./email.html"
                                            >
                                                <div className="indicator">
                                                {" "}
                                                <span className="chat-status status-online" />
                                                <div className="avatar">
                                                    <div className="w-10 rounded-full h-10 xl:w-9 xl:h-9">
                                                    <img
                                                        src="../../assets/images/avatar/5.jpg"
                                                        alt="Janis Evans"
                                                    />
                                                    </div>
                                                </div>
                                                </div>
                                                <div>
                                                <h4 className="text-xs font-semibold line-clamp-1 text-title">
                                                    Janis Evans
                                                </h4>
                                                <p className="text-xs font-semibold line-clamp-1 text-content">
                                                    Good Morning!
                                                </p>
                                                </div>
                                            </a>
                                            <div className="flex flex-col items-end gap-1 ml-auto">
                                                <span className="font-normal text-3xs text-content">
                                                8:22
                                                </span>
                                                <span className="leading-none p-1 badge bg-primary rounded-full text-3xs flex items-center justify-center min-w-[22px] min-h-[22px]">
                                                12
                                                </span>
                                            </div>
                                            </li>
                                            <li className="flex items-center gap-3 px-2 py-3 transition-all duration-300 border-b last:border-b-0 dark:hover:bg-sidebar-dark2 border-border-light hover:bg-gray-light rounded-5">
                                            <a
                                                className="flex items-center gap-[12px]"
                                                href="./email.html"
                                            >
                                                <div className="indicator">
                                                {" "}
                                                <span className="chat-status status-offline" />
                                                <div className="avatar">
                                                    <div className="w-10 rounded-full h-10 xl:w-9 xl:h-9">
                                                    <img
                                                        src="../../assets/images/avatar/3.jpg"
                                                        alt="Sufiya Elija"
                                                    />
                                                    </div>
                                                </div>
                                                </div>
                                                <div>
                                                <h4 className="text-xs font-semibold line-clamp-1 text-title">
                                                    Sufiya Elija
                                                </h4>
                                                <p className="text-xs font-semibold line-clamp-1 text-content">
                                                    I need job, Please help me.
                                                </p>
                                                </div>
                                            </a>
                                            <div className="flex flex-col items-end gap-1 ml-auto">
                                                <span className="font-normal text-3xs text-content">
                                                Fri
                                                </span>
                                                <span className="leading-none p-1 badge bg-primary rounded-full text-3xs flex items-center justify-center min-w-[22px] min-h-[22px]">
                                                32
                                                </span>
                                            </div>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    {/* Notification End */}
                                </li>

                                <li className="cursor-pointer flex items-center justify-center px-[calc(7px_+_(14_-_7)_*_((100vw_-_320px)_/_(1920_-_320)))] first:pl-0 last:pr-0  last:border-r-none border-r border-border-light dark:border-border-dark rtl:border-l rtl:border-r-0">
                                    <div onClick={()=> ThemeAdd() }  id="dark-mode">
                                        <svg xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"strokeWidth="1.5"stroke="currentColor"className="w-6 h-6"><path strokeLinecap="round"strokeLinejoin="round"d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/></svg>
                                    </div>
                                </li>

                                <li className="cursor-pointer 2md:hidden flex items-center justify-center px-[calc(7px_+_(14_-_7)_*_((100vw_-_320px)_/_(1920_-_320)))] first:pl-0 last:pr-0  last:border-r-none border-r border-border-light dark:border-border-dark rtl:border-l rtl:border-r-0">
                                    {/* Message Start */}
                                    <div className="dropdown">
                                        <div className="indicator flex">
                                        <span className="indicator-item bg-danger badge p-0 right-[4px] top-0 border-[2px] border-white w-[8px] h-[8px] rounded-full" />
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
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                            />
                                        </svg>
                                        </div>
                                        <div className="dropdown-menu !min-w-[280px]">
                                        <div className="flex items-center justify-between pb-[15px] border-b border-border-light dark:border-border-dark">
                                            <h4 className="text-base font-bold text-title">Messages</h4>
                                            <div className="badge leading-none p-1 badge bg-primary rounded-full text-3xs flex items-center justify-center min-w-[22px] min-h-[22px]">
                                            25
                                            </div>
                                        </div>
                                        <ul className="mt-[15px] flex flex-col max-h-[214px] overflow-auto custom-scroll">
                                            <li className="flex items-center gap-3 px-2 py-3 transition-all duration-300 border-b last:border-b-0 border-border-light dark:border-border-dark hover:bg-gray-light dark:hover:bg-sidebar-dark2 rounded-5">
                                            <a
                                                className="flex items-center gap-[12px]"
                                                href="./chat-app.html"
                                            >
                                                <div className="relative shadow-lg bg-success flex items-center justify-center rounded-full p-2">
                                                <svg className="w-5 h-5 stroke-white">
                                                    <use href="../../assets/svg/sprite.svg#Chat"> </use>
                                                </svg>
                                                </div>
                                                <div>
                                                <h4 className="text-xs font-semibold line-clamp-1 text-title">
                                                    New Review Receive
                                                </h4>
                                                <p className="text-xs font-semibold line-clamp-1 text-content">
                                                    15 min ago
                                                </p>
                                                </div>
                                            </a>
                                            </li>
                                            <li className="flex items-center gap-3 px-2 py-3 transition-all duration-300 border-b last:border-b-0 border-border-light dark:border-border-dark hover:bg-gray-light dark:hover:bg-sidebar-dark2 rounded-5">
                                            <a
                                                className="flex items-center gap-[12px]"
                                                href="./chat-app.html"
                                            >
                                                <div className="relative shadow-lg bg-danger flex items-center justify-center rounded-full p-2">
                                                <svg className="w-5 h-5 stroke-white">
                                                    <use href="../../assets/svg/sprite.svg#Scan"> </use>
                                                </svg>
                                                </div>
                                                <div>
                                                <h4 className="text-xs font-semibold line-clamp-1 text-title">
                                                    Transaction $250 Success
                                                </h4>
                                                <p className="text-xs font-semibold line-clamp-1 text-content">
                                                    2 hours ago
                                                </p>
                                                </div>
                                            </a>
                                            </li>
                                            <li className="flex items-center gap-3 px-2 py-3 transition-all duration-300 border-b last:border-b-0 border-border-light dark:border-border-dark hover:bg-gray-light dark:hover:bg-sidebar-dark2 rounded-5">
                                            <a
                                                className="flex items-center gap-[12px]"
                                                href="./chat-app.html"
                                            >
                                                <div className="relative shadow-lg bg-warning flex items-center justify-center rounded-full p-2">
                                                <svg className="w-5 h-5 stroke-white">
                                                    <use href="../../assets/svg/sprite.svg#Buy"> </use>
                                                </svg>
                                                </div>
                                                <div>
                                                <h4 className="text-xs font-semibold line-clamp-1 text-title">
                                                    Order Place Success
                                                </h4>
                                                <p className="text-xs font-semibold line-clamp-1 text-content">
                                                    2 week ago
                                                </p>
                                                </div>
                                            </a>
                                            </li>
                                            <li className="flex items-center gap-3 px-2 py-3 transition-all duration-300 border-b last:border-b-0 border-border-light dark:border-border-dark hover:bg-gray-light dark:hover:bg-sidebar-dark2 rounded-5">
                                            <a
                                                className="flex items-center gap-[12px]"
                                                href="./chat-app.html"
                                            >
                                                <div className="relative shadow-lg bg-info flex items-center justify-center rounded-full p-2">
                                                <svg className="w-5 h-5 stroke-white">
                                                    <use href="../../assets/svg/sprite.svg#Lock"> </use>
                                                </svg>
                                                </div>
                                                <div>
                                                <h4 className="text-xs font-semibold line-clamp-1 text-title">
                                                    Netflix Subscription Expires
                                                </h4>
                                                <p className="text-xs font-semibold line-clamp-1 text-content">
                                                    4 days ago
                                                </p>
                                                </div>
                                            </a>
                                            </li>
                                            <li className="flex items-center gap-3 px-2 py-3 transition-all duration-300 border-b last:border-b-0 border-border-light dark:border-border-dark hover:bg-gray-light dark:hover:bg-sidebar-dark2 rounded-5">
                                            <a
                                                className="flex items-center gap-[12px]"
                                                href="./chat-app.html"
                                            >
                                                <div className="relative shadow-lg bg-danger flex items-center justify-center rounded-full p-2">
                                                <svg className="w-5 h-5 stroke-white">
                                                    <use href="../../assets/svg/sprite.svg#Discount">
                                                    {" "}
                                                    </use>
                                                </svg>
                                                </div>
                                                <div>
                                                <h4 className="text-xs font-semibold line-clamp-1 text-title">
                                                    Congratulations You Won $2500
                                                </h4>
                                                <p className="text-xs font-semibold line-clamp-1 text-content">
                                                    12 days ago
                                                </p>
                                                </div>
                                            </a>
                                            </li>
                                            <li className="flex items-center gap-3 px-2 py-3 transition-all duration-300 border-b last:border-b-0 border-border-light dark:border-border-dark hover:bg-gray-light dark:hover:bg-sidebar-dark2 rounded-5">
                                            <a
                                                className="flex items-center gap-[12px]"
                                                href="./chat-app.html"
                                            >
                                                <div className="relative shadow-lg bg-success flex items-center justify-center rounded-full p-2">
                                                <svg className="w-5 h-5 stroke-white">
                                                    <use href="../../assets/svg/sprite.svg#Upload">
                                                    {" "}
                                                    </use>
                                                </svg>
                                                </div>
                                                <div>
                                                <h4 className="text-xs font-semibold line-clamp-1 text-title">
                                                    Latest Updates On You Phone
                                                </h4>
                                                <p className="text-xs font-semibold line-clamp-1 text-content">
                                                    25 days ago
                                                </p>
                                                </div>
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </li>
                            </ul>
                        </div>
                        <ul className="profile-box flex items-center">
                        <li className="cursor-pointer flex- pl-[11px] language-border rtl:first:pr-0 first:pl-0 flex items-center">
                            {/* Profile Start */}
                            <div className="dropdown">
                            <div className="flex items-center gap-[10px] cursor-pointer">
                                <div>
                                <img
                                    className="w-[calc(35px_+_(40_-_35)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(35px_+_(40_-_35)_*_((100vw_-_320px)_/_(1920_-_320)))] rounded-full"
                                    src="../../assets/images/avatar/1.jpg"
                                    alt="avatar"
                                />
                                </div>
                                <div className="md:hidden">
                                <h4 className="text-xs font-bold dark:text-white">
                                    {" "}
                                    Helen Walter
                                </h4>
                                <span className="flex items-center gap-1 font-semibold text-3xs text-content">
                                    Admin
                                    <svg className="w-[6px] h-[4px]  dark:stroke-white">
                                    <use href="../../assets/svg/sprite.svg#Fill-Arrow"> </use>
                                    </svg>
                                </span>
                                </div>
                            </div>
                            <div className="dropdown-menu !min-w-[170px]">
                                <ul className="flex flex-col gap-3">
                                <li>
                                    <a
                                    className="flex items-center gap-2 text-title"
                                    href="user-profile.html"
                                    >
                                    <svg className="w-[18px] h-[18px] stroke-title dark:stroke-white">
                                        <use href="../../assets/svg/sprite.svg#2-User"> </use>
                                    </svg>
                                    Profile Setting
                                    </a>
                                </li>
                                <li>
                                    <a
                                    className="flex items-center gap-2 text-title"
                                    href="chat-app.html"
                                    >
                                    <svg className="w-[18px] h-[18px] stroke-title dark:stroke-white">
                                        <use href="../../assets/svg/sprite.svg#More-Square">
                                        {" "}
                                        </use>
                                    </svg>
                                    Message
                                    </a>
                                </li>
                                <li>
                                    <a
                                    className="flex items-center gap-2 text-title"
                                    href="todo.html"
                                    >
                                    <svg className="w-[18px] h-[18px] stroke-title dark:stroke-white">
                                        <use href="../../assets/svg/sprite.svg#Edit-Square">
                                        {" "}
                                        </use>
                                    </svg>
                                    Taskboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                    className="flex items-center gap-2 text-title"
                                    href="knowledgebase.html"
                                    >
                                    <svg className="w-[18px] h-[18px] stroke-title dark:stroke-white">
                                        <use href="../../assets/svg/sprite.svg#Shield-Done">
                                        {" "}
                                        </use>
                                    </svg>
                                    Help
                                    </a>
                                </li>
                                <li>
                                    <a
                                    className="flex items-center gap-2 text-title"
                                    href=""
                                    >
                                    <svg className="w-[18px] h-[18px] stroke-title dark:stroke-white">
                                        <use href="../../assets/svg/sprite.svg#Login"> </use>
                                    </svg>
                                    Logout
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </div>
                            {/* Profile End */}
                        </li>
                        </ul>
                    </div>
                </div>
                {/* Sub Header Start */}
                <div className="py-[14px] border-t border-border-light px-body-space dark:border-border-dark">
                    <div className="relative flex items-center justify-between lg:justify-start">
                        <ul className="flex items-center lg:hidden 2md:shadow-lg 2md:border 2md:border-border-light 2md:z-[5] 2md:p-4 2md:absolute 2md:top-[38px] 2md:rounded-5 2md:left-0 2md:items-start 2md:bg-white 2md:flex-col gap-[calc(8px_+_(31_-_8)_*_((100vw_-_320px)_/_(1920_-_320)))]">
                        <li className="dropdown on-hover-show cursor-pointer pb-[6px] transition-all relative group before:bg-primary before:absolute before:-translate-x-1/2 before:bottom-0 before:left-1/2 before:w-full before:h-[2px]">
                            <span className="text-xs font-bold transition-all text-primary">General</span>
                            <div className="dropdown-menu !min-w-[320px] !left-0 !right-unset !p-0  rtl:!left-unset rtl:!right-0">
                                <div className="grid grid-cols-12 gap-2">
                                    <div className="col-span-12">
                                        <ul className="gap-[10px] p-[15px]">
                                            <li className="p-2 transition-all duration-300 rounded-5 hover:bg-gray-light dark:hover:bg-sidebar-dark2">
                                                <a className="flex items-center gap-2"href="../template/index.html">
                                                    <div className="p-2 rounded-5  border border-primary">icon</div>
                                                    <div>
                                                        <h4 className="text-xs font-semibold capitalize text-title line-clamp-1">
                                                            Admin Dashboard
                                                        </h4>
                                                        <span className="text-xs font-medium text-content line-clamp-1">
                                                            Over view of all
                                                        </span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                            <li className="dropdown on-hover-show cursor-pointer pb-[6px] transition-all duration-300 relative group before:bg-primary before:absolute before:-translate-x-1/2 before:bottom-0 before:left-1/2 hover:before:w-full before:h-[2px] before:w-0 ">
                                <span className="text-xs font-bold transition-all duration-300 text-content group-hover:text-primary">
                                Components
                                </span>
                                <div className="dropdown-menu !min-w-[220px] !left-0 !right-unset rtl:!left-unset rtl:!right-[4.625rem] ">
                                    <ul className="flex flex-col gap-4 ">
                                        <li className="w-full dropdown on-hover-show group">
                                        <a
                                            className="flex items-center justify-between gap-2"
                                            href=""
                                        >
                                            <span className="flex items-center gap-2">
                                            <svg className="w-5 h-5 stroke-title">
                                                <use href="../../assets/svg/sprite.svg#Folder"> </use>
                                            </svg>
                                            <small className="text-xs leading-7">Ui Kits</small>
                                            </span>
                                            <svg className="w-4 h-4 stroke-title ml-auto">
                                            <use href="../../assets/svg/sprite.svg#Arrow-Right-2">
                                                {" "}
                                            </use>
                                            </svg>
                                        </a>
                                        <div className="dropdown-menu dropdown-sub-menu rtl:!left-unset rtl:!right-[24.938rem]">
                                            <ul className="flex flex-col gap-2">
                                            <li>
                                                <a href="../template/./alert.html">Alert</a>
                                            </li>
                                            <li>
                                                <a href="../template/./avatars.html">Avatars</a>
                                            </li>
                                            <li>
                                                <a href="../template/./badge.html">Badge</a>
                                            </li>
                                            <li>
                                                <a href="../template/./button.html">Button</a>
                                            </li>
                                            <li>
                                                <a href="../template/./collapse.html">Collapse</a>
                                            </li>
                                            <li>
                                                <a href="../template/./divider.html">Divider</a>
                                            </li>
                                            <li>
                                                <a href="../template/./dropdown.html">Dropdown</a>
                                            </li>
                                            <li>
                                                <a href="../template/./modal.html">Modal</a>
                                            </li>
                                            <li>
                                                <a href="../template/./progress.html">Progress</a>
                                            </li>
                                            <li>
                                                <a href="../template/./tooltip.html">Tooltip</a>
                                            </li>
                                            <li>
                                                <a href="../template/./typography.html">Typography</a>
                                            </li>
                                            </ul>
                                        </div>
                                        </li>
                                        <li className="w-full dropdown on-hover-show group">
                                        <a
                                            className="flex items-center justify-between gap-2"
                                            href=""
                                        >
                                            <span className="flex items-center gap-2">
                                            <svg className="w-5 h-5 stroke-title">
                                                <use href="../../assets/svg/sprite.svg#Ticket-Star">
                                                {" "}
                                                </use>
                                            </svg>
                                            <small className="text-xs leading-7">Bonus Ui</small>
                                            </span>
                                            <svg className="w-4 h-4 stroke-title ml-auto">
                                            <use href="../../assets/svg/sprite.svg#Arrow-Right-2">
                                                {" "}
                                            </use>
                                            </svg>
                                        </a>
                                        <div className="dropdown-menu dropdown-sub-menu rtl:!left-unset rtl:!right-[24.938rem]">
                                            <ul className="flex flex-col gap-2">
                                            <li>
                                                <a href="../template/./breadcrumb.html">Breadcrumb</a>
                                            </li>
                                            <li>
                                                <a href="../template/./carousel.html">Carousel</a>
                                            </li>
                                            <li>
                                                <a href="../template/./countdown.html">Countdown</a>
                                            </li>
                                            <li>
                                                <a href="../template/./indicator.html">Indicator</a>
                                            </li>
                                            <li>
                                                <a href="../template/./mask.html">Mask</a>
                                            </li>
                                            <li>
                                                <a href="../template/./pagination.html">Pagination</a>
                                            </li>
                                            <li>
                                                <a href="../template/./radial-progress.html">
                                                Radial Progress
                                                </a>
                                            </li>
                                            <li>
                                                <a href="../template/./rating.html">Rating</a>
                                            </li>
                                            <li>
                                                <a href="../template/./stack.html">Stack</a>
                                            </li>
                                            <li>
                                                <a href="../template/./steps.html">Steps</a>
                                            </li>
                                            <li>
                                                <a href="../template/./swap.html">Swap</a>
                                            </li>
                                            <li>
                                                <a href="../template/./swiper-slider.html">
                                                Swiper Slider
                                                </a>
                                            </li>
                                            <li>
                                                <a href="../template/./tabs.html">Tabs</a>
                                            </li>
                                            </ul>
                                        </div>
                                        </li>
                                        <li className="w-full dropdown on-hover-show group">
                                        <a
                                            className="flex items-center justify-between gap-2"
                                            href=""
                                        >
                                            <span className="flex items-center gap-2">
                                            <svg className="w-5 h-5 stroke-title">
                                                <use href="../../assets/svg/sprite.svg#Danger-Circle">
                                                {" "}
                                                </use>
                                            </svg>
                                            <small className="text-xs leading-7">Icons</small>
                                            </span>
                                            <svg className="w-4 h-4 stroke-title ml-auto">
                                            <use href="../../assets/svg/sprite.svg#Arrow-Right-2">
                                                {" "}
                                            </use>
                                            </svg>
                                        </a>
                                        <div className="dropdown-menu dropdown-sub-menu rtl:!left-unset rtl:!right-[24.938rem]">
                                            <ul className="flex flex-col gap-2">
                                            <li>
                                                <a href="../template/./feather.html">Feather</a>
                                            </li>
                                            <li>
                                                <a href="../template/./fontawesome.html">
                                                Font Awesome
                                                </a>
                                            </li>
                                            <li>
                                                <a href="../template/./iconly.html">Iconly</a>
                                            </li>
                                            </ul>
                                        </div>
                                        </li>
                                        <li className="w-full ">
                                        <a
                                            className="flex items-center justify-between gap-2"
                                            href="../template/apex-chart.html"
                                        >
                                            <span className="flex items-center gap-2">
                                            <svg className="w-5 h-5 stroke-title">
                                                <use href="../../assets/svg/sprite.svg#Chart"> </use>
                                            </svg>
                                            <small className="text-xs leading-7">Apex Chart</small>
                                            </span>
                                        </a>
                                        </li>
                                        <li className="w-full ">
                                        <a
                                            className="flex items-center justify-between gap-2"
                                            href="../template/wow-animation.html"
                                        >
                                            <span className="flex items-center gap-2">
                                            <svg className="w-5 h-5 stroke-title">
                                                <use href="../../assets/svg/sprite.svg#Scan"> </use>
                                            </svg>
                                            <small className="text-xs leading-7">Wow Animation</small>
                                            </span>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Sub Header End */}
            </div>
        </header>
    </>
  );
};

export default Header;
