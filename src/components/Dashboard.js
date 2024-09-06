// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { updateUser } from '../redux/actions/authActions'; // Import updateUser action

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const user = useSelector(state => state.auth.user); // Get the logged-in user
  const dispatch = useDispatch(); // To update user data after progress change

  useEffect(() => {
    // Fetch all courses
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => {
        // Filter courses based on the user's enrollment
        const enrolledCourses = data.filter(course =>
          user.coursesEnrolled.some(enrollment => enrollment.id === course.id)
        ).map(course => {
          const enrollment = user.coursesEnrolled.find(e => e.id === course.id);
          return { ...course, progress: enrollment ? enrollment.progress : '0%' };
        });
        setCourses(enrolledCourses);
      });
  }, [user]);

  // Fetch updated student data and dispatch updateUser to update Redux store
  const fetchUpdatedUser = () => {
    fetch('/api/users')
      .then(response => response.json())
      .then(students => {
        const updatedUser = students.find(student => student.id === user.id);
        dispatch(updateUser(updatedUser)); // Dispatch the updated user to Redux
      });
  };

  // Handle marking the course as completed
  const markAsCompleted = (courseId) => {
    // Update course progress to 100% in UI immediately
    const updatedCourses = courses.map(course =>
      course.id === courseId ? { ...course, progress: '100%' } : course
    );
    setCourses(updatedCourses);

    // Send a PATCH request to update the progress in the backend (mocked by MSW)
    fetch(`/api/users/${user.id}/progress`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        courseId,
        progress: '100%',
      }),
    })
      .then(() => {
        // After successfully updating the backend, refetch and update user in Redux
        fetchUpdatedUser();
      })
      .catch(error => {
        console.error('Error updating progress:', error);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h2>
        <p className="text-gray-600 mb-6">Welcome back, {user.name}! Here are your enrolled courses:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length > 0 ? courses.map(course => (
            <div
              key={course.id}
              className="bg-white p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <img src={course.thumbnail} alt={course.name} className="w-full h-48 object-over rounded-md mb-2 p-2" />
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
                    onClick={() => markAsCompleted(course.id)} // Mark as completed
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
