import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../ShareComponent/Header';

const Dashboard = () => {
    return (
        <>
            <Header></Header>
            <div className="drawer drawer-mobile max-w-[1340px] mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col m-10">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 bg-primary border-t text-base-content">
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/myproduct'>My Product</Link></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;