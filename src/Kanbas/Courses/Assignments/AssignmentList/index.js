import React from "react";
import { Link, useParams } from "react-router-dom";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { MdOutlineAssignment } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoEllipsisVertical } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  // addAssignment,
  deleteAssignment,
  // updateAssignment,
  setAssignment,
} from "../assignmentsReducer";

const AssignmentList = () => {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  // const assignment = useSelector(
  //   (state) => state.assignmentsReducer.assignment
  // );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="list-group mt-3 mb-5">
      <Link
        to="#"
        className="list-group-item list-group-item-action list-group-item-secondary first-child assignments"
        aria-current="true"
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="mt-2">
            <PiDotsSixVerticalBold
              style={{ color: "black", marginRight: "10px" }}
            />
            <strong className="mb-0 ml-2">Assignments</strong>
          </div>
          <div className="float-end mt-2">
            <div className="wd-rounded-text">40% of Total</div>
            <AiOutlinePlus
              style={{ color: "#a0a0a2", marginRight: "10px" }}
              size={20}
            />
            <IoEllipsisVertical
              style={{ color: "gray", marginRight: "10px" }}
              size={20}
            />
          </div>
        </div>
      </Link>

      {courseAssignments.map((assignment) => (
        <div
          key={assignment._id}
          // to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          <div className="d-flex align-items-center justify-content-between">
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}/edit`}
              onClick={() => {
                dispatch(setAssignment(assignment));
              }}
            >
              <div
                className="d-inline-flex mt-2 align-items-center"
                style={{ color: "black" }}
              >
                <PiDotsSixVerticalBold
                  style={{ color: "black", marginRight: "10px" }}
                />
                <MdOutlineAssignment
                  style={{ color: "#288c1d", marginRight: "20px" }}
                />
                <div>
                  <strong className="mb-0 ml-2">{assignment.title}</strong>
                  <br />
                  <small>
                    <span style={{ color: "red" }}>
                      Course: {assignment.course}{" "}
                    </span>
                    | Due Sep 18 at 11:59pm | 100 pts
                  </small>
                  <br />
                  {/* The due date and points can be added if provided in the assignment object */}
                </div>
              </div>
            </Link>
            <div className="center-flex mt-2 float-end">
              <AiFillCheckCircle
                style={{ color: "#067104", marginRight: "20px" }}
                size={20}
              />
              <IoEllipsisVertical
                style={{ color: "gray", marginRight: "10px" }}
                size={20}
              />
              <button
                className="btn btn-danger btn-sm"
                // onClick={() => deleteModule(module._id)}
                // onClick={() => dispatch(deleteModule(module._id))}
                onClick={() => dispatch(deleteAssignment(assignment._id))}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssignmentList;
