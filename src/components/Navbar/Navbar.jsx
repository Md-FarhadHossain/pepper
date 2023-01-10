import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart-icon.png";
import hamburger from "../../assets/hamburger-menu.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { logoImage, logoUpload, user, signout} = useContext(UserContext);

  const [logo, setLogo] = useState("");

  useEffect(() => {
    fetch("https://server-md-farhadhossain.vercel.app/logo")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLogo(data?.logo);
      });
  }, [logoUpload]);

  // handle SignOut
  const handleSignOut = (event) => {
    event.preventDefault()
    signout()
      .then((result) => {
        console.log(result)
        toast.success('Singed out')
      })
      .catch((err) => console.log(err));
  }

  const menu = (
    <>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Blog</a>
      </li>
      <li>
        <a href="/">Pricing</a>
      </li>
      <li>
        <a href="/">Careers</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar container px-4 lg:px-0 mx-auto">
        <div className="navbar-start">
          <Link to="/" className="cursor-pointer">
            <img
              className="w-[7.5rem] h-[2.125rem] object-contain"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <a className="flex items-center mr-6 text-[#9D0AFF]" href="/">
            <img className="mr-2" src={cartIcon} alt="cartIcon" />
            Cart
          </a>
          <div className=" hidden md:hidden lg:block">
            {user ? (
              <>
                <Link
                  to="/dashboard/update-heading"
                  className="btn bg-[#9D0AFF] border-none capitalize"
                >
                  Dashbord
                </Link>
                <button
                 onClick={handleSignOut}
                  className="btn bg-red-500 border-none capitalize ml-6"
                >
                  Sign Out
                </button>


              </>
            ) : (
              <>
                {" "}
                <Link
                  to="/login"
                  className="btn btn-outline border-[#9D0AFF] text-[#9D0AFF] capitalize"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn bg-[#9D0AFF] border-none ml-6 capitalize"
                >
                  Get started
                </Link>
              </>
            )}
          </div>

          {/* Responsive dropdown menu */}
          <div className="dropdown lg:hidden md:lg:hidden block">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden bg-[#9D0AFF] "
            >
              <img src={hamburger} alt="hamburger" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 relative right-0 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
              {user ? (
              <>
                <Link
                  to="/dashboard/update-heading"
                  className="btn bg-[#9D0AFF] border-none capitalize"
                >
                  Dashbord
                </Link>
                <button
                onClick={handleSignOut}
                  className="btn bg-red-500 border-none mt-4 capitalize"
                >
                  Sign Out
                </button>


              </>
            ) : (
              <>
                {" "}
                <Link
                  to="/login"
                  className="btn btn-outline border-[#9D0AFF] text-[#9D0AFF] capitalize"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn bg-[#9D0AFF] border-none mt-4 capitalize"
                >
                  Get started
                </Link>
              </>
            )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
