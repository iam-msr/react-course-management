// src/components/CourseListing.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const CourseListing = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div>
    <Navbar />
      <h2>All Courses</h2>
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

export default CourseListing;
