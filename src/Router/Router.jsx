import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/Mycart/Mycart";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import PrivateRoutes from '../Routes/PrivateRoutes'
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoutes from '../Routes/AdminRoutes'
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        // User Routes
        {
          path: 'userhome',
          element: <UserHome></UserHome>
        },
        {
          path: 'myCart',
          element: <MyCart></MyCart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },

        // Admin Routes
        {
          path: 'adminhome',
          element: <AdminHome></AdminHome>
        },
        {
          path: 'allUser',
          element: <AdminRoutes><AllUser></AllUser></AdminRoutes>
        },
        {
          path: 'addItem',
          element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
        },
        {
          path: 'manageItems',
          element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        }
      ]
    }
  ]);

export default router;