import React from "react";
import { useDispatch } from "react-redux";
import { deleteCourse, setCourse } from "./coursesReducer";
import { Link } from "react-router-dom";
function CourseItem({ course }) {
  const dispatch = useDispatch();
  return (
    <li
      //   to={`/Kanbas/Courses/${course._id}`}
      key={course._id}
      className="list-group-item"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <strong>
          <Link
            className="wd-no-underline"
            style={{ color: "black" }}
            to={`/Kanbas/Courses/${course._id}`}
          >
            {course.name}
          </Link>
        </strong>
      </div>
      <div>
        <button
          className="btn btn-danger btn-sm me-3"
          onClick={() => dispatch(deleteCourse(course._id))}
        >
          Delete
        </button>
        <button
          className="btn btn-secondary btn-sm me-3"
          onClick={() => dispatch(setCourse(course))}
        >
          Edit
        </button>
      </div>
    </li>
  );
}
export default CourseItem;
