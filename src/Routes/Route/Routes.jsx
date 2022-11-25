import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layouts/Dashboard";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import MyOrder from "../../Pages/DashboardArea/BuyerAdmin/MyOrder";
import AllBuyer from "../../Pages/DashboardArea/MyAdmin/AllBuyer";
import AllSellers from "../../Pages/DashboardArea/MyAdmin/AllSellers";
import ReportedItem from "../../Pages/DashboardArea/MyAdmin/ReportedItem";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import CategoryDetail from "../../Pages/Home/Categories/CategoryDetail";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login&SignUp/Login";
import SignUp from "../../Pages/Login&SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerAdminroute from "../AdminRoute/BuyerAdminroute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/categorydetail/:id",
                element: <CategoryDetail></CategoryDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard/allbuyers",
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: "/dashboard/allsellers",
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: "/dashboard/reporteditem",
                element: <AdminRoute><ReportedItem></ReportedItem></AdminRoute>
            },
            {
                path: "/dashboard/myorders",
                element: <BuyerAdminroute><MyOrder></MyOrder></BuyerAdminroute>
            }
        ]
    }
])

export default router;