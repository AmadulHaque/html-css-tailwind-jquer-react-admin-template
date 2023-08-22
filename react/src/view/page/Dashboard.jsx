import React from 'react';
import wavingHand from '../../assets/images/waving-hand.png'
import imgOne from '../../assets/images/svg/1.svg'
import imgTwo from '../../assets/images/svg/done.svg'
import imgTwo1 from '../../assets/images/svg/rocket.svg'

const Dashboard = () => {
    return (
        <>
            <div className="col-span-3 ratio_109 4xl:col-span-4 lg:col-span-5 2lg:col-span-6 lg:-order-2 2md:col-span-12">
                {/* Welcome Card */}
                <div className="card p-card-space before:!pt-0 bg-primary relative common-animate-main 4xl:h-[390px] xl:h-full gap-0 common-animate-main welcome-card-main h-[410px] ">
                    <div>
                    <div className="flex items-center gap-2 justify-between">
                        {" "}
                        <span className="flex items-center gap-2 text-3xl font-semibold text-white 3sm:text-lg 5xl:text-2xl">
                        Hello, Amirreza
                        <img
                            className="w-[22px] h-[22px]"
                            src={wavingHand}
                            alt="waving-hand"
                        />
                        </span>
                        <div className="dropdown">
                        <button className="before:absolute flex items-center justify-center cursor-pointer before:inset-0 before:bg-white before:opacity-[34%] before:rounded-full p-[5px]">
                            <svg className="w-[18px] h-[18px] stroke-white">
                            <use href="../../assets/svg/sprite.svg#Setting"> </use>
                            </svg>
                        </button>
                        <div className="dropdown-menu !w-36 right-0 !top-8">
                            <ul>
                            <li>
                                <a href="profile.html">Profile Setting</a>
                            </li>
                            <li>
                                <a href="email.html">Message</a>
                            </li>
                            <li>
                                <a href="todo-app.html">Taskboard</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <p className="text-xs font-semibold text-content-white leading-[22px] max-w-[285px] mt-1 2md:line-clamp-2 sm:line-clamp-none">
                        Welcome to the Govo family! we are glad that you are visite this
                        dashboard.
                    </p>
                    <button className="mt-6 sm:mt-4 rounded-5 py-[8px] px-4 bg-white text-xs font-bold text-title dark:bg-sidebar-dark2 hover:text-primary">
                        What New!
                    </button>
                    </div>
                    <div className="relative bg-img">
                    {" "}
                    <img
                        className="img-fluid welcome-img"
                        src={imgOne}
                        alt="welcome-image"
                    />
                    <img
                        className="w-[28px] h-[28px] common-animate animate-ping top-[14px] 6xl:top-[30px] 4xl:top-[14px] absolute left-[10%] 2md:left-[24%] sm:left-[10%] animate__animated animate__infinite animate__shakeY animate__slower"
                        src={imgTwo}
                        alt="welcome-done-image"
                    />
                    <img
                        className="w-24 h-w-24 common-animate animate-ping top-[-10%] 6xl:top-[4%] 4xl:top-[-10%] absolute right-[2%] 2md:right-[17%] sm:right-[2%] left-unset  animate__animated animate__infinite animate__shakeY animate__slower"
                        src={imgTwo1}
                        alt="welcome-rocket-image"
                    />
                    </div>
                </div>
            </div>

            <div className="col-span-6 4xl:col-span-8 lg:col-span-12 lg:-order-1">
                <div className="card">
                    <div className="card-header transaction-history">
                    <div className="flex justify-between w-full flex-wrap gap-2 items-center">
                        <h3 className="text-lg font-bold text-title leading-none">
                        Transaction History
                        </h3>
                        <div className="custom-select select-style-1">
                        <select className="capitalize">
                            <option>Yearly</option>
                            <option>Monthly</option>
                            <option>Weekly</option>
                        </select>
                        <div className="select-selected">Yearly</div>
                        <div className="select-items select-hide">
                            <div>Yearly</div>
                            <div>Monthly</div>
                            <div>Weekly</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="card-body">
                    <div className="overflow-auto custom-scroll">
                        <table className="table">
                        <thead>
                            <tr>
                            <th>Item Name</th>
                            <th>Date And Time</th>
                            <th>Amount</th>
                            <th>invoice no.</th>
                            <th>Status</th>
                            <th>payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="group">
                            <td className="min-w-[11.125rem]">
                                <div className="flex items-center gap-[.5625rem]">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src="../../assets/images/product/1.jpg"
                                    alt="Samsung TV"
                                />
                                <a href="product.html">
                                    <h4 className="text-xs font-semibold text-title group-hover:text-primary">
                                    Samsung TV
                                    </h4>
                                    <span className="block mt-1 font-semibold text-2xs text-content">
                                    Item Sold
                                    </span>
                                </a>
                                </div>
                            </td>
                            <td className="min-w-[7.5rem]">
                                <div>
                                <h4 className="text-xs font-semibold text-title">
                                    Jan 25, 2023
                                </h4>
                                <span className="block mt-1 font-semibold text-2xs text-content">
                                    Item Sold
                                </span>
                                </div>
                            </td>
                            <td className="min-w-[6.25rem]">
                                <h4 className="text-xs font-semibold text-success">$251 USD</h4>
                            </td>
                            <td className="min-w-[6.5rem]">
                                <h4 className="text-xs font-semibold uppercase text-title">
                                #px0101
                                </h4>
                            </td>
                            <td className="min-w-[4.6875rem]">
                                <div className="progress-bar progress-sm max-w-[3.375rem]">
                                <div className="bg-success" style={{ width: "50%" }}>
                                    {" "}
                                </div>
                                </div>
                            </td>
                            <td className="min-w-[6.25rem]">
                                <h4 className="text-xs font-semibold text-title">Paypal</h4>
                            </td>
                            </tr>
                            <tr className="group">
                            <td className="min-w-[11.125rem]">
                                <div className="flex items-center gap-[.5625rem]">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src="../../assets/images/product/2.jpg"
                                    alt="Spring Bed"
                                />
                                <a href="product.html">
                                    <h4 className="text-xs font-semibold text-title group-hover:text-primary">
                                    Spring Bed
                                    </h4>
                                    <span className="block mt-1 font-semibold text-2xs text-content">
                                    Bought item
                                    </span>
                                </a>
                                </div>
                            </td>
                            <td className="min-w-[7.5rem]">
                                <div>
                                <h4 className="text-xs font-semibold text-title">
                                    Feb 20, 2023
                                </h4>
                                <span className="block mt-1 font-semibold text-2xs text-content">
                                    Bought item
                                </span>
                                </div>
                            </td>
                            <td className="min-w-[6.25rem]">
                                <h4 className="text-xs font-semibold text-danger">$350 USD</h4>
                            </td>
                            <td className="min-w-[6.5rem]">
                                <h4 className="text-xs font-semibold uppercase text-title">
                                #rf304f
                                </h4>
                            </td>
                            <td className="min-w-[4.6875rem]">
                                <div className="progress-bar progress-sm max-w-[3.375rem]">
                                <div className="bg-danger" style={{ width: "70%" }}>
                                    {" "}
                                </div>
                                </div>
                            </td>
                            <td className="min-w-[6.25rem]">
                                <h4 className="text-xs font-semibold text-title">
                                Credit Card
                                </h4>
                            </td>
                            </tr>
                            <tr className="group">
                            <td className="min-w-[11.125rem]">
                                <div className="flex items-center gap-[.5625rem]">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src="../../assets/images/product/3.jpg"
                                    alt="Long Dress"
                                />
                                <a href="product.html">
                                    <h4 className="text-xs font-semibold text-title group-hover:text-primary">
                                    Long Dress
                                    </h4>
                                    <span className="block mt-1 font-semibold text-2xs text-content">
                                    Bought item
                                    </span>
                                </a>
                                </div>
                            </td>
                            <td className="min-w-[7.5rem]">
                                <div>
                                <h4 className="text-xs font-semibold text-title">
                                    Feb 25, 2023
                                </h4>
                                <span className="block mt-1 font-semibold text-2xs text-content">
                                    Bought item
                                </span>
                                </div>
                            </td>
                            <td className="min-w-[6.25rem]">
                                <h4 className="text-xs font-semibold text-success">$240 USD</h4>
                            </td>
                            <td className="min-w-[6.5rem]">
                                <h4 className="text-xs font-semibold uppercase text-title">
                                #dnj480
                                </h4>
                            </td>
                            <td className="min-w-[4.6875rem]">
                                <div className="progress-bar progress-sm max-w-[3.375rem]">
                                <div className="bg-success" style={{ width: "40%" }}>
                                    {" "}
                                </div>
                                </div>
                            </td>
                            <td className="min-w-[6.25rem]">
                                <h4 className="text-xs font-semibold text-title">Paypal</h4>
                            </td>
                            </tr>
                            <tr className="group">
                            <td className="min-w-[11.125rem]">
                                <div className="flex items-center gap-[.5625rem]">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src="../../assets/images/product/4.jpg"
                                    alt="Phillip Lightbulb"
                                />
                                <a href="product.html">
                                    <h4 className="text-xs font-semibold text-title group-hover:text-primary">
                                    Phillip Lightbulb
                                    </h4>
                                    <span className="block mt-1 font-semibold text-2xs text-content">
                                    Item Sold
                                    </span>
                                </a>
                                </div>
                            </td>
                            <td className="min-w-[7.5rem]">
                                <div>
                                <h4 className="text-xs font-semibold text-title">
                                    March 27, 2023
                                </h4>
                                <span className="block mt-1 font-semibold text-2xs text-content">
                                    Item Sold
                                </span>
                                </div>
                            </td>
                            <td className="min-w-[6.25rem]">
                                <h4 className="text-xs font-semibold text-danger">$200 USD</h4>
                            </td>
                            <td className="min-w-[6.5rem]">
                                <h4 className="text-xs font-semibold uppercase text-title">
                                #g189d0
                                </h4>
                            </td>
                            <td className="min-w-[4.6875rem]">
                                <div className="progress-bar progress-sm max-w-[3.375rem]">
                                <div className="bg-danger" style={{ width: "60%" }}>
                                    {" "}
                                </div>
                                </div>
                            </td>
                            <td className="min-w-[6.25rem]">
                                <h4 className="text-xs font-semibold text-title">
                                Credit Card
                                </h4>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>


            
        </>
    );
};

export default Dashboard;