import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import AssignmentList from "./AssignmentList";
import { FaEllipsisV } from "react-icons/fa";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="container-fluid">
      <div className="d-block col-12">
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <form className="form-inline my-lg-0">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search for Assignment"
                  aria-label="Search"
                  style={{ width: "300px" }}
                />
              </form>
            </div>
            <div>
              <button className="btn btn-secondary btn-sm d-inline-block me-2">
                + Group
              </button>
              <button className="btn btn-danger btn-sm d-inline-block me-2">
                + Assignment
              </button>
              <button className="btn btn-sm btn-secondary d-inline-block me-2">
                <FaEllipsisV />
              </button>
            </div>
          </div>
          <hr />
          <AssignmentList assignments={courseAssignments} />
        </div>
      </div>
    </div>
  );
}

export default Assignments;
