// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => {
        const enrolledCourses = data.filter(course => 
          user.coursesEnrolled.includes(course.id.toString())
        );
        setCourses(enrolledCourses);
      });
  }, [user]);

  return (
    <div>
    <Navbar />
      <h2>{user.name}'s Dashboard</h2>
      <div>
        {courses.map(course => (
          <div key={course.id}>
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            <Link to={`/courses/${course.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
