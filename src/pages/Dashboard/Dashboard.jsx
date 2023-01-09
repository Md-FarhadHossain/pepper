import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* <!-- Page content here --> */}
    <Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='update-heading'>Update Main heading</Link></li>
      <li><Link to='update-logo'>Update Logo</Link></li>
      <li><Link to='counter-update'>Counter Update</Link></li>
    </ul>
  
  </div>
</div>
    </div>
  )
}

export default Dashboard