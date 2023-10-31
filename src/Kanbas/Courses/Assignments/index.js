import React from "react";
import { Link } from "react-router-dom";
// import db from "../../Database";
import AssignmentList from "./AssignmentList";
import { FaEllipsisV } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setAssignment } from "./assignmentsReducer";

function Assignments() {
  // const { courseId } = useParams();
  // const assignments = db.assignments;
  // const courseAssignments = assignments.filter(
  //   (assignment) => assignment.course === courseId
  // );
  const initialStateAssignment = {
    title: "New Assignment Title",
    description: "New Assignment Description",
    points: "100",
    course: "RS103",
    startDate: "2023-01-10",
    endDate: "2023-05-15",
    dueDate: "2023-05-12",
  };
  const dispatch = useDispatch();

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
              <Link
                to={`create`}
                onClick={() => {
                  dispatch(setAssignment(initialStateAssignment));
                }}
              >
                <button className="btn btn-danger btn-sm d-inline-block me-2">
                  + Assignment
                </button>
              </Link>
              <button className="btn btn-sm btn-secondary d-inline-block me-2">
                <FaEllipsisV />
              </button>
            </div>
          </div>
          <hr />
          <AssignmentList />
        </div>
      </div>
    </div>
  );
}

export default Assignments;
