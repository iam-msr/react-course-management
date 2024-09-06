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
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{user.name}'s Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div
              key={course.id}
              className="bg-white p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
              <Link
                to={`/courses/${course.id}`}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
