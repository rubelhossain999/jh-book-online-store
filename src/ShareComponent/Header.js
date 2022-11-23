import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const menu = <React.Fragment>
        <li><NavLink className={({ Active }) => Active ? 'active' : undefined} to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/appointment'>Appointment</NavLink></li>
        <li><NavLink to='/reviews'>Reviews</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
    </React.Fragment >
    return (
        <div className='bg-primary'>
            <div className="navbar bg-primary max-w-[1320px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-accent menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link className='w-1/3' to='/'><img src='https://i.ibb.co/1vWWYsF/logo-removebg-preview-2.png' alt='logo' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end border-2 border-double border-secondary rounded-full">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt=''/>
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu bg-white menu-compact dropdown-content mt-3 p-2 shadow text-accent rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;