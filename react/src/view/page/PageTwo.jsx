import React from 'react';

const PageTwo = () => {
    return (
        <>
            <div className="col-span-3 2xl:col-span-4">
                <div className="card gap-0 lg:z-10 2xl:p-card-spacing lg:p-3 left-sidebar-aside z-[3] lg:w-[280px] sticky min-lg:top-0 sm:w-[269px] lg:fixed lg:h-[100vh]">
                    <button className="justify-end hidden mb-3 lg:flex left-sidebar-toggle absolute right-[-35px] top-0 bg-gray-light dark:bg-sidebar-dark2 p-2 ">
                    {" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-x w-5 h-5 stroke-title"
                    >
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                    </button>
                    <label className="button-label btn-primary flex gap-2 items-center justify-center w-full text-sm"htmlFor="todo-modal">
                    <svg xmlns="http://www.w3.org/2000/svg"width={24}height={24}viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth={2}strokeLinecap="round"strokeLinejoin="round"className="feather feather-plus w-[1.125rem] h-[1.125rem] stroke-white">
                        <line x1={12} y1={5} x2={12} y2={19} />
                        <line x1={5} y1={12} x2={19} y2={12} />
                    </svg>
                    New Task
                    </label>
                    <div className="mt-4 bg-gray-light dark:bg-sidebar-dark2 lg:h-full">
                    <ul className="flex flex-col gap-0">
                        <li className="pl-3 pr-2 rounded-5 rtl:pl-2 rtl:rounded-tr-none rtl:rounded-br-none  dark:bg-sidebar-dark  dark:hover:bg-sidebar-dark rtl:rounded-tl-[25px] rtl:rounded-bl-[25px]  hover:rounded-br-[25px] rtl:hover:rounded-tr-none rtl:hover:rounded-br-none rtl:hover:rounded-tl-[25px] rtl:hover:rounded-bl-[25px] py-[0.6rem] first:text-primary last:mb-4 hover:bg-white dark:hover:bg-mode-200 mr-4 first:mt-[20px] hover:rounded-tr-[25px] first:bg-white first:rounded-tr-[25px] first:rounded-br-[25px]">
                        <a
                            className="flex items-center justify-between"
                            href="javascript:void(0)"
                        >
                            <span className="flex items-center gap-2">
                            <svg className="w-[1.125rem] h-[1.125rem] stroke-primary">
                                <use href="../../assets/svg/sprite.svg#Message"> </use>
                            </svg>
                            <small className="text-xs font-medium text-primary ">Index</small>
                            </span>
                            <h6 className="text-sm text-primary">(30)</h6>
                        </a>
                        </li>
                        <li className="pl-3 pr-2 rounded-5 rtl:pl-2 hover:rounded-tr-[25px] dark:hover:bg-sidebar-dark rtl:hover:rounded-tr-none rtl:hover:rounded-br-none rtl:hover:rounded-tl-[25px] rtl:hover:rounded-bl-[25px] py-[0.6rem] first:text-primary last:mb-4 hover:bg-white dark:hover:bg-mode-200 mr-4 first:mt-[20px] hover:rounded-br-[25px] first:bg-white first:rounded-tr-[25px] first:rounded-br-[25px]">
                        <a
                            className="flex items-center justify-between"
                            href="javascript:void(0)"
                        >
                            <span className="flex items-center gap-2">
                            <svg className="w-[1.125rem] h-[1.125rem] stroke-title">
                                <use href="../../assets/svg/sprite.svg#Document"> </use>
                            </svg>
                            <small className="text-xs font-medium text-title">All Task</small>
                            </span>
                            <h6 className="text-sm text-title">(152)</h6>
                        </a>
                        </li>
                        <li className="pl-3 pr-2 rounded-5 rtl:pl-2  dark:hover:bg-sidebar-dark rtl:hover:rounded-tr-none rtl:hover:rounded-br-none rtl:hover:rounded-tl-[25px] rtl:hover:rounded-bl-[25px] py-[0.6rem] first:text-primary last:mb-4 hover:bg-white dark:hover:bg-mode-200 mr-4 first:mt-[20px] hover:rounded-tr-[25px] hover:rounded-br-[25px] first:bg-white first:rounded-tr-[25px] first:rounded-br-[25px]">
                        <a
                            className="flex items-center justify-between"
                            href="javascript:void(0)"
                        >
                            <span className="flex items-center gap-2">
                            <svg className="w-[1.125rem] h-[1.125rem] stroke-title">
                                <use href="../../assets/svg/sprite.svg#2-User"> </use>
                            </svg>
                            <small className="text-xs font-medium text-title">People</small>
                            </span>
                            <h6 className="text-sm text-title" />
                        </a>
                        </li>
                        <li className="pl-3 pr-2 rounded-5 rtl:pl-2 dark:hover:bg-sidebar-dark rtl:hover:rounded-tr-none rtl:hover:rounded-br-none rtl:hover:rounded-tl-[25px] rtl:hover:rounded-bl-[25px] py-[0.6rem] first:text-primary last:mb-4 hover:bg-white dark:hover:bg-mode-200 mr-4 first:mt-[20px] hover:rounded-tr-[25px] hover:rounded-br-[25px] first:bg-white first:rounded-tr-[25px] first:rounded-br-[25px]">
                        <a
                            className="flex items-center justify-between"
                            href="javascript:void(0)"
                        >
                            <span className="flex items-center gap-2">
                            <svg className="w-[1.125rem] h-[1.125rem] stroke-title">
                                <use href="../../assets/svg/sprite.svg#Ticket-Star"> </use>
                            </svg>
                            <small className="text-xs font-medium text-title">
                                Important
                            </small>
                            </span>
                            <h6 className="text-sm text-title" />
                        </a>
                        </li>
                        <li className="pl-3 pr-2 rounded-5 rtl:pl-2 dark:hover:bg-sidebar-dark rtl:hover:rounded-tr-none rtl:hover:rounded-br-none rtl:hover:rounded-tl-[25px] rtl:hover:rounded-bl-[25px] py-[0.6rem] first:text-primary last:mb-4 hover:bg-white dark:hover:bg-mode-200 mr-4 first:mt-[20px] hover:rounded-tr-[25px] hover:rounded-br-[25px] first:bg-white first:rounded-tr-[25px] first:rounded-br-[25px]">
                        <a
                            className="flex items-center justify-between"
                            href="javascript:void(0)"
                        >
                            <span className="flex items-center gap-2">
                            <svg className="w-[1.125rem] h-[1.125rem] stroke-title">
                                <use href="../../assets/svg/sprite.svg#Tick-Square"> </use>
                            </svg>
                            <small className="text-xs font-medium text-title">Done</small>
                            </span>
                            <h6 className="text-sm text-title" />
                        </a>
                        </li>
                        <li className="pl-3 pr-2 rounded-5 rtl:pl-2  dark:hover:bg-sidebar-dark rtl:hover:rounded-tr-none rtl:hover:rounded-br-none rtl:hover:rounded-tl-[25px] rtl:hover:rounded-bl-[25px] py-[0.6rem] first:text-primary last:mb-4 hover:bg-white dark:hover:bg-mode-200 mr-4 first:mt-[20px] hover:rounded-tr-[25px] hover:rounded-br-[25px] first:bg-white first:rounded-tr-[25px] first:rounded-br-[25px]">
                        <a
                            className="flex items-center justify-between"
                            href="javascript:void(0)"
                        >
                            <span className="flex items-center gap-2">
                            <svg className="w-[1.125rem] h-[1.125rem] stroke-title">
                                <use href="../../assets/svg/sprite.svg#Discovery"> </use>
                            </svg>
                            <small className="text-xs font-medium text-title">New Task</small>
                            </span>
                            <h6 className="text-sm text-title" />
                        </a>
                        </li>
                        <li className="pl-3 pr-2 rounded-5 rtl:pl-2 dark:hover:bg-sidebar-dark rtl:hover:rounded-tr-none rtl:hover:rounded-br-none rtl:hover:rounded-tl-[25px] rtl:hover:rounded-bl-[25px] py-[0.6rem] first:text-primary last:mb-4 hover:bg-white dark:hover:bg-mode-200 mr-4 first:mt-[20px] hover:rounded-tr-[25px] hover:rounded-br-[25px] first:bg-white first:rounded-tr-[25px] first:rounded-br-[25px]">
                        <a
                            className="flex items-center justify-between"
                            href="javascript:void(0)"
                        >
                            <span className="flex items-center gap-2">
                            <svg className="w-[1.125rem] h-[1.125rem] stroke-title">
                                <use href="../../assets/svg/sprite.svg#Work"> </use>
                            </svg>
                            <small className="text-xs font-medium text-title">Do Task</small>
                            </span>
                            <h6 className="text-sm text-title">(11)</h6>
                        </a>
                        </li>
                        <li className="pl-3 pr-2 rounded-5 rtl:pl-2 dark:hover:bg-sidebar-dark rtl:hover:rounded-tr-none rtl:hover:rounded-br-none rtl:hover:rounded-tl-[25px] rtl:hover:rounded-bl-[25px] py-[0.6rem] first:text-primary last:mb-4 hover:bg-white dark:hover:bg-mode-200 mr-4 first:mt-[20px] hover:rounded-tr-[25px] hover:rounded-br-[25px] first:bg-white first:rounded-tr-[25px] first:rounded-br-[25px]">
                        <a
                            className="flex items-center justify-between"
                            href="javascript:void(0)"
                        >
                            <span className="flex items-center gap-2">
                            <svg className="w-[1.125rem] h-[1.125rem] stroke-title">
                                <use href="../../assets/svg/sprite.svg#Info-Circle"> </use>
                            </svg>
                            <small className="text-xs font-medium text-title">
                                In Progress
                            </small>
                            </span>
                            <h6 className="text-sm text-title">(30)</h6>
                        </a>
                        </li>
                        <li className="pl-3 pr-2 rounded-5 rtl:pl-2 dark:hover:bg-sidebar-dark rtl:hover:rounded-tr-none rtl:hover:rounded-br-none rtl:hover:rounded-tl-[25px] rtl:hover:rounded-bl-[25px] py-[0.6rem] first:text-primary last:mb-4 hover:bg-white dark:hover:bg-mode-200 mr-4 first:mt-[20px] hover:rounded-tr-[25px] hover:rounded-br-[25px] first:bg-white first:rounded-tr-[25px] first:rounded-br-[25px]">
                        <a
                            className="flex items-center justify-between"
                            href="javascript:void(0)"
                        >
                            <span className="flex items-center gap-2">
                            <svg className="w-[1.125rem] h-[1.125rem] stroke-title">
                                <use href="../../assets/svg/sprite.svg#Star"> </use>
                            </svg>
                            <small className="text-xs font-medium text-title">Starred</small>
                            </span>
                            <h6 className="text-sm text-title" />
                        </a>
                        </li>
                        <li className="pl-3 pr-2 rounded-5 rtl:pl-2  dark:hover:bg-sidebar-dark rtl:hover:rounded-tr-none rtl:hover:rounded-br-none rtl:hover:rounded-tl-[25px] rtl:hover:rounded-bl-[25px] py-[0.6rem] first:text-primary last:mb-4 hover:bg-white dark:hover:bg-mode-200 mr-4 first:mt-[20px] hover:rounded-tr-[25px] hover:rounded-br-[25px] first:bg-white first:rounded-tr-[25px] first:rounded-br-[25px]">
                        <a
                            className="flex items-center justify-between"
                            href="javascript:void(0)"
                        >
                            <span className="flex items-center gap-2">
                            <svg className="w-[1.125rem] h-[1.125rem] stroke-title">
                                <use href="../../assets/svg/sprite.svg#Download"> </use>
                            </svg>
                            <small className="text-xs font-medium text-title">Archive</small>
                            </span>
                            <h6 className="text-sm text-title" />
                        </a>
                        </li>
                        <li className="pl-3 pr-2 rounded-5 rtl:pl-2 dark:hover:bg-sidebar-dark rtl:hover:rounded-tr-none rtl:hover:rounded-br-none rtl:hover:rounded-tl-[25px] rtl:hover:rounded-bl-[25px] py-[0.6rem] first:text-primary last:mb-4 hover:bg-white dark:hover:bg-mode-200 mr-4 first:mt-[20px] hover:rounded-tr-[25px] hover:rounded-br-[25px] first:bg-white first:rounded-tr-[25px] first:rounded-br-[25px]">
                        <a
                            className="flex items-center justify-between"
                            href="javascript:void(0)"
                        >
                            <span className="flex items-center gap-2">
                            <svg className="w-[1.125rem] h-[1.125rem] stroke-title">
                                <use href="../../assets/svg/sprite.svg#Delete"> </use>
                            </svg>
                            <small className="text-xs font-medium text-title">Trash</small>
                            </span>
                            <h6 className="text-sm text-title">(26)</h6>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="col-span-9 2xl:col-span-8 lg:col-span-12">
                <div className="flex flex-col gap-2 card h-[548px] custom-scroll overflow-auto">
                    <div className="flex justify-between items-center">
                    <h5 className="text-title font-bold mb-2">Todo List</h5>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-align-left hidden w-5 h-5 cursor-pointer stroke-title left-sidebar-toggle-btn lg:block"
                    >
                        <line x1={17} y1={10} x2={3} y2={10} />
                        <line x1={21} y1={6} x2={3} y2={6} />
                        <line x1={21} y1={14} x2={3} y2={14} />
                        <line x1={17} y1={18} x2={3} y2={18} />
                    </svg>
                    </div>
                    <div className="overflow-auto max-h-[478px] custom-scroll">
                    <ul className="mb-7 todo-list todo-app gap-[calc(8px_+_(20_-_8)_*_((100vw_-_320px)_/_(1920_-_320)))]">
                        <li className="todo-item flex items-center gap-2 justify-between pt-[13px] mt-[13px] border-t border-light dark:border-border-dark dark:border-t first:mt-0 first:pt-0 first:border-none">
                        <div className="flex items-center justify-center">
                            <div className="check-custom flex items-center justify-center relative pl-[calc(10px_+_(15_-_10)_*_((100vw_-_320px)_/_(1920_-_320)))] pr-[calc(7px_+_(12_-_7)_*_((100vw_-_320px)_/_(1920_-_320)))] py-[3px]">
                            <span className="absolute top-0 bottom-0 ltr:left-0 rtl:right-0 w-[3px] line h-full rounded-5" />
                            <div className="relative w-5 h-5">
                                <input
                                className="todo-check w-full h-full relative z-[2] opacity-0"
                                type="checkbox"
                                />
                                <span className="check absolute inset-0 flex items-center justify-center rounded-5 w-full h-full z-[1] p-[3px] bg-gray-200 dark:bg-mode-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-check check-icon w-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] transition-all opacity-0"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                </span>
                            </div>
                            </div>
                            <div className="max-w-[calc(48px_+_(650_-_48)_*_((100vw_-_320px)_/_(1920_-_320)))] edit-div min-lg:min-w-[calc(66px_+_(650_-_66)_*_((100vw_-_320px)_/_(1920_-_320)))] min-w-[calc(120px_+_(650_-_120)_*_((100vw_-_320px)_/_(1920_-_320)))]">
                            <h5 className="font-medium text-dark truncate text-xs focus:border focus:border-light dark:focus:border-border-dark focus:outline-none focus:px-2 focus:rounded-5">
                                Weekly Bigbazar Shopping
                            </h5>
                            </div>
                        </div>
                        <div>
                            <ul className="flex gap-3 todo-sublist">
                            <li className="cursor-pointer">
                                <div className="badge badge-sm capitalize px-3 font-bold rounded-full text-primary bg-primary-extralight priority-low !text-3xs">
                                low
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <div className="dark:bg-sidebar-dark2 badge badge-sm capitalize px-3 font-bold rounded-full text-success bg-success-light status-pending !text-3xs">
                                pending
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-edit transition-all stroke-twitter opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] edit"
                                >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-trash transition-all stroke-danger opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] delete"
                                >
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                </svg>
                            </li>
                            </ul>
                        </div>
                        </li>
                        <li className="todo-item flex items-center gap-2 justify-between pt-[13px] mt-[13px] border-t border-light dark:border-border-dark dark:border-t first:mt-0 first:pt-0 first:border-none">
                        <div className="flex items-center justify-center">
                            <div className="check-custom flex items-center justify-center relative pl-[calc(10px_+_(15_-_10)_*_((100vw_-_320px)_/_(1920_-_320)))] pr-[calc(7px_+_(12_-_7)_*_((100vw_-_320px)_/_(1920_-_320)))] py-[3px]">
                            <span className="absolute top-0 bottom-0 ltr:left-0 rtl:right-0 w-[3px] line h-full rounded-5" />
                            <div className="relative w-5 h-5">
                                <input
                                className="todo-check w-full h-full relative z-[2] opacity-0"
                                type="checkbox"
                                defaultChecked="checked"
                                />
                                <span className="check absolute inset-0 flex items-center justify-center rounded-5 w-full h-full z-[1] p-[3px] bg-gray-200 dark:bg-mode-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-check check-icon w-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] transition-all opacity-0"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                </span>
                            </div>
                            </div>
                            <div className="max-w-[calc(48px_+_(650_-_48)_*_((100vw_-_320px)_/_(1920_-_320)))] edit-div min-lg:min-w-[calc(66px_+_(650_-_66)_*_((100vw_-_320px)_/_(1920_-_320)))] min-w-[calc(120px_+_(650_-_120)_*_((100vw_-_320px)_/_(1920_-_320)))]">
                            <h5 className="font-medium text-dark truncate text-xs focus:border focus:border-light dark:focus:border-border-dark focus:outline-none focus:px-2 focus:rounded-5">
                                Meeting with Advanced photographer{" "}
                            </h5>
                            </div>
                        </div>
                        <div>
                            <ul className="flex gap-3 todo-sublist">
                            <li className="cursor-pointer">
                                <div className="badge badge-sm capitalize px-3 font-bold rounded-full text-primary bg-primary-extralight priority-high !text-3xs">
                                high
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <div className="dark:bg-sidebar-dark2 badge badge-sm capitalize px-3 font-bold rounded-full text-success bg-success-light status-completed !text-3xs">
                                completed
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-edit transition-all stroke-twitter opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] edit"
                                >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-trash transition-all stroke-danger opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] delete"
                                >
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                </svg>
                            </li>
                            </ul>
                        </div>
                        </li>
                        <li className="todo-item flex items-center gap-2 justify-between pt-[13px] mt-[13px] border-t border-light dark:border-border-dark dark:border-t first:mt-0 first:pt-0 first:border-none">
                        <div className="flex items-center justify-center">
                            <div className="check-custom flex items-center justify-center relative pl-[calc(10px_+_(15_-_10)_*_((100vw_-_320px)_/_(1920_-_320)))] pr-[calc(7px_+_(12_-_7)_*_((100vw_-_320px)_/_(1920_-_320)))] py-[3px]">
                            <span className="absolute top-0 bottom-0 ltr:left-0 rtl:right-0 w-[3px] line h-full rounded-5" />
                            <div className="relative w-5 h-5">
                                <input
                                className="todo-check w-full h-full relative z-[2] opacity-0"
                                type="checkbox"
                                />
                                <span className="check absolute inset-0 flex items-center justify-center rounded-5 w-full h-full z-[1] p-[3px] bg-gray-200 dark:bg-mode-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-check check-icon w-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] transition-all opacity-0"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                </span>
                            </div>
                            </div>
                            <div className="max-w-[calc(48px_+_(650_-_48)_*_((100vw_-_320px)_/_(1920_-_320)))] edit-div min-lg:min-w-[calc(66px_+_(650_-_66)_*_((100vw_-_320px)_/_(1920_-_320)))] min-w-[calc(120px_+_(650_-_120)_*_((100vw_-_320px)_/_(1920_-_320)))]">
                            <h5 className="font-medium text-dark truncate text-xs focus:border focus:border-light dark:focus:border-border-dark focus:outline-none focus:px-2 focus:rounded-5">
                                Go Outside Picnic on Sunday
                            </h5>
                            </div>
                        </div>
                        <div>
                            <ul className="flex gap-3 todo-sublist">
                            <li className="cursor-pointer">
                                <div className="badge badge-sm capitalize px-3 font-bold rounded-full text-primary bg-primary-extralight priority-medium !text-3xs">
                                medium
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <div className="dark:bg-sidebar-dark2 badge badge-sm capitalize px-3 font-bold rounded-full text-success bg-success-light status-inprogress !text-3xs">
                                inprogress
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-edit transition-all stroke-twitter opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] edit"
                                >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-trash transition-all stroke-danger opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] delete"
                                >
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                </svg>
                            </li>
                            </ul>
                        </div>
                        </li>
                        <li className="todo-item flex items-center gap-2 justify-between pt-[13px] mt-[13px] border-t border-light dark:border-border-dark dark:border-t first:mt-0 first:pt-0 first:border-none">
                        <div className="flex items-center justify-center">
                            <div className="check-custom flex items-center justify-center relative pl-[calc(10px_+_(15_-_10)_*_((100vw_-_320px)_/_(1920_-_320)))] pr-[calc(7px_+_(12_-_7)_*_((100vw_-_320px)_/_(1920_-_320)))] py-[3px]">
                            <span className="absolute top-0 bottom-0 ltr:left-0 rtl:right-0 w-[3px] line h-full rounded-5" />
                            <div className="relative w-5 h-5">
                                <input
                                className="todo-check w-full h-full relative z-[2] opacity-0"
                                type="checkbox"
                                defaultChecked="checked"
                                />
                                <span className="check absolute inset-0 flex items-center justify-center rounded-5 w-full h-full z-[1] p-[3px] bg-gray-200 dark:bg-mode-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-check check-icon w-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] transition-all opacity-0"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                </span>
                            </div>
                            </div>
                            <div className="max-w-[calc(48px_+_(650_-_48)_*_((100vw_-_320px)_/_(1920_-_320)))] edit-div min-lg:min-w-[calc(66px_+_(650_-_66)_*_((100vw_-_320px)_/_(1920_-_320)))] min-w-[calc(120px_+_(650_-_120)_*_((100vw_-_320px)_/_(1920_-_320)))]">
                            <h5 className="font-medium text-dark truncate text-xs focus:border focus:border-light dark:focus:border-border-dark focus:outline-none focus:px-2 focus:rounded-5">
                                Complete Assignment before deadline 5 Jan. 2023
                            </h5>
                            </div>
                        </div>
                        <div>
                            <ul className="flex gap-3 todo-sublist">
                            <li className="cursor-pointer">
                                <div className="badge badge-sm capitalize px-3 font-bold rounded-full text-primary bg-primary-extralight priority-medium !text-3xs">
                                medium
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <div className="dark:bg-sidebar-dark2 badge badge-sm capitalize px-3 font-bold rounded-full text-success bg-success-light status-completed !text-3xs">
                                completed
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-edit transition-all stroke-twitter opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] edit"
                                >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-trash transition-all stroke-danger opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] delete"
                                >
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                </svg>
                            </li>
                            </ul>
                        </div>
                        </li>
                        <li className="todo-item flex items-center gap-2 justify-between pt-[13px] mt-[13px] border-t border-light dark:border-border-dark dark:border-t first:mt-0 first:pt-0 first:border-none">
                        <div className="flex items-center justify-center">
                            <div className="check-custom flex items-center justify-center relative pl-[calc(10px_+_(15_-_10)_*_((100vw_-_320px)_/_(1920_-_320)))] pr-[calc(7px_+_(12_-_7)_*_((100vw_-_320px)_/_(1920_-_320)))] py-[3px]">
                            <span className="absolute top-0 bottom-0 ltr:left-0 rtl:right-0 w-[3px] line h-full rounded-5" />
                            <div className="relative w-5 h-5">
                                <input
                                className="todo-check w-full h-full relative z-[2] opacity-0"
                                type="checkbox"
                                />
                                <span className="check absolute inset-0 flex items-center justify-center rounded-5 w-full h-full z-[1] p-[3px] bg-gray-200 dark:bg-mode-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-check check-icon w-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] transition-all opacity-0"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                </span>
                            </div>
                            </div>
                            <div className="max-w-[calc(48px_+_(650_-_48)_*_((100vw_-_320px)_/_(1920_-_320)))] edit-div min-lg:min-w-[calc(66px_+_(650_-_66)_*_((100vw_-_320px)_/_(1920_-_320)))] min-w-[calc(120px_+_(650_-_120)_*_((100vw_-_320px)_/_(1920_-_320)))]">
                            <h5 className="font-medium text-dark truncate text-xs focus:border focus:border-light dark:focus:border-border-dark focus:outline-none focus:px-2 focus:rounded-5">
                                Meet old Friend to airport before he live city to his home
                            </h5>
                            </div>
                        </div>
                        <div>
                            <ul className="flex gap-3 todo-sublist">
                            <li className="cursor-pointer">
                                <div className="badge badge-sm capitalize px-3 font-bold rounded-full text-primary bg-primary-extralight priority-low !text-3xs">
                                low
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <div className="dark:bg-sidebar-dark2 badge badge-sm capitalize px-3 font-bold rounded-full text-success bg-success-light status-pending !text-3xs">
                                pending
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-edit transition-all stroke-twitter opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] edit"
                                >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-trash transition-all stroke-danger opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] delete"
                                >
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                </svg>
                            </li>
                            </ul>
                        </div>
                        </li>
                        <li className="todo-item flex items-center gap-2 justify-between pt-[13px] mt-[13px] border-t border-light dark:border-border-dark dark:border-t first:mt-0 first:pt-0 first:border-none">
                        <div className="flex items-center justify-center">
                            <div className="check-custom flex items-center justify-center relative pl-[calc(10px_+_(15_-_10)_*_((100vw_-_320px)_/_(1920_-_320)))] pr-[calc(7px_+_(12_-_7)_*_((100vw_-_320px)_/_(1920_-_320)))] py-[3px]">
                            <span className="absolute top-0 bottom-0 ltr:left-0 rtl:right-0 w-[3px] line h-full rounded-5" />
                            <div className="relative w-5 h-5">
                                <input
                                className="todo-check w-full h-full relative z-[2] opacity-0"
                                type="checkbox"
                                />
                                <span className="check absolute inset-0 flex items-center justify-center rounded-5 w-full h-full z-[1] p-[3px] bg-gray-200 dark:bg-mode-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-check check-icon w-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] transition-all opacity-0"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                </span>
                            </div>
                            </div>
                            <div className="max-w-[calc(48px_+_(650_-_48)_*_((100vw_-_320px)_/_(1920_-_320)))] edit-div min-lg:min-w-[calc(66px_+_(650_-_66)_*_((100vw_-_320px)_/_(1920_-_320)))] min-w-[calc(120px_+_(650_-_120)_*_((100vw_-_320px)_/_(1920_-_320)))]">
                            <h5 className="font-medium text-dark truncate text-xs focus:border focus:border-light dark:focus:border-border-dark focus:outline-none focus:px-2 focus:rounded-5">
                                Test the outgoing links from all the pages to the specific
                                domain under test.
                            </h5>
                            </div>
                        </div>
                        <div>
                            <ul className="flex gap-3 todo-sublist">
                            <li className="cursor-pointer">
                                <div className="badge badge-sm capitalize px-3 font-bold rounded-full text-primary bg-primary-extralight priority-medium !text-3xs">
                                medium
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <div className="dark:bg-sidebar-dark2 badge badge-sm capitalize px-3 font-bold rounded-full text-success bg-success-light status-inprogress !text-3xs">
                                inprogress
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-edit transition-all stroke-twitter opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] edit"
                                >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-trash transition-all stroke-danger opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] delete"
                                >
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                </svg>
                            </li>
                            </ul>
                        </div>
                        </li>
                        <li className="todo-item flex items-center gap-2 justify-between pt-[13px] mt-[13px] border-t border-light dark:border-border-dark dark:border-t first:mt-0 first:pt-0 first:border-none">
                        <div className="flex items-center justify-center">
                            <div className="check-custom flex items-center justify-center relative pl-[calc(10px_+_(15_-_10)_*_((100vw_-_320px)_/_(1920_-_320)))] pr-[calc(7px_+_(12_-_7)_*_((100vw_-_320px)_/_(1920_-_320)))] py-[3px]">
                            <span className="absolute top-0 bottom-0 ltr:left-0 rtl:right-0 w-[3px] line h-full rounded-5" />
                            <div className="relative w-5 h-5">
                                <input
                                className="todo-check w-full h-full relative z-[2] opacity-0"
                                type="checkbox"
                                defaultChecked="checked"
                                />
                                <span className="check absolute inset-0 flex items-center justify-center rounded-5 w-full h-full z-[1] p-[3px] bg-gray-200 dark:bg-mode-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-check check-icon w-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] transition-all opacity-0"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                </span>
                            </div>
                            </div>
                            <div className="max-w-[calc(48px_+_(650_-_48)_*_((100vw_-_320px)_/_(1920_-_320)))] edit-div min-lg:min-w-[calc(66px_+_(650_-_66)_*_((100vw_-_320px)_/_(1920_-_320)))] min-w-[calc(120px_+_(650_-_120)_*_((100vw_-_320px)_/_(1920_-_320)))]">
                            <h5 className="font-medium text-dark truncate text-xs focus:border focus:border-light dark:focus:border-border-dark focus:outline-none focus:px-2 focus:rounded-5">
                                Wrong inputs in the forms to the fields in the forms.
                            </h5>
                            </div>
                        </div>
                        <div>
                            <ul className="flex gap-3 todo-sublist">
                            <li className="cursor-pointer">
                                <div className="badge badge-sm capitalize px-3 font-bold rounded-full text-primary bg-primary-extralight priority-medium !text-3xs">
                                medium
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <div className="dark:bg-sidebar-dark2 badge badge-sm capitalize px-3 font-bold rounded-full text-success bg-success-light status-completed !text-3xs">
                                completed
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-edit transition-all stroke-twitter opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] edit"
                                >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-trash transition-all stroke-danger opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] delete"
                                >
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                </svg>
                            </li>
                            </ul>
                        </div>
                        </li>
                        <li className="todo-item flex items-center gap-2 justify-between pt-[13px] mt-[13px] border-t border-light dark:border-border-dark dark:border-t first:mt-0 first:pt-0 first:border-none">
                        <div className="flex items-center justify-center">
                            <div className="check-custom flex items-center justify-center relative pl-[calc(10px_+_(15_-_10)_*_((100vw_-_320px)_/_(1920_-_320)))] pr-[calc(7px_+_(12_-_7)_*_((100vw_-_320px)_/_(1920_-_320)))] py-[3px]">
                            <span className="absolute top-0 bottom-0 ltr:left-0 rtl:right-0 w-[3px] line h-full rounded-5" />
                            <div className="relative w-5 h-5">
                                <input
                                className="todo-check w-full h-full relative z-[2] opacity-0"
                                type="checkbox"
                                />
                                <span className="check absolute inset-0 flex items-center justify-center rounded-5 w-full h-full z-[1] p-[3px] bg-gray-200 dark:bg-mode-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-check check-icon w-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] transition-all opacity-0"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                </span>
                            </div>
                            </div>
                            <div className="max-w-[calc(48px_+_(650_-_48)_*_((100vw_-_320px)_/_(1920_-_320)))] edit-div min-lg:min-w-[calc(66px_+_(650_-_66)_*_((100vw_-_320px)_/_(1920_-_320)))] min-w-[calc(120px_+_(650_-_120)_*_((100vw_-_320px)_/_(1920_-_320)))]">
                            <h5 className="font-medium text-dark truncate text-xs focus:border focus:border-light dark:focus:border-border-dark focus:outline-none focus:px-2 focus:rounded-5">
                                Check validation
                            </h5>
                            </div>
                        </div>
                        <div>
                            <ul className="flex gap-3 todo-sublist">
                            <li className="cursor-pointer">
                                <div className="badge badge-sm capitalize px-3 font-bold rounded-full text-primary bg-primary-extralight priority-low !text-3xs">
                                low
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <div className="dark:bg-sidebar-dark2 badge badge-sm capitalize px-3 font-bold rounded-full text-success bg-success-light status-pending !text-3xs">
                                pending
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-edit transition-all stroke-twitter opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] edit"
                                >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </li>
                            <li className="cursor-pointer">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-trash transition-all stroke-danger opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] delete"
                                >
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                </svg>
                            </li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

            <div className="modal-main">
                <input className="peer" id="todo-modal" name="todo-modal" type="checkbox" />
                <label className="modal-overlay peer-checked:block" htmlFor="todo-modal" />
                <div className="modal modal-bottom-right checkout-detail dark:bg-sidebar-dark2 invisible w-11/12 max-w-xl sm:!left-0 transition-all duration-1000 translate-y-0 opacity-0 peer-checked:opacity-100 peer-checked:visible peer-checked:-translate-y-9 !right-[2%]">
                    <div className="modal-header">
                    <h3>Create Task </h3>
                    <label htmlFor="todo-modal">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-x w-4 h-4 stroke-title"
                        >
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                    </label>
                    </div>
                    <div className="modal-body">
                    <form
                        className="todo-form theme-form m-0 flex flex-col gap-3"
                        action="javascript:void(0)"
                    >
                        <div>
                        <label htmlFor="taskTitle">Title</label>
                        <input
                            className="dark:bg-sidebar-dark dark:border-border-dark"
                            type="text"
                            name="title"
                            id="taskTitle"
                            placeholder="Enter task name.."
                            required=""
                        />
                        </div>
                        <div className="priority-list">
                        <label htmlFor="priority">Priority</label>
                        <select
                            className="priority-list-item form-select block w-full px-3 text-xs font-normal text-content3 bg-white bg-clip-padding bg-no-repeat border border-border-light rounded-5 transition ease-in-out m-0 dark:bg-sidebar-dark2 dark:border-border-dark  min-w-[150px] py-[9px]"
                            id="priority"
                            name="priority"
                            aria-label="Default select example"
                        >
                            <option selected="">Normal</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        </div>
                        <div>
                        <label htmlFor="status">Status</label>
                        <select
                            className="form-select block w-full px-3 text-xs font-normal text-content3 bg-white bg-clip-padding bg-no-repeat border border-border-light rounded-5 transition ease-in-out m-0 dark:bg-sidebar-dark2 dark:border-border-dark min-w-[150px] py-[9px]"
                            id="status"
                            name="status"
                            aria-label="Default select example"
                        >
                            <option selected="">New</option>
                            <option value="Inprogress">Inprogress</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                        </select>
                        </div>
                        <div className="flex items-center gap-2">
                        <label
                            className="btn btn-outline btn-primary todo-form-close !p-[0.6rem] dark:bg-sidebar-dark2 3sm:flex-1 !w-auto !mt-4 !mb-0"
                            htmlFor="todo-modal"
                        >
                            Close
                        </label>
                        <button
                            className="btn btn-primary text-white addTodo 3sm:flex-1 !w-auto !mb-0"
                            type="submit"
                        >
                            Add
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PageTwo;