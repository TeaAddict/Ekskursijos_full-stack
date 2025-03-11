import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Trips from "../pages/Trips";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import ProtectedRoute from "../components/Auth/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "trips", element: <Trips /> },
      {
        path: "about",
        element: <ProtectedRoute element={<About />} requiredRole="USER" />,
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "admin",
        element: <ProtectedRoute element={<Admin />} requiredRole="ADMIN" />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
