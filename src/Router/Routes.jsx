
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Booking/Booking";
import Root from "../layouts/Root";
import Login from "../Pages/Login/Login";
import Search from "../Pages/Search/Search";
import CreateAccount from "../Pages/CreateAccount/CreateAccount";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/src/json/destination.json')
            },
            {
                path: '/booking/:id',
                element: <PrivateRoute><Booking></Booking></PrivateRoute>,
                loader: () => fetch('/src/json/destination.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/search',
                element: <Search></Search>
            },
            {
                path: '/register',
                element: <CreateAccount></CreateAccount>
            }
        ]
    }
])

export default router;