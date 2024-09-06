import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  useEffect(() => {
    fetch('/api/courses')
      .then(response => response.json())
      .then(courses => {
        const selectedCourse = courses.find(course => course.id.toString() === id);
        setCourse(selectedCourse);
      });
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{course.name}</h2>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="text-gray-700 mb-2"><strong>Instructor:</strong> {course.instructor}</p>
          <p className="text-gray-700 mb-2"><strong>Description:</strong> {course.description}</p>
          <p className="text-gray-700 mb-2"><strong>Enrollment Status:</strong> 
            <span className={`px-2 py-1 rounded-md ${getEnrollmentStatusClass(course.enrollmentStatus)}`}>
              {course.enrollmentStatus}
            </span>
          </p>
          <p className="text-gray-700 mb-2"><strong>Duration:</strong> {course.duration}</p>
          <p className="text-gray-700 mb-2"><strong>Schedule:</strong> {course.schedule}</p>
          <p className="text-gray-700 mb-2"><strong>Location:</strong> {course.location}</p>
          <p className="text-gray-700 mb-4"><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
          
          <div className="mb-4">
            <button
              onClick={() => setIsSyllabusOpen(!isSyllabusOpen)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              {isSyllabusOpen ? 'Hide Syllabus' : 'Show Syllabus'}
            </button>
          </div>
          
          {isSyllabusOpen && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Syllabus</h3>
              <ul className="space-y-2">
                {course.syllabus.map((week, index) => (
                  <li key={index} className="text-gray-700">
                    <strong>Week {week.week}:</strong> {week.topic} - {week.content}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to determine enrollment status class
const getEnrollmentStatusClass = (status) => {
  switch (status) {
    case 'Open':
      return 'bg-green-100 text-green-800';
    case 'Closed':
      return 'bg-red-100 text-red-800';
    case 'In Progress':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default CourseDetails;
