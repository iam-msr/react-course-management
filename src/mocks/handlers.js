//mocks/handlers.js
import {http, HttpResponse} from 'msw';
import {students} from './data/students';
import {courses} from './data/courses';

export const handlers = [
  http.get('/api/users', () => {
    // Respond with the list of students
    return HttpResponse.json(students);
  }),

  http.get('/api/courses', () => {
    // Respond with the list of courses
    return HttpResponse.json(courses);
  }),

  http.patch('/api/users/:userId/progress', async ({ request, params }) => {
    const { userId } = params;
    const { courseId, progress } = await request.json();

    // Find the student by ID
    const student = students.find(student => student.id === parseInt(userId));
    if (student) {
      // Find the course in the student's enrolled courses and update the progress
      const course = student.coursesEnrolled.find(course => course.id === courseId);
      if (course) {
        course.progress = progress; // Update course progress
      }
    }

    // Return the updated student data
    return HttpResponse.json(student);
  })

];