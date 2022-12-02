import { createBrowserRouter } from "react-router-dom";
import LayoutDashBoard from "../../Layout/LayoutDashBoard";
import Main from "../../Layout/Main";
import CategoryItems from "../../Pages/CategoryItems/CategoryItems";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import AllSeller from "../../Pages/DashBoard/AllSeller/AllSeller";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddProducts from "../../Pages/DashBoard/AddProducts/AddProducts";
import ManageProducts from "../../Pages/DashBoard/ManageProducts/ManageProducts";
import ErrorElement from "../../Pages/Shared/ErrorElement/ErrorElement";
import Blogs from "../../Pages/Bologs/Blogs";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement></ErrorElement>,
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
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
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
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },

      {
        path: "/dashboard/sellerlist",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>{" "}
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/buyerlist",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/addProducts",
        element: (
          <SellerRoute>
            {" "}
            <AddProducts></AddProducts>
          </SellerRoute>
        ),
      },

      {
        path: "/dashboard/manageProducts",
        element: (
          <SellerRoute>
            {" "}
            <ManageProducts></ManageProducts>
          </SellerRoute>
        ),
      },
    ],
  },
]);
