import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navItems = (
    <>
      <li>
        {" "}
        <Link to="/" className="font-bold text-xl">
          Home
        </Link>
      </li>

      {user?.uid ? (
        <>
          {" "}
          <li>
            <Link to="/dashboard" className="font-bold text-xl">
              DashBoard
            </Link>
          </li>
          <li>
            <button onClick={handleSignOut} className="text-xl font-bold">
              SignOut
            </button>
          </li>
        </>
      ) : (
        <li>
          {" "}
          <Link to="/login" className="font-bold text-xl">
            Login
          </Link>
        </li>
      )}
      <li>
        {" "}
        <Link to="/blogs" className="font-bold text-xl">
          Blogs
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gray-200 p-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl">
          Resale Phone Hub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
