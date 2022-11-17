import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import logo from '../../logo.png'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = event => {
    event.preventDefault();
    logOut()
      .then(() => {
      })
      .catch(err => console.error(err))
  }
  return (
    <div>


      <div className="navbar bg-green-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/addservice'}>Add Service</Link></li>
            <li><Link to={'/myreview'}>My Review</Link></li>
            <li><Link to={'/blogs'}>Blogs</Link></li>
            </ul>
          </div>
          <div className="flex-1">
          <Link to={'/'}> <img style={{height:'50px'}} src={logo} alt="" /> <p className='font-bold text-sm text-orange-600'>Travel Care</p></Link>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/addservice'}>Add Service</Link></li>
            <li><Link to={'/myreview'}>My Review</Link></li>
            <li><Link to={'/blogs'}>Blogs</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className='btn'>
          {
                user?.uid ?
                  <Link onClick={handleLogOut}> Sign Out</Link>
                  :
                  <Link to={'/signin'}> Sign In</Link>


              }
          </button>
        </div>
      </div>













      {/* <div className="navbar bg-green-300">
        <div className="flex-1">
          <Link to={'/'}> <img src={logo} alt="" /> <p className='font-bold text-sm text-orange-600'>Travel Care</p></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/addservice'}>Add Service</Link></li>
            <li><Link to={'/myreview'}>My Review</Link></li>
            <li><Link to={'/blogs'}>Blogs</Link></li>
           
            <li className='btn btn-warning ml-5'>
              {
                user?.uid ?
                  <Link onClick={handleLogOut}> Sign Out</Link>
                  :
                  <Link to={'/signin'}> Sign In</Link>


              }
            </li>


          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;