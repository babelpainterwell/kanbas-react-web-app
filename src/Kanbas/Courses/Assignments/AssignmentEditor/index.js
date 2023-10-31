import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// import db from "../../../Database";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  setAssignment,
  updateAssignment,
  addAssignment,
} from "../assignmentsReducer";
import { useLocation } from "react-router-dom";

function AssignmentEditor() {
  const { courseId } = useParams();
  const { pathname } = useLocation();

  // const assignments = useSelector(
  //   (state) => state.assignmentsReducer.assignments
  // );
  // const currentAssignment = assignments.find(
  //   (assignment) => assignment._id === assignmentId
  // );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // dispatch(setAssignment(currentAssignment));
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );

  const handleSave = (event) => {
    event.preventDefault(); // Prevent default form submission
    dispatch(updateAssignment(assignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleAdd = () => {
    dispatch(addAssignment({ ...assignment, course: courseId }));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  let creatingNewAssignment = false;
  if (pathname.split("/")[5] === "create") {
    creatingNewAssignment = true;
  }
  // console.log(assignmentId);
  // console.log(creatingNewAssignment + " ");

  return (
    <div className="container-fluid">
      {/* Modules including top buttons */}
      <div className="d-block col-12">
        <div className="d-flex align-items-center justify-content-end mt-2 mb-2">
          <div className="d-block me-4">
            <AiFillCheckCircle
              style={{ color: "#067104", marginRight: "8px" }}
              size={20}
            />
            <strong style={{ color: "#068927" }}>Published</strong>
          </div>
          <button className="btn btn-sm btn-secondary d-inline-block me-2">
            <FaEllipsisV />
          </button>
        </div>

        <hr />

        {/* Editor goes here */}
        <form
          onSubmit={creatingNewAssignment ? handleAdd : handleSave}
          className="w-75"
        >
          <div className="mb-3">
            <label htmlFor="assignment-name" className="form-label">
              <strong>Assignment Name</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="assignment-name"
              value={assignment.title}
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, title: e.target.value })
                )
              }
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              className="form-control"
              placeholder="Add some description here"
              rows="4"
              value={assignment.description}
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, description: e.target.value })
                )
              }
            ></textarea>
          </div>

          {/* Add the form grid system here */}
          <div className="container-fluid mb-5 w-75">
            <div className="row mt-3 mb-3 me-5">
              <div className="col-3 text-end">
                <label htmlFor="a-points" className="form-label">
                  <strong>Points</strong>
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  className="form-control ms-2"
                  id="a-points"
                  value={assignment.points}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({ ...assignment, points: e.target.value })
                    )
                  }
                />
              </div>
            </div>

            <div className="row mt-3 mb-3 me-5">
              <div className="col-3 text-end">
                <label htmlFor="a-assign" className="form-label">
                  <strong>Assign</strong>
                </label>
              </div>
              <div className="col-9">
                <div
                  className="pt-3"
                  style={{
                    border: "1px solid rgb(196, 200, 203)",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  <div className="container-fluid">
                    <div className="row mt-1">
                      <div className="col-12">
                        <label htmlFor="due" className="form-label">
                          <b>Due</b>
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="due"
                          value={assignment.dueDate}
                          onChange={(e) =>
                            dispatch(
                              setAssignment({
                                ...assignment,
                                dueDate: e.target.value,
                              })
                            )
                          }
                        />
                      </div>
                    </div>

                    <div className="row mt-3 mb-2">
                      <div className="col-6">
                        <label htmlFor="from" className="form-label">
                          <b>Available from</b>
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="from"
                          value={assignment.startDate}
                          onChange={(e) =>
                            dispatch(
                              setAssignment({
                                ...assignment,
                                startDate: e.target.value,
                              })
                            )
                          }
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="until" className="form-label">
                          <b>Until</b>
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="until"
                          value={assignment.endDate}
                          onChange={(e) =>
                            dispatch(
                              setAssignment({
                                ...assignment,
                                endDate: e.target.value,
                              })
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer part including the buttons */}
          <hr />

          <div className="mb-3 form-check d-inline-block">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Notify users that this content has changed
            </label>
          </div>
          <div className="float-end d-inline-block">
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-secondary me-2"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-danger">
              {creatingNewAssignment ? "Add" : "Save"}
            </button>
          </div>
          <hr />
        </form>
      </div>
    </div>
  );
}

export default AssignmentEditor;
