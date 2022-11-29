import { createBrowserRouter } from "react-router-dom";
import LayoutDashBoard from "../../Layout/LayoutDashBoard";
import Main from "../../Layout/Main";
import CategoryItems from "../../Pages/CategoryItems/CategoryItems";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import UserList from "../../Pages/DashBoard/UserList/UserList";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddProducts from "../../Pages/DashBoard/AddProducts/AddProducts";
import ManageProducts from "../../Pages/DashBoard/ManageProducts/ManageProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <CategoryItems></CategoryItems>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <LayoutDashBoard></LayoutDashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/userlist",
        element: (
          <AdminRoute>
            {" "}
            <UserList></UserList>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addProducts",
        element: (
          <AdminRoute>
            {" "}
            <AddProducts></AddProducts>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageProducts",
        element: (
          <AdminRoute>
            {" "}
            <ManageProducts></ManageProducts>
          </AdminRoute>
        ),
      },
    ],
  },
]);
