import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import hamburger from "../../assets/hamburger-menu.png";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden ml-4 mt-4"
          >
            <img src={hamburger} alt="hamburger" />
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <label htmlFor="my-drawer-2">
                <Link htmlFor="my-drawer-2" to="update-heading">Update Main heading</Link>
              </label>
            </li>
            <li>
              <label htmlFor="my-drawer-2">
              <Link to="update-logo">Update Logo</Link>
              </label>
            </li>
            <li>
              <label htmlFor="my-drawer-2"><Link to="counter-update">Counter Update</Link></label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
