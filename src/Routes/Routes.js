import { createBrowserRouter } from "react-router-dom";
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
                path: '*',
                element: <Error></Error>
            }
        ]
    }
]);

export default router;