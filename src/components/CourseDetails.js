// src/components/CourseDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch('/api/courses')
      .then(response => response.json())
      .then(courses => {
        const selectedCourse = courses.find(course => course.id.toString() === id);
        setCourse(selectedCourse);
      });
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    
    <div>
    <Navbar />
      <h2>{course.name}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
      <h3>Syllabus</h3>
      <ul>
        {course.syllabus.map((week, index) => (
          <li key={index}><strong>Week {week.week}:</strong> {week.topic} - {week.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
