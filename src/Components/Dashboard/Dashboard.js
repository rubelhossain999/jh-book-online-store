import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../ShareComponent/Header';

const Dashboard = () => {
    return (
        <>
            <Header></Header>
            <div className="drawer drawer-mobile max-w-[1340px] mx-auto">
                <input id="Sidebar-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="Sidebar-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-accent bg-slate-200">
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/dashboard/myproduct'>My Product</Link></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;