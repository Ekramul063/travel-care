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
        alert('signOUt successfully')
      })
      .catch(err => console.error(err))
  }
  return (
    <div>
      <div className="navbar bg-green-300">
        <div className="flex-1">
          <Link to={'/'}> <img src={logo} alt="" /> <p className='font-bold text-sm text-orange-600'>Travel Care</p></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/addservice'}>Add Service</Link></li>
            <li><Link to={'/myreview'}>My Review</Link></li>
           
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
      </div>
    </div>
  );
};

export default Navbar;