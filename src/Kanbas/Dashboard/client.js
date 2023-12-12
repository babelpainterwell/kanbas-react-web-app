import axios from "axios";
const API_BASE = process.env.REACT_APP_BASE_API_URL;
const COURSES_URL = `${API_BASE}/api/courses`;

// Create a new course
// return the new created course
export const createCourse = async (course) => {
  const response = await axios.post(COURSES_URL, course);
  return response.data;
};

// Delete a course by ID
export const deleteCourse = async (courseId) => {
  const response = await axios.delete(`${COURSES_URL}/${courseId}`);
  return response.data;
};

// Update a specific course
export const updateCourse = async (course) => {
  const response = await axios.put(`${COURSES_URL}/${course._id}`, course);
  return response.data;
};

// Retrieve all courses
export const findAllCourses = async () => {
  const response = await axios.get(COURSES_URL);
  return response.data;
};

// Find a specific course by its ID
export const findCourseById = async (courseId) => {
  const response = await axios.get(`${URL}/${courseId}`);
  return response.data;
};
