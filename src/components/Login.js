// src/components/Login.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Updated import
import { loginUser } from '../redux/actions/authActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [students, setStudents] = useState([]);
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
    } else {
      alert('Invalid email address');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
