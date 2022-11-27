import { createBrowserRouter } from "react-router-dom";
import AllBooks from "../Components/AllBooks/AllBooks";
import Blog from "../Components/Blog/Blog";
import AddProducts from "../Components/Dashboard/AddProducts/AddProducts";
import Dashboard from "../Components/Dashboard/Dashboard";
import DashboardInfo from "../Components/Dashboard/DashboardInfo";
import MyProduct from "../Components/Dashboard/MyProduct/MyProduct";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Main from "../Components/Main";
import FreeBooks from "../Components/Products/FreeBooks";
import PDFBooks from "../Components/Products/PDFBooks";
import PremiumBooks from "../Components/Products/PremiumBooks";
import SingleBook from "../Components/SingleBook/SingleBook";
import Login from "../FireBase/Auth/Login";
import Registration from "../FireBase/Auth/Registration";
import PrivateRoute from "./PrivateRoutes";

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
                path: '/category/:id',
                element: <SingleBook></SingleBook>,
                loader: ({ params }) => fetch(`http://localhost:3000/books/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/category/freebooks',
                element: <FreeBooks></FreeBooks>
            },
            {
                path: '/category/pdfbook',
                element: <PDFBooks></PDFBooks>
            },
            {
                path: '/category/premiumbooks',
                element: <PremiumBooks></PremiumBooks>
            },
            {
                path: '/category',
                element: <AllBooks></AllBooks>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/',
                element: <DashboardInfo></DashboardInfo>

            },
            {
                path: '/dashboard/addproduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>

            }
        ]
    }
]);

export default router;