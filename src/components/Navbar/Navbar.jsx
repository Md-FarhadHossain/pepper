import React from 'react'
import logo from '../../assets/logo.png'
import cartIcon from '../../assets/cart-icon.png'
import { BiMenu } from "react-icons/bi";

const Navbar = () => {

  const menu = <>
    <li><a href="/">About</a></li>
    <li><a href="/">Blog</a></li>
    <li><a href="/">Pricing</a></li>
    <li><a href="/">Careers</a></li>
    <li><a href="/">Contact</a></li>
  </>

  return (
    <div>
      <div className="navbar container px-4 lg:px-0 mx-auto">
        <div className="navbar-start">
          <a className="cursor-pointer">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menu}

          </ul>
        </div>
        <div className="navbar-end">
          <a className='flex items-center mr-6 text-[#9D0AFF]' href="/">
            <img className='mr-2' src={cartIcon} alt="cartIcon" />
            Cart
          </a>
         <div className=' hidden md:hidden lg:block'>
         <a className="btn btn-outline border-[#9D0AFF] text-[#9D0AFF] capitalize">Login</a>
          <a className="btn bg-[#9D0AFF] border-none ml-6 capitalize">Get started</a>
         </div>

          {/* Responsive dropdown menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden bg-[#9D0AFF] ">
            {BiMenu}
            X
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menu}
              <li> <a className="btn btn-outline border-[#9D0AFF] text-[#9D0AFF] capitalize">Login</a></li>
          <li><a className="btn bg-[#9D0AFF] border-none ml-6 capitalize">Get started</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar