const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_COURSES':
      return action.payload;
    case 'MARK_COURSE_COMPLETED':
      return state.map(course =>
        course.id === action.payload ? { ...course, completed: true } : course
      );
    default:
      return state;
  }
};

export default courseReducer;
