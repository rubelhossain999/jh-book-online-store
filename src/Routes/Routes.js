import { createBrowserRouter } from "react-router-dom";
import AllBooks from "../Components/AllBooks/AllBooks";
import Blog from "../Components/Blog/Blog";
import AddProducts from "../Components/Dashboard/AddProducts/AddProducts";
import AllCustomer from "../Components/Dashboard/AllCustomer";
import Dashboard from "../Components/Dashboard/Dashboard";
import DashboardInfo from "../Components/Dashboard/DashboardInfo";
import MyProduct from "../Components/Dashboard/MyProduct/MyProduct";
import OrderProducts from "../Components/Dashboard/OrderProducts/OrderProducts";
import Payments from "../Components/Dashboard/Payments/Payments";
import ReportsProducts from "../Components/Dashboard/ReportsProducts/ReportsProducts";
import Welcome from "../Components/Dashboard/Welcome";
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
                element: <PrivateRoute> <SingleBook></SingleBook></PrivateRoute>,
                loader: ({ params }) => fetch(`https://book-resale-server-site.vercel.app/books/data/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
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
                element: <Welcome></Welcome>

            },
            {
                path: '/dashboard/seller',
                element: <DashboardInfo></DashboardInfo>
            },
            {
                path: '/dashboard/customer',
                element: <AllCustomer></AllCustomer>
            },
            {
                path: '/dashboard/orderproducts',
                element: <OrderProducts></OrderProducts>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>

            },
            {
                path: '/dashboard/reportdproduct',
                element: <ReportsProducts></ReportsProducts>

            },
            {
                path: '/dashboard/cartpayment/:id',
                element: <Payments></Payments>,
                loader: ({ params }) => fetch(`https://book-resale-server-site.vercel.app/ordersdata/${params.id}`)

            }
        ]
    }
]);

export default router;