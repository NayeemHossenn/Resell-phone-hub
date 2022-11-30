import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import UseAdmin from "../hooks/UseAdmin";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const LayoutDashBoard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="myDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
          <label
            htmlFor="myDrawer"
            className="btn btn-success drawer-button lg:hidden"
          >
            See More
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="myDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            {isAdmin && (
              <>
                {" "}
                <li>
                  <Link to="/dashboard/userlist">User list</Link>
                  <Link to="/dashboard/addProducts">Add A Product</Link>
                  <Link to="/dashboard/manageProducts">Manage Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LayoutDashBoard;
