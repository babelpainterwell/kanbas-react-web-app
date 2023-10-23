import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  // console.log(courseId, assignmentId);
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

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
        <form action="/Kanbas/Courses/Assignments" className="w-75">
          <div className="mb-3">
            <label htmlFor="assignment-name" className="form-label">
              <strong>Assignment Name</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="assignment-name"
              placeholder={assignment.title}
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              className="form-control"
              placeholder="Add some description here"
              rows="4"
              defaultValue="This assignment describes how to install the development
              environment for creating and working with Web applications we will
              be developing this semester. We will add new content every week,
              pushing the code to github source respository, and then deploying
              the content to a remote server hosted on Netlify"
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
                  placeholder="100"
                />
              </div>
            </div>
            <div className="row mt-3 mb-3 me-5">
              <div className="col-3 text-end">
                <label htmlFor="a-group" className="form-label">
                  <strong>Assignment Group</strong>
                </label>
              </div>
              <div className="col-9">
                <select
                  id="a-group"
                  className="form-control ms-2"
                  defaultValue="ASSIGNMENTS"
                >
                  <option value="assignments">ASSIGNMENTS</option>
                  <option value="quiz">QUIZZES</option>
                  <option value="exam">EXAM</option>
                </select>
              </div>
            </div>
            <div className="row mt-3 mb-3 me-5">
              <div className="col-3 text-end">
                <label htmlFor="a-display" className="form-label">
                  <strong>Display Grade as</strong>
                </label>
              </div>
              <div className="col-9">
                <select
                  id="a-display"
                  className="form-control ms-2"
                  defaultValue="Percentage"
                >
                  <option value="percentage">Percentage</option>
                  <option value="number">Number</option>
                </select>
                <div className="mt-3 form-check d-inline-block ms-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="not-count-grade"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="not-coount-grade"
                  >
                    Do not count this assignment towards the final grade
                  </label>
                </div>
              </div>
            </div>

            <div className="row mt-3 mb-3 me-5">
              <div className="col-3 text-end">
                <label htmlFor="a-submission-type" className="form-label">
                  <strong>Submission Type</strong>
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
                  <select
                    id="a-display"
                    className="form-control ms-2 w-50"
                    defaultValue="Online"
                  >
                    <option value="online">Online</option>
                    <option value="in-person">In-Person</option>
                  </select>
                  <br />
                  <strong className="ms-2">Online Entry Options</strong>
                  <br />
                  <div className="mt-3 mb-3 form-check d-block">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="online-options-text"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="online-options-text"
                    >
                      Text Entry
                    </label>
                  </div>
                  <div className="mb-3 form-check d-block">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="online-options-url"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="online-options-url"
                    >
                      Website URL
                    </label>
                  </div>
                  <div className="mb-3 form-check d-block">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="online-options-media"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="online-options-media"
                    >
                      Media Recordings
                    </label>
                  </div>
                  <div className="mb-3 form-check d-block">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="online-options-annotation"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="online-options-annotation"
                    >
                      Student Annotation
                    </label>
                  </div>
                  <div className="mb-3 form-check d-block">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="online-options-upload"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="online-options-upload"
                    >
                      File Uploads
                    </label>
                  </div>
                </div>
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
                    <div className="row">
                      <div className="col-12">
                        <label htmlFor="assign-to" className="form-label">
                          <b>Assign to</b>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="assign-to"
                          placeholder="Everyone"
                        />
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-12">
                        <label htmlFor="due" className="form-label">
                          <b>Due</b>
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="due"
                          defaultValue="2023-10-18"
                        />
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-6">
                        <label htmlFor="from" className="form-label">
                          <b>Available from</b>
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="from"
                          defaultValue="2023-10-15"
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
                          defaultValue="2023-10-28"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-secondary w-100">
                  + Add
                </button>
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
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-secondary me-2"
            >
              Cancel
            </Link>

            <button
              type="submit"
              onClick={handleSave}
              className="btn btn-danger"
            >
              Save
            </button>
          </div>
          <hr />
        </form>
      </div>
    </div>
  );
}

export default AssignmentEditor;
