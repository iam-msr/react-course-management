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
];