import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          {/* Use NavLink for active link styling */}
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                  : 'text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? 'text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                  : 'text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Courses
            </NavLink>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
