import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import UseAdmin from "../hooks/UseAdmin";
import useBuyer from "../hooks/UseBuyer";
import UseSeller from "../hooks/UseSeller";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const LayoutDashBoard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);
  const [isSeller] = UseSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
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
            {isBuyer && (
              <li>
                <Link to="/dashboard">My Orders</Link>
              </li>
            )}

            <>
              {isAdmin && (
                <li>
                  <Link to="/dashboard/sellerlist">All Sellers</Link>
                  <Link to="/dashboard/buyerlist">All Buyers</Link>
                </li>
              )}
            </>

            {isSeller && (
              <>
                {" "}
                <li>
                  <Link to="/dashboard/addProducts">Add A Product</Link>
                  <Link to="/dashboard/manageProducts">My Products</Link>
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
