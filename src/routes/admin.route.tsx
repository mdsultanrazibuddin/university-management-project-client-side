
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";

export const adminPaths = [
    
            {
                path: "dashboard",
                element: <AdminDashboard />
            },
            {
                path: "create-student",
                element: <CreateStudent />
            },
            {
                path: "create-faculty",
                element: <CreateFaculty />
            },
            {
                path: "create-admin",
                element: <CreateAdmin />
            },
     
]