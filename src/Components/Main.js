import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../ShareComponent/Footer';
import Header from '../ShareComponent/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;