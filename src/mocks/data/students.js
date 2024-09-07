// src/mocks/data/students.js
export const students = [
    {
        id: 1,
        name: 'Sriram',
        email: 'sriram@mail.com',
        coursesEnrolled: [
            { id: 1, progress: '30%' },
            { id: 3, progress: '90%' },
            { id: 4, progress: '40%' },
            { id: 5, progress: '60%' },
            { id: 6, progress: '80%' },
            { id: 7, progress: '10%' },
            { id: 8, progress: '20%' },
            { id: 9, progress: '50%' },
            { id: 10, progress: '100%' }
        ]
    },
    {
        id: 2,
        name: 'Bob',
        email: 'bob@mail.com',
        coursesEnrolled: [
            { id: 1, progress: '50%' },
            { id: 4, progress: '70%' },
            { id: 3, progress: '30%' },
            { id: 8, progress: '60%' },
            { id: 7, progress: '80%' }
        ]
    },
    {
        id: 3,
        name: 'Alice',
        email: 'alice@mail.com',
        coursesEnrolled: [
            { id: 5, progress: '40%' },
            { id: 6, progress: '60%' },
            { id: 9, progress: '80%' },
            { id: 10, progress: '100%' }
        ]
    },
    {
        id: 4,
        name: 'John',
        email: 'john@mail.com',
        coursesEnrolled: []
    }
];
