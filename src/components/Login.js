import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Updated import
import { loginUser } from '../redux/actions/authActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(''); // State for error message
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch students from the mock API
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = students.find(student => student.email === email);
    if (user) {
      dispatch(loginUser(user));
      navigate('/dashboard'); // Use navigate instead of history.push
      setError(''); // Clear any previous error message
    } else {
      setError('No user found with this email address'); // Set error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-base"
            />
          </div>
          {error && (
            <div className="text-red-600 text-sm mb-4">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
