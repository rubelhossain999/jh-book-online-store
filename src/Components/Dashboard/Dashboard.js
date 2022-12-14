import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
import useAdmin from '../../hooks/useAdmin';
import Header from '../../ShareComponent/Header';

const Dashboard = () => {
    const { user } = useContext(AuthContextAPI);
    const [isAdmin] = useAdmin(user?.email);

    const { data: userinformation = [] } = useQuery({
        queryKey: ["userinformation"],
        queryFn: async () => {
            const res = await fetch(`https://book-resale-server-site.vercel.app/regisusers?email=${user?.email}`);
            const data = res.json();
            return (data);
        }
    });

    console.log(userinformation);


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
                        {
                            userinformation?.map(userStatu =>
                                <>
                                    <div key={userStatu._id} className='border-b pb-3'>
                                        <h3 className='text-center font-bold text-xl text-secondary'>{user?.displayName}</h3>
                                        <h3 className='text-center text-xs'>ID: {userStatu._id}</h3>
                                        {userStatu?.verified ?
                                            <>
                                                <h3 className='text-center text-'>Status: <span className='text-lime-500 font-bold'>Verified</span></h3>
                                            </>
                                            :
                                            <>
                                                <h3 className='text-center text-'>Status: <span className='text-red-500 font-bold'>Unverified</span></h3>
                                            </>
                                        }
                                    </div>
                                </>)
                        }
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/seller'>All Seller</Link></li>
                                <li><Link to='/dashboard/customer'>All Customer</Link></li>
                                <li><Link to='/dashboard/reportdproduct'>Reports Products</Link></li>
                            </>
                        }
                        {
                            userinformation?.map(userinformation =>
                                <>
                                    {
                                        userinformation?.role === "seller" ?
                                            <>
                                            <li><Link to='/dashboard/addproduct'>Add Book</Link></li>
                                            <li><Link to='/dashboard/myproduct'>My Books</Link></li>
                                            </>
                                            :
                                            <>
                                            </>
                                    }
                                    {
                                        userinformation?.admin === "admin" ?
                                            <>
                                            <li><Link to='/dashboard/addproduct'>Add Book</Link></li>
                                            <li><Link to='/dashboard/myproduct'>My Books</Link></li>
                                            </>
                                            :
                                            <>
                                            </>
                                    }
                                </>
                            )
                        }
                        <li><Link to='/dashboard/orderproducts'>My Ordesr</Link></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;