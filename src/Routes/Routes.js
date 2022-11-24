import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Dashboard from "../Components/Dashboard/Dashboard";
import DashboardInfo from "../Components/Dashboard/DashboardInfo";
import MyProduct from "../Components/Dashboard/MyProduct/MyProduct";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Main from "../Components/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/',
                element: <DashboardInfo></DashboardInfo>

            },
            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>

            }
        ]
    }
]);

export default router;