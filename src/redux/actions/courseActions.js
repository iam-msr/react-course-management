// src/redux/actions/courseActions.js
export const loadCourses = (courses) => {
    return {
      type: 'LOAD_COURSES',
      payload: courses
    };
  };
  
  export const markCourseCompleted = (courseId) => {
    return {
      type: 'MARK_COURSE_COMPLETED',
      payload: courseId
    };
  };
  