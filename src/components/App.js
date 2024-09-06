// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CourseListing from './CourseListing';
import CourseDetails from './CourseDetails';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<CourseListing />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
