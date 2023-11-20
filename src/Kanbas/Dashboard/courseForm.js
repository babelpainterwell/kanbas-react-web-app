import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCourse, addCourse, updateCourse } from "./coursesReducer";
import * as client from "./client";

function CourseForm() {
  const { course } = useSelector((state) => state.coursesReducer);
  const dispatch = useDispatch();

  const handleAddCourse = () => {
    client.createCourse(course).then((course) => {
      dispatch(addCourse(course));
    });
  };

  const handleUpdateCourse = () => {
    client.updateCourse(course).then((status) => {
      dispatch(updateCourse(course));
    });
  };
  return (
    <li
      className="list-group-item"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex" }}>
        <input
          value={course.name}
          className="form-control me-2"
          onChange={(e) =>
            dispatch(setCourse({ ...course, name: e.target.value }))
          }
        />
        <input
          value={course.number}
          className="form-control me-2"
          onChange={(e) =>
            dispatch(setCourse({ ...course, number: e.target.value }))
          }
        />
        <input
          value={course.startDate}
          className="form-control me-2"
          type="date"
          onChange={(e) =>
            dispatch(setCourse({ ...course, startDate: e.target.value }))
          }
        />
        <input
          value={course.endDate}
          className="form-control me-2"
          type="date"
          onChange={(e) =>
            dispatch(setCourse({ ...course, endDate: e.target.value }))
          }
        />
      </div>
      <div>
        <button className="btn btn-success me-3" onClick={handleAddCourse}>
          Add
        </button>
        <button className="btn btn-secondary me-3" onClick={handleUpdateCourse}>
          Update
        </button>
      </div>
    </li>
  );
}
export default CourseForm;
