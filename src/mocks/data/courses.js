// Data for the courses page-  src/mocks/data/courses.js

//Import the thumbnail images
import courseId1 from '../../assets/thumbnails/courses/courseId1.jpg';
import courseId2 from '../../assets/thumbnails/courses/courseId2.jpg';
import courseId3 from '../../assets/thumbnails/courses/courseId3.jpg';
import courseId4 from '../../assets/thumbnails/courses/courseId4.jpg';
import courseId5 from '../../assets/thumbnails/courses/courseId5.jpg';
import courseId6 from '../../assets/thumbnails/courses/courseId6.jpg';
import courseId7 from '../../assets/thumbnails/courses/courseId7.jpg';
import courseId8 from '../../assets/thumbnails/courses/courseId8.jpg';
import courseId9 from '../../assets/thumbnails/courses/courseId9.jpg';
import courseId10 from '../../assets/thumbnails/courses/courseId10.jpg';

export const courses = [
    {
        id: 1, // Unique identifier for the course
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress
        thumbnail: courseId1, //Link to the course thumbnail
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
        studentsEnrolled: ['1', '2', '4', '5'],
    },
    {
        id: 2,
        name: 'Advanced React Development',
        instructor: 'Jane Smith',
        description: 'Take your React skills to the next level with this advanced course.',
        enrollmentStatus: 'Open',
        thumbnail: courseId2,
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
        studentsEnrolled: ['1', '3', '4'],
    },
    {
        id: 3,
        name: 'Python for Beginners',
        instructor: 'Alice Johnson',
        description: 'An introductory course to Python programming. Ideal for those new to coding.',
        enrollmentStatus: 'Open',
        thumbnail: courseId3,
        duration: '6 weeks',
        schedule: 'Mondays and Wednesdays, 5:00 PM - 7:00 PM',
        location: 'Online',
        prerequisites: ['None'],
        syllabus: [
            { week: 1, topic: 'Introduction to Python', content: 'Setting up Python and writing your first script.' },
            { week: 2, topic: 'Basic Syntax and Variables', content: 'Understanding Python syntax and variable types.' },
            { week: 3, topic: 'Control Structures', content: 'Using if statements, loops, and handling exceptions.' },
            { week: 4, topic: 'Functions and Modules', content: 'Creating and using functions and modules in Python.' },
            { week: 5, topic: 'File Handling', content: 'Reading from and writing to files.' },
            { week: 6, topic: 'Project Work', content: 'Building a small project using Python.' }
        ],
        studentsEnrolled: [],
    },
    {
        id: 4,
        name: 'Angular Fundamentals',
        instructor: 'Bob Lee',
        description: 'Learn the basics of Angular and how to build single-page applications using this powerful framework.',
        enrollmentStatus: 'Closed',
        thumbnail: courseId4,
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 4:00 PM - 6:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Understanding of HTML and CSS'],
        syllabus: [
            { week: 1, topic: 'Introduction to Angular', content: 'Setting up Angular and understanding its architecture.' },
            { week: 2, topic: 'Components and Templates', content: 'Creating and using Angular components and templates.' },
            { week: 3, topic: 'Data Binding', content: 'Understanding one-way and two-way data binding in Angular.' },
            { week: 4, topic: 'Directives', content: 'Using built-in and custom directives in Angular.' },
            { week: 5, topic: 'Services and Dependency Injection', content: 'Creating and injecting services in Angular.' },
            { week: 6, topic: 'Routing and Navigation', content: 'Implementing routing and navigation in an Angular application.' },
            { week: 7, topic: 'Forms and Validation', content: 'Working with forms and validation in Angular.' },
            { week: 8, topic: 'Deployment', content: 'Building and deploying an Angular application.' }
        ],
        studentsEnrolled: [],
    },
    {
        id: 5,
        name: 'Node.js Essentials',
        instructor: 'Carol Martin',
        description: 'A comprehensive course on Node.js, covering server-side development and asynchronous programming.',
        enrollmentStatus: 'Open',
        thumbnail: courseId5,
        duration: '10 weeks',
        schedule: 'Mondays and Fridays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge'],
        syllabus: [
            { week: 1, topic: 'Introduction to Node.js', content: 'Understanding the basics of Node.js and setting up your environment.' },
            { week: 2, topic: 'Core Modules', content: 'Exploring Node.js core modules and their uses.' },
            { week: 3, topic: 'Asynchronous Programming', content: 'Understanding callbacks, promises, and async/await.' },
            { week: 4, topic: 'Creating a Web Server', content: 'Building a basic web server using Node.js.' },
            { week: 5, topic: 'Working with Databases', content: 'Connecting to and querying databases using Node.js.' },
            { week: 6, topic: 'RESTful APIs', content: 'Creating RESTful APIs with Node.js and Express.' },
            { week: 7, topic: 'Error Handling', content: 'Implementing error handling in your Node.js applications.' },
            { week: 8, topic: 'Authentication and Authorization', content: 'Implementing user authentication and authorization.' },
            { week: 9, topic: 'Testing Node.js Applications', content: 'Writing tests for Node.js applications.' },
            { week: 10, topic: 'Deployment and Scaling', content: 'Deploying and scaling your Node.js applications.' }
        ],
        studentsEnrolled: [],
    },
    {
        id: 6,
        name: 'Introduction to Django',
        instructor: 'David Wilson',
        description: 'Get started with Django, a high-level Python web framework for building web applications quickly and efficiently.',
        enrollmentStatus: 'Open',
        thumbnail: courseId6,
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic Python knowledge'],
        syllabus: [
            { week: 1, topic: 'Django Overview', content: 'Introduction to Django and its features.' },
            { week: 2, topic: 'Setting Up Django', content: 'Installing and configuring Django.' },
            { week: 3, topic: 'Creating Django Projects', content: 'Creating and managing Django projects.' },
            { week: 4, topic: 'Models and Databases', content: 'Working with Django models and databases.' },
            { week: 5, topic: 'Views and Templates', content: 'Creating views and templates in Django.' },
            { week: 6, topic: 'Forms and Validation', content: 'Handling forms and validation in Django.' },
            { week: 7, topic: 'User Authentication', content: 'Implementing user authentication and authorization.' },
            { week: 8, topic: 'Deployment', content: 'Deploying a Django application to a web server.' }
        ],
        studentsEnrolled: [],
    },
    {
        id: 7,
        name: 'Web Development with Flask',
        instructor: 'Grace Taylor',
        description: 'Explore Flask, a micro web framework for Python, and learn to build scalable web applications.',
        enrollmentStatus: 'Open',
        thumbnail: courseId7,
        duration: '7 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic Python knowledge'],
        syllabus: [
            { week: 1, topic: 'Introduction to Flask', content: 'Setting up Flask and understanding its core components.' },
            { week: 2, topic: 'Routing and Views', content: 'Creating routes and views in Flask.' },
            { week: 3, topic: 'Templates and Forms', content: 'Using Jinja templates and handling forms in Flask.' },
            { week: 4, topic: 'Databases with Flask', content: 'Integrating databases and ORM with Flask.' },
            { week: 5, topic: 'User Authentication', content: 'Implementing user authentication and session management.' },
            { week: 6, topic: 'REST APIs with Flask', content: 'Building RESTful APIs using Flask.' },
            { week: 7, topic: 'Deployment', content: 'Deploying Flask applications to a web server.' }
        ],
        studentsEnrolled: [],
    },
    {
        id: 8,
        name: 'Introduction to Kubernetes',
        instructor: 'Hannah Lewis',
        description: 'Learn the basics of Kubernetes for container orchestration and management of containerized applications.',
        enrollmentStatus: 'Open',
        thumbnail: courseId8,
        duration: '6 weeks',
        schedule: 'Wednesdays and Fridays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic understanding of Docker'],
        syllabus: [
            { week: 1, topic: 'Introduction to Kubernetes', content: 'Understanding the architecture and components of Kubernetes.' },
            { week: 2, topic: 'Setting Up Kubernetes', content: 'Installing and configuring a Kubernetes cluster.' },
            { week: 3, topic: 'Deploying Applications', content: 'Deploying and managing applications in Kubernetes.' },
            { week: 4, topic: 'Services and Networking', content: 'Understanding Kubernetes services and networking.' },
            { week: 5, topic: 'Storage and Volumes', content: 'Managing storage and volumes in Kubernetes.' },
            { week: 6, topic: 'Monitoring and Troubleshooting', content: 'Monitoring and troubleshooting Kubernetes clusters and applications.' }
        ],
        studentsEnrolled: [],
    },
    {
        id: 9,
        name: 'AWS Cloud Fundamentals',
        instructor: 'Jack Green',
        description: 'Get started with Amazon Web Services (AWS) and learn to deploy and manage applications in the cloud.',
        enrollmentStatus: 'Open',
        thumbnail: courseId9,
        duration: '7 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic understanding of cloud computing'],
        syllabus: [
            { week: 1, topic: 'Introduction to AWS', content: 'Overview of AWS services and architecture.' },
            { week: 2, topic: 'EC2 and S3', content: 'Working with EC2 instances and S3 storage.' },
            { week: 3, topic: 'Networking and VPCs', content: 'Understanding networking and Virtual Private Clouds (VPCs).' },
            { week: 4, topic: 'IAM and Security', content: 'Managing identity and access with IAM.' },
            { week: 5, topic: 'Databases and RDS', content: 'Using AWS databases and RDS.' },
            { week: 6, topic: 'Deployment and Automation', content: 'Deploying applications and automating workflows with AWS.' },
            { week: 7, topic: 'Monitoring and Cost Management', content: 'Monitoring AWS resources and managing costs.' }
        ],
        studentsEnrolled: [],
    },
    {
        id: 10,
        name: 'Mastering JavaScript',
        instructor: 'Emily Davis',
        description: 'Dive deep into JavaScript and learn advanced concepts and best practices for modern development.',
        enrollmentStatus: 'InProgress',
        thumbnail: courseId10,
        duration: '10 weeks',
        schedule: 'Wednesdays and Fridays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge'],
        syllabus: [
            { week: 1, topic: 'Advanced JavaScript Concepts', content: 'Exploring advanced JavaScript features and concepts.' },
            { week: 2, topic: 'Asynchronous JavaScript', content: 'Working with asynchronous JavaScript, callbacks, and promises.' },
            { week: 3, topic: 'JavaScript ES6+', content: 'Understanding new features introduced in ES6 and later.' },
            { week: 4, topic: 'Functional Programming', content: 'Applying functional programming principles in JavaScript.' },
            { week: 5, topic: 'Object-Oriented JavaScript', content: 'Using object-oriented programming techniques in JavaScript.' },
            { week: 6, topic: 'JavaScript Design Patterns', content: 'Applying common design patterns in JavaScript.' },
            { week: 7, topic: 'Testing JavaScript', content: 'Writing and running tests for JavaScript code.' },
            { week: 8, topic: 'JavaScript Performance Optimization', content: 'Optimizing JavaScript code for better performance.' },
            { week: 9, topic: 'JavaScript with Web APIs', content: 'Working with web APIs and integrating them with JavaScript.' },
            { week: 10, topic: 'Final Project', content: 'Building a complex JavaScript application as a final project.' }
        ],
        studentsEnrolled: [],
    }
];