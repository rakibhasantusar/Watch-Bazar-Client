import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import CategoryDetail from "../../Pages/Home/Categories/CategoryDetail";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login&SignUp/Login";

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
                path: "/categorydetail/:id",
                element: <CategoryDetail></CategoryDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog />
            }
        ]
    }
])

export default router;