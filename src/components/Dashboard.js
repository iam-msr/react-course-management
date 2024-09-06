import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    // Fetch the list of all courses
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => {
        // Filter the courses based on user enrollment
        const enrolledCourses = data.filter(course =>
          user.coursesEnrolled.some(enrollment => enrollment.id === course.id)
        ).map(course => {
          const enrollment = user.coursesEnrolled.find(e => e.id === course.id);
          return { ...course, progress: enrollment ? enrollment.progress : '0%' };
        });

        setCourses(enrolledCourses);
      });
  }, [user]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{user.name}'s Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length > 0 ? courses.map(course => (
            <div
              key={course.id}
              className="bg-white p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <img src={course.thumbnail} alt={course.name} className="w-full h-48 object-contain rounded-md mb-2 p-2" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
                <p className="text-gray-500 mb-4">Duration: {course.duration}</p>
                <div className="relative mb-4">
                  <div className="bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: course.progress }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{course.progress} Completed</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  to={`/courses/${course.id}`}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View Details
                </Link>
                {course.progress !== '100%' && (
                  <button
                    className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Mark as Completed
                  </button>
                )}
              </div>
            </div>
          )) : (
            <p className="text-gray-600">You are not enrolled in any courses.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
