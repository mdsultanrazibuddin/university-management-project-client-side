
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";



 export const adminPaths = [
    
            {
                name: 'Dashboard',
                path: "dashboard",
                element: <AdminDashboard />,
            },
           {
                name: 'User Management',
                children:[
                    {
                        name: 'Create Student',
                        path: "create-student",
                        element: <CreateStudent />,
                    },
                    {
                        name: 'Create Faculty',
                        path: "create-faculty",
                        element: <CreateFaculty />,
                    },
                    {
                        name: 'Create Admin',
                        path: "create-admin",
                        element: <CreateAdmin />,
                    },
                    {
                        name: 'Admin',
                        path: "create-admin",
                        element: <CreateAdmin />,
                    },
                ]
            
     }
]


// export const adminSidebarItems = adminPaths.reduce((acc:TSidebarItem[],item) => {
//     if(item.path && item.name){
//         acc.push({
//             key: item.name,
//             label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//         });
//     }

//     if(item.children){
//         acc.push({
//             key: item.name,
//             label:item.name,
//             children: item.children.map((child) => ({
//                 key: child.name,
//                 label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//             }))

//             });
//     }
//     return acc;
// }, [])


//* Programatical way
// export const adminRoutes = adminPaths.reduce((acc:TRoute[],item) => {
//     if(item.path && item.element){
//         acc.push({
//             path: item.path,
//             element: item.element,
//         });
//     }

//     if(item.children){
//         item.children.forEach((child) => {
//             acc.push({
//                 path: child.path,
//                 element: child.element,
//             });
//         });
//     }
//     return acc;
// }, [])


//! Hard coded way

// export const adminPaths = [
//   {
//     path: 'dashboard',
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'create-student',
//     element: <CreateStudent />,
//   },
//   {
//     path: 'create-admin',
//     element: <CreateAdmin />,
//   },
//   {
//     path: 'create-faculty',
//     element: <CreateFaculty />,
//   },
// ];