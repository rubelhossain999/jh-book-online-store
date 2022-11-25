import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
import Header from '../../ShareComponent/Header';

const Dashboard = () => {
    const { user } = useContext(AuthContextAPI);
    console.log(user);

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
                        <div className='border-b pb-3'>
                            <h3 className='text-center font-bold text-xl text-secondary'>{user?.displayName}</h3>
                            <h3 className='text-center text-xs'>ID: {user.uid}</h3>
                            {user?.verified ?
                                <>
                                    <h3 className='text-center text-'>Status: <span className='text-lime-500 font-bold'>Verified</span></h3>
                                </>
                                :
                                <>
                                    <h3 className='text-center text-'>Status: <span className='text-red-500 font-bold'>Unverified</span></h3>
                                </>
                            }
                        </div>
                        <li className='mt-10'><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/myproduct'>My Product</Link></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;