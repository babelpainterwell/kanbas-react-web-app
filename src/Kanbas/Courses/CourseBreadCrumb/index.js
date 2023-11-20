import React from "react";
import { BiGlassesAlt } from "react-icons/bi";
import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import db from "../../Database";

function CourseBreadCrumb({ course, screen }) {
  // const { pathname } = useLocation();
  // const [, , , , , assignmentId] = pathname.split("/");
  const { assignmentId } = useParams();
  // const screen = "";

  const current_assignment = assignmentId
    ? db.assignments.find((assignment) => assignment._id === assignmentId)
    : null;

  return (
    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
      <ol className="breadcrumb d-flex">
        <li className="breadcrumb-item">
          <i
            className="fa-solid fa-bars"
            aria-hidden="true"
            style={{ color: "red" }}
          ></i>
          <a
            href="/#/Kanbas/Dashboard"
            className="wd-no-underline"
            style={{ color: "red", marginLeft: "10px" }}
          >
            {course.number}.{course._id}
          </a>
        </li>
        {!assignmentId ? (
          <li
            className="breadcrumb-item active"
            aria-current="page"
            style={{ color: "black" }}
          >
            {screen}
          </li>
        ) : (
          <>
            <li className="breadcrumb-item" style={{ color: "red" }}>
              {screen}
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ color: "black" }}
            >
              {current_assignment.title}
            </li>
          </>
        )}
        <li className="ms-auto align-self-center">
          <a href="/#/Kanbas/Dashboard">
            <button type="button" className="btn btn-secondary">
              <BiGlassesAlt /> Student View
            </button>
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default CourseBreadCrumb;
