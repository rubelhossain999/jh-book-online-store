import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContextAPI } from '../ContextAPI/AuthContext';

const Header = () => {
    const { user, userLogOut } = useContext(AuthContextAPI);

    const handleLogout = () => {
        userLogOut()
            .then(() => {
                toast.success("LogOut Success!!");
            })
    }

    const menu = <React.Fragment>
        <li><NavLink className={({ Active }) => Active ? 'active' : undefined} to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/freebooks'>Free Books</NavLink></li>
        <li><NavLink to='/pdfbook'>PDF Books</NavLink></li>
        <li><NavLink to='/premiumBooks'>Premium Books</NavLink></li>
    </React.Fragment >
    const authMenu = <React.Fragment>
        <Link to='/login' className="justify-between px-3 font-bold">Login</Link>
        <Link to='/registration' className="justify-between px-3 font-bold">Registration</Link>
    </React.Fragment >
    return (
        <div className='bg-primary'>
            <div className="navbar bg-primary max-w-[1320px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FontAwesomeIcon className='text-2xl' icon={faBars} />
                        </label>
                        <ul tabIndex={0} className="menu text-accent menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                            {authMenu}
                        </ul>
                    </div>
                    <Link className='lg:w-1/3' to='/'><img src='https://i.ibb.co/1vWWYsF/logo-removebg-preview-2.png' alt='logo' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button htmlFor="Sidebar-drawer" className="btn btn-xs drawer-button lg:hidden"><Link to='/dashboard'>Dashboard</Link></button>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><FontAwesomeIcon className='text-2xl' icon={faBars} /></label>
                    {user?.uid ?
                        <>
                            <div className="dropdown hidden lg:flex dropdown-end border-2 border-double border-secondary rounded-full">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {user?.uid ?
                                            <>
                                                <img src={user?.photoURL} alt='ima' />
                                            </>
                                            :
                                            <>
                                                <img src="https://i.ibb.co/DQxXd4F/icons.png" alt='' />
                                            </>}
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu bg-white menu-compact dropdown-content mt-14 p-2 shadow text-accent rounded-box w-52">
                                    <li>
                                        <Link to='/dashboard' className="justify-between">Dashboard</Link>
                                        <Link onClick={handleLogout} className="justify-between">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                        :
                        <>
                            <div className='lg:flex hidden'>
                                <Link to='/login' className="justify-between px-3 font-bold">Login</Link>
                                <Link to='/registration' className="justify-between px-3 font-bold">Registration</Link>
                            </div>
                        </>}

                </div>
            </div>
        </div>

    );
};

export default Header;