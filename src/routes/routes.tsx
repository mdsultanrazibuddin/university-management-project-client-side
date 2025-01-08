import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateStudent from "../pages/Admin/CreateStudent";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import { adminPaths } from "./admin.route";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/admin",
        element: <App />,
        children: adminPaths
            
    },
    {
        path: "/faculty",
        element: <App />,
        children: adminPaths
            
    },
    {
        path: "/student",
        element: <App />,
        children: adminPaths
            
    },
    
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
])
export default router;