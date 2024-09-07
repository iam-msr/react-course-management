# React Course Management Application

This is a single-page application (SPA) built with React that simulates a course management system. It allows students to log in, view their dashboard with enrolled courses, mark courses as completed, and browse all available courses. The application uses Mock Service Worker (MSW) to simulate backend API responses.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/iam-msr/react-course-management.git


2. Navigate to the project directory:

   ```bash
   cd react-course-management
   ```
3. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Run the application:

   ```bash
   npm run start
   ```
2. Open your browser and navigate to `http://localhost:3000/`.


## Using the Application

The application provides a simulated course management experience with the following features:

**Login Screen**
- On the welcome screen (i.e., login screen), students can log in by entering their email. The system checks for the user's existence using mock data.
- The login page uses mock user data:
   - Example credentials:
   - Email: ``sriram@mail.com``
   - Email: ``bob@mail.com``
   - Email: ``john@mail.com``
   - Email: ``alice@mail.com``

**Dashboard**
- After logging in, the user is directed to the Dashboard, which lists the courses they are enrolled in, along with their progress in each course.
- A progress bar indicates how much of each course has been completed.
- The user can mark any course as "Completed", updating their progress to 100%.

 **Course Listing**
 - In the navigation bar, there is a link to view all available ``courses``.
 - The Courses page lists all courses available with a search function to filter courses by name or instructor.

**Course Details**
 - Clicking (view details) on a course in the Dashboard or Course Listing pages will take the user to the Course Details page, where they can view more information, such as the course syllabus and prerequisites.

**Logout** 
 - The user can log out using the Logout button in the navigation bar, which will redirect them back to the login screen. 

- Additionally, the application uses Angular in-memory-web-api to simulate a data server. The in-memory-data.service.ts file contains the mock data for user authentication and organization details.
- And, refreshing the page during the authentication process is not recommended, as it can lead to the loss of session data. To ensure that your session data is preserved and you can navigate smoothly between steps, use the provided buttons instead of refreshing the page or going back manually. This way, you can move back and forth through the authentication steps without losing any information.
- If you signed up successfully, you will be redirected to the login page. You can use the same credentials to login in the same session.
- The application is designed to be responsive and can be viewed on different screen sizes.

**Mock Data:**
 - **Courses**: The list of courses, instructors, and details is stored in ``/src/mocks/data/courses.js``.
 - **Students**: Student profiles, including enrollment information and course progress, are stored in ``/src/mocks/data/students.js``.

## Error Handling

- If the user enters an invalid email, an error message is displayed indicating that the user does not exist.
- Progress updates are reflected immediately in the UI

## Mock Backend (MSW)

The application uses Mock Service Worker (MSW) to simulate backend API requests. MSW intercepts HTTP requests to the ``/api/users`` and ``/api/courses`` endpoints and returns mock data from the ``/src/mocks/`` directory.

Mock handlers are defined in ``/src/mocks/handlers.js`` and simulate the following:

 - Fetching users (``GET /api/users``)
 - Fetching courses (``GET /api/courses``)
 - Updating user course progress (``PATCH /api/users/:userId/progress``)

Important Notes:
 - Any progress or data updates only persist for the session. Refreshing the page will reset the data to its original state.
 - The mock backend does not store any data permanently; it only simulates requests and responses.

## Assets

- Static images for courses are stored in the ``src/assets/thumbnails/`` directory. Ensure that the paths are correctly configured in the ``src/mocks/data/courses.js`` file for each course.

## Caching

- Mock data is cached in the browser session. Data entered, such as course progress, is simulated for the duration of the session but is not persisted across refreshes.

## Summary of Features:

- **Login:** Simulated login using mock data.
- **Dashboard:** Displays the student's enrolled courses and progress.
- **Course Listing:** Lists all available courses.
- **Course Details:** Provides detailed information about each course, including syllabus and prerequisites.
- **Logout:** Ends the user's session and redirects them to the login screen.