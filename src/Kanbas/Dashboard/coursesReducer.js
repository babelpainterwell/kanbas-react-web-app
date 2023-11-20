import { createSlice } from "@reduxjs/toolkit";
// import db from "../Database";

const initialState = {
  // courses: db.courses,
  courses: [],
  course: {
    name: "New Course",
    number: "New Course Number",
    startDate: "2023-11-10",
    endDate: "2023-12-15",
  },
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload;
    },
    addCourse(state, action) {
      const newCourses = [
        ...state.courses,
        { ...action.payload, _id: new Date().getTime().toString() },
      ];
      state.courses = newCourses;
      // Reset course to initial structure
      state.course = initialState.course;
    },
    updateCourse(state, action) {
      const newCourses = state.courses.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.courses = newCourses;
      // Reset course to initial structure
      state.course = initialState.course;
    },
    deleteCourse(state, action) {
      const newCourses = state.courses.filter(
        (item) => item._id !== action.payload
      );
      state.courses = newCourses;
    },
    setCourse(state, action) {
      state.course = action.payload;
    },
  },
});

export const { addCourse, deleteCourse, updateCourse, setCourse, setCourses } =
  coursesSlice.actions;
export default coursesSlice.reducer;
