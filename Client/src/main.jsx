import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Admin from './pages/Admin.jsx';
import Employee from './pages/Employee.jsx';
import Signup from './pages/Signup.jsx';
import AuthLayout from './components/AuthLayout.jsx';
import Login from './pages/Login.jsx';

// const router = createBrowserRouter(
//   <Routes>
//     <Route path="/" element={<Layout/>}>
//       <Route index element={<Home />} />
//       <Route path="admin" element={<Admin />} />
//       <Route path="signup" element={<Signup />} />
//       <Route path="employee" element={<Employee />} />
//     </Route>
//   </Routes>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <AuthLayout>
                    <Home />
                </AuthLayout>
            },
            {
                path: "/admin",
                element: <AuthLayout>
                    <Admin />
                </AuthLayout>
            },
            {
                path: "/employee",
                element: <AuthLayout>
                    <Employee />
                </AuthLayout>
            },
            {
                path: "/signup",
                element: <AuthLayout>
                    <Signup />
                </AuthLayout>
            },
            {
                path: "/login",
                element: <AuthLayout>
                    <Login/>
                </AuthLayout>
            },


        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)