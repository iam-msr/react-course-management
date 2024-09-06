// Data for the courses page-  src/mocks/data/courses.js
export const courses = [
    {
        id: 1, // Unique identifier for the course
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress
        thumbnail: 'your.image.here', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building your first app',
                content: 'Creating a simple mobile app using React Native.'
            },
            {
                week: 3,
                topic: 'Styling and layout',
                content: 'Styling your app using CSS and Flexbox.'
            },
            {
                week: 4,
                topic: 'Navigation',
                content: 'Adding navigation to your app using React Navigation.'
            },
            {
                week: 5,
                topic: 'State management',
                content: 'Managing state in your app using React Hooks.'
            },
            {
                week: 6,
                topic: 'API integration',
                content: 'Fetching data from an API and displaying it in your app.'
            },
            {
                week: 7,
                topic: 'Testing and debugging',
                content: 'Testing your app and debugging common issues.'
            },
            {
                week: 8,
                topic: 'Deployment',
                content: 'Building and deploying your app to the App Store and Google Play.'
            }
        ],
        studentsEnrolled: ['1', '2'],
    },
    {
        id: 2,
        name: 'Advanced React Development',
        instructor: 'Jane Smith',
        description: 'Take your React skills to the next level with this advanced course.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '12 weeks',
        schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Intermediate JavaScript knowledge', 'Experience with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Advanced React concepts',
                content: 'Overview of advanced React concepts and best practices.'
            },
            {
                week: 2,
                topic: 'React performance',
                content: 'Optimizing your React app for performance.'
            },
            {
                week: 3,
                topic: 'Server-side rendering',
                content: 'Implementing server-side rendering in your React app.'
            },
            {
                week: 4,
                topic: 'State management with Redux',
                content: 'Managing state in your app using Redux.'
            },
            {
                week: 5,
                topic: 'Testing React apps',
                content: 'Writing tests for your React components.'
            },
            {
                week: 6,
                topic: 'React patterns and best practices',
                content: 'Common patterns and best practices for React development.'
            },
            {
                week: 7,
                topic: 'React hooks in depth',
                content: 'Exploring advanced use cases for React hooks.'
            },
            {
                week: 8,
                topic: 'Advanced API integration',
                content: 'Integrating with GraphQL and other advanced APIs.'
            },
            {
                week: 9,
                topic: 'React Native development',
                content: 'Building mobile apps with React Native.'
            },
            {
                week: 10,
                topic: 'React and TypeScript',
                content: 'Using TypeScript with React for type safety.'
            },
            {
                week: 11,
                topic: 'React and serverless',
                content: 'Building serverless applications with React.'
            },
            {
                week: 12,
                topic: 'Final project',
                content: 'Building a complete React application from scratch.'
            }
        ],
        studentsEnrolled: ['3', '4'],
    }
];