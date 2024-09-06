import React from 'react';

const CourseCard = ({ course, showProgress = false }) => {
  return (
    <div className="course-card">
      <img src={course.thumbnail} alt={course.name} />
      <h3>{course.name}</h3>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Due Date:</strong> {course.dueDate}</p>
      {showProgress && (
        <div>
          <p><strong>Progress:</strong></p>
          <progress value="50" max="100">50%</progress>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
